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
  const titulo = document.getElementById("modal-title").textContent.trim();
  const beneficios = document.getElementById("modal-beneficios").textContent.trim();
  const descripcion = document.getElementById("modal-desc").textContent.trim();
  const precio = document.getElementById("modal-price").textContent.trim();

  const mensaje = `Hola! Me gustaría más información sobre el tratamiento "${titulo}".\nBeneficios: ${beneficios}\nDescripción: ${descripcion}\nPrecio: ${precio}`;
  const numero = "50660247413"; // Número en formato internacional sin signos

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");

  cerrarModal();
};

});