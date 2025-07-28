document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#sidebar a");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = document.querySelector(`#sidebar a[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("observed"));
        link.classList.add("observed");
      }
    });
  }, {
    threshold: 0.1,
  });

  sections.forEach(section => observer.observe(section));
})