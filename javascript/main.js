document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-bar a");
  const productCards = document.querySelectorAll(".product-card");

  categoryLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedCategory = this.getAttribute("data-filter");

      productCards.forEach(card => {
        const cardCategories = card.getAttribute("data-category").split(",");
        if (cardCategories.includes(selectedCategory) || selectedCategory === "Todos") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      categoryLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});