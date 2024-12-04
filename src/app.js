// Obtén los elementos
const startButton = document.getElementById('startButton');
const homeScreen = document.getElementById('homeScreen');
const mainScreen = document.getElementById('mainScreen');

// Función para cambiar a la pantalla principal
startButton.addEventListener('click', () => {
  homeScreen.style.display = 'none'; // Ocultar la pantalla inicial
  mainScreen.style.display = 'block'; // Mostrar la pantalla principal
});
