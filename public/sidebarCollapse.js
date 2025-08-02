const toggleButton = document.getElementById("toggle-sidebar");
const sidebar = document.querySelector("aside");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});