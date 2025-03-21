// Configuración del carrusel personalizado
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carrusel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    // Función para mostrar el elemento actual
    function mostrarItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
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

//Modal para los productos del catálogo
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("section img");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const whatsappLink = document.getElementById("whatsappLink");
    const modalElement = document.getElementById("imageModal");

    // Asegurarse de que Bootstrap esté definido
    if (typeof bootstrap !== "undefined" && bootstrap.Modal) {
        var myModal = new bootstrap.Modal(modalElement);
    } else {
        console.error("Bootstrap no está cargado correctamente.");
        return;
    }

    images.forEach(img => {
        img.addEventListener("click", function () {
            const imageSrc = this.src;
            const imageAlt = this.alt;
            const productName = imageAlt.trim();

            modalImage.src = imageSrc;
            modalDescription.textContent = `Explora nuestro producto: ${productName}`;
            whatsappLink.href = `https://wa.me/5493436207104?text=Hola, me interesa este producto: ${productName}`;

            myModal.show(); // Corrección aquí
        });
    });
});

//Menú responsivo
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    if (!menuToggle || !menu) {
        console.error("No se encontró el elemento del menú o el toggle.");
        return;
    }

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
        menu.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        // Verifica si el clic fue fuera del menú y el toggle
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    });
});