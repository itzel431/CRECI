// Muestra la pantalla principal al presionar el botón "Comenzar"
document.getElementById('startButton').addEventListener('click', function() {
  document.getElementById('homeScreen').style.display = 'none';
  document.getElementById('mainScreen').style.display = 'block';
});

// Función para mostrar las secciones (Salud, Momentos, etc.)
function showSection(sectionName) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    section.classList.remove('active');
  });
  document.getElementById(sectionName).classList.add('active');
}

  