// Verifica si el navegador soporta view-timeline
if (!CSS.supports("animation-timeline", "view")) {
    const sectionPin = document.getElementById("sectionPin");
    const pinWrap = document.querySelector(".pin-wrap");
    const pinWrapSticky = document.querySelector(".pin-wrap-sticky");

    // Obtén el ancho total de pin-wrap y la altura de la sección
    const pinWrapWidth = pinWrap.offsetWidth;
    const sectionHeight = sectionPin.offsetHeight;
    const stickyHeight = pinWrapSticky.offsetHeight;

    // Calcula el desplazamiento total necesario en horizontal
    const totalScroll = sectionHeight - stickyHeight;
    const maxTranslateX = pinWrapWidth - window.innerWidth;

    // Agrega el evento de desplazamiento
    window.addEventListener("scroll", () => {
        // Calcula la proporción de desplazamiento vertical
        const scrollY = window.scrollY - sectionPin.offsetTop;

        if (scrollY >= 0 && scrollY <= totalScroll) {
            // Calcula la posición en X en función del desplazamiento vertical
            const translateX = Math.min((scrollY / totalScroll) * maxTranslateX, maxTranslateX);
            pinWrap.style.transform = `translateX(-${translateX}px)`;
        }
    });
}
