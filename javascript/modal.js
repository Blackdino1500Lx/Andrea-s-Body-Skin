document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');

  document.querySelectorAll('.product-card .view-more').forEach(button => {
    button.addEventListener('click', e => {
      const card = e.target.closest('.product-card');

      // Elementos visuales
      const title = card.querySelector('h4')?.textContent || "Sin título";
      const desc = card.querySelector('p')?.textContent || "Sin descripción";
      const price = card.querySelector('.price')?.textContent || "Sin precio";

      // Atributo personalizado
      const beneficios = card.dataset.beneficios || "No especificado";

      // Mostrar en el modal
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-desc').textContent = desc;
      document.getElementById('modal-price').textContent = price;
      document.getElementById('modal-beneficios').textContent = beneficios;

      modal.style.display = 'flex';
    });
  });

  // Función para cerrar el modal
  window.cerrarModal = function () {
    modal.style.display = 'none';
  };

  // Función para confirmar compra
  window.confirmarCompra = function () {
    alert("¡Gracias por tu compra!");
    cerrarModal();
  };
});