import express from "express";
import js from "js";
import path from "path";
import dotenv from "dotenv";
import fetchTopArtists from "./spotify";

const app = express();
const port = process.env.PORT || 3000;

//
app.set("view engine", "ejs");
app.use(express.static("public"));

// Periodically refresh top artists (every hour)
const REFRESH_RATE = 1000  * 60 * 60;
setInterval(fetchTopArtists, REFRESH_RATE);

// Fetch artists immediately upon startup
fetchTopArtists();

// API endpoint to serve cached data
app.get("/api/top-artists", (req, res) => {
  const artists = JSON.parse(fs.readFileSync("./topArtists.json", "utf-8"));
  res.json(artists);
});

// Homepage with top artists
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => console.log(`Server running on port ${port}`));