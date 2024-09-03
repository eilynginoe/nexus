// script.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Evento para mostrar/ocultar el menú al hacer clic en el botón de hamburguesa
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Evento para cambiar el estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header'); // Selecciona el header
        if (window.scrollY > 50) {  // Cambia el valor para ajustar cuándo se aplica el estilo
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Agregar borde rojo en el enlace correspondiente a la página actual
    const currentPath = window.location.pathname; // Obtiene la ruta actual (ejemplo: '/productos')
    const navItems = document.querySelectorAll('.nav-links li a'); // Selecciona todos los enlaces de navegación

    // Itera sobre los enlaces para verificar cuál coincide con la ruta actual
    navItems.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link'); // Añade una clase para resaltar el enlace
        }
    });
});


