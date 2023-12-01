function mostrarInfo(id) {
    // Ocultar todas las secciones de información específica
    var seccionesInfo = document.querySelectorAll('.info-box');
    seccionesInfo.forEach(function (seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección específica
    var seccionMostrar = document.getElementById(id);
    if (seccionMostrar) {
        seccionMostrar.style.display = 'block';

        // Mostrar el cuadro adicional en el Menú Principal
        var cuadroAdicional = document.getElementById('additional-menu-box');
        if (id === 'info1') {
            cuadroAdicional.style.display = 'block';
        } else {
            cuadroAdicional.style.display = 'none';
        }
    }
}

// Asegúrate de llamar a la función al cargar la página para mostrar la sección inicial
mostrarInfo('info1');
