document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop(); // obtiene solo "index.html"

  links.forEach(link => {
    const linkPage = link.getAttribute("href").toLowerCase();
    if (linkPage === currentPage.toLowerCase()) {
      link.classList.add("active");
    }
  });
});