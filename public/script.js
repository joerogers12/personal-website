const response = await fetch("/api/top-artists");
const artists = await response.json();

const ul = document.getElementById("artist-list");

artists.forEach(artist => {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${artist.image}" width="64" style="vertical-align: middle; border-radius: 50%; margin-right: 10px;">
    <strong>${artist.name}</strong> <em>(${artist.genres.slice(0, 2).join(', ')})</em>
  `;
  ul.appendChild(li);
});