// Import packages
import axios from "axios"; // Used to make HTTP requests to the Spotify API
import fs from "fs"; // Node's built-in File System module to read/write files
import dotenv from "dotenv"; // Loads the .env file
// Set the .env values as environment variables in process.env
dotenv.config();

//Gets a fresh token from Spotify's authentication system
async function getAccessToken() {
  // Build query string-style data to use refresh token to request new access token with Spotify's OAuth API specifications
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", process.env.SPOTIFY_REFRESH_TOKEN);

  // Create string for Spotify's required Base64 encoding
  const auth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');

  // Make a post request to Spotify's token endpoint with auth headers to exchange refresh token for short-lived access token
  const res = await axios.post("https://accounts.spotify.com/api/token", params, {
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  // Axios structures res.data, access_token is specific to the Spotify API
  return res.data.access_token;
}

// Adds the top artists to JSON file
async function fetchTopArtists() {
  const NUM_ARTISTS = 5;
  const accessToken = await getAccessToken();

  // Send GET request to top artists endpoint with fresh access token
  const res = await axios.get(`https://api.spotify.com/v1/me/top/artists?limit=${NUM_ARTISTS}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  // Transform each item of the response items array into name, image, and genre JS object format
  const topArtists = res.data.items.map(artist => ({
    name: artist.name,
    image: artist.images[0]?.url,
    genres: artist.genres
  }));

  // Write the stringified JS array to the JSON file (replacer: null -> don't filter out any keys, spaces: 2 -> indent with 2 spaces)
  fs.writeFileSync("./topArtists.json", JSON.stringify(topArtists, null, 2));
}

// Export the function so other files can use it
module.exports = { fetchTopArtists };