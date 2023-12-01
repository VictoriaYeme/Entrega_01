function mostrarInfo(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('section');
    secciones.forEach(function (seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección específica
    var seccionMostrar = document.getElementById(id);
    if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
    }
}
