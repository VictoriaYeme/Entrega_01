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



function mostrarInformacionAdicional(region) {
    // Obtener la sección de información adicional correspondiente a la región
    var regionInfo = document.getElementById(region + '-info');
    
    // Ocultar todas las secciones de información adicional
    var seccionesInfoAdicional = document.querySelectorAll('.info-adicional');
    seccionesInfoAdicional.forEach(function (seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección específica de información adicional
    if (regionInfo) {
        regionInfo.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.querySelector('.progress-bar');
    const arrow = document.querySelector('.arrow');
    const checkboxes = document.querySelectorAll('.questions input[type="checkbox"]');
  
    // Mueve la flecha según el progreso al cargar la página
    updateProgressBar();
  
    // Agrega un evento clic a cada checkbox para manejar las respuestas
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updateProgressBar);
    });
  
    function updateProgressBar() {
      // Calcula el número total de respuestas "sí"
      const respuestasPositivas = Array.from(checkboxes).filter((checkbox) => checkbox.checked).length;
  
      // Cada "sí" contribuye con un 10%
      const porcentajeRespuestasPositivas = respuestasPositivas * 10;
  
      // Limita el porcentaje al 100% para evitar que la flecha se desplace más allá del final de la barra
      const porcentajeFinal = Math.min(porcentajeRespuestasPositivas, 100);
  
      // Mueve la flecha según el progreso
      arrow.style.transform = `translateX(${porcentajeFinal}%)`;
    }
   
  
  


// Asegúrate de llamar a la función al cargar la página para mostrar la sección inicial
mostrarInfo('info1');

});