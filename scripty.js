// Remover la animación de carga después de 5 segundos
    setTimeout(function() {
      var loaderContainer = document.getElementById('loaderContainer');
      loaderContainer.style.opacity = '0';
      loaderContainer.style.pointerEvents = 'none';
    }, 5000);
