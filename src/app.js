// Cambiar a la segunda pantalla cuando se presiona el botón "Comenzar"
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("mainScreen").style.display = "block";
  });
  
  // Mostrar la sección correspondiente
  function showSection(section) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll(".section-content");
    sections.forEach(sec => sec.style.display = "none");
  
    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(section);
    if (sectionToShow) {
      sectionToShow.style.display = "block";
    }
  }
  