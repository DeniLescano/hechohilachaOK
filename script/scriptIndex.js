// Configuración del carrusel personalizado
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carrusel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Función para mostrar el elemento actual
    function mostrarItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('activo', i === index);
        });
    }

    // Eventos de los botones
    prevBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Si llega al inicio, vuelve al final
        mostrarItem(currentIndex);
    });

    nextBtn?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length; // Si llega al final, vuelve al inicio
        mostrarItem(currentIndex);
    });

    // Autoavance del carrusel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length; // Avanza al siguiente elemento
        mostrarItem(currentIndex);
    }, 5000); // Cambia cada 5 segundos

    // Mostrar el primer elemento al cargar la página
    mostrarItem(currentIndex);
});

// Configuración del menú responsivo
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

