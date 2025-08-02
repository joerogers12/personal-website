const collapseButton = document.getElementById("collapse-sidebar");
const expandButton = document.getElementById("expand-sidebar");
const sidebar = document.querySelector("aside");

collapseButton.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  expandButton.style.display = "block";
});

expandButton.addEventListener("click", () => {
  sidebar.classList.remove("collapsed");
  expandButton.style.display = "none";
});