import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fetchTopArtists } from "./spotify.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

// Periodically refresh top artists (every hour)
const REFRESH_RATE = 1000  * 60 * 60;
setInterval(() => {
  fetchTopArtists().catch(err => console.error("Error refreshing top artists:", err));
}, REFRESH_RATE);

const CACHE_FILE = "./topArtists.json";
const ONE_HOUR = 1000 * 60 * 60;

// Checks if json cache hasn't been updated in the last hour
function isCacheStale(filePath, maxAgeMs) {
  try {
    const stats = fs.statSync(filePath);
    const age = Date.now() - stats.mtimeMs;
    return age > maxAgeMs;
  } catch (err) {
    return true; // File doesn't exist or can't be read
  }
}

// Fetch artists immediately upon startup if cache is missing or stale
if (isCacheStale(CACHE_FILE, ONE_HOUR)) {
  fetchTopArtists().catch(err => console.error("Error fetching top artists on startup:", err));  
}
else {
  console.log("Using cached top artists; no fetch needed on startup.");
}

// API endpoint to serve cached data
app.get("/api/top-artists", (req, res) => {
  try {
    const artists = JSON.parse(fs.readFileSync("./topArtists.json", "utf-8"));
    res.json(artists);
  } catch (error) {
    res.status(500).json({ error: "Could not load top artists" });
  }
});

// Homepage with top artists
app.get("/", (req, res) => {
  let artists = [];

  try {
    artists = JSON.parse(fs.readFileSync("./topArtists.json", "utf-8"));
  } catch (error) {
    console.error("Could not load top artists for homepage:", error);
  }
  res.render("index.ejs", { artists });
});

app.listen(port, () => console.log(`Server running on port ${port}`));