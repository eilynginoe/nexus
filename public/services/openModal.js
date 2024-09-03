// Función para abrir el modal
function openModal(event, modalId) {
    event.preventDefault(); // Evita que el enlace realice la acción por defecto
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal.id === modalId) {
            modal.style.display = 'block';
        }
    });
}

// Función para cerrar el modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Función para manejar el clic en el botón dentro del modal
function handleButtonClick() {
    alert('Botón clickeado'); // Reemplaza esto con la lógica que necesites
}

// Cierra el modal si se hace clic fuera del modal-content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
}

