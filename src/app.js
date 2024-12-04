// Seleccionamos los elementos del DOM
const startButton = document.getElementById("startButton");
const homeScreen = document.getElementById("homeScreen");
const mainScreen = document.getElementById("mainScreen");

// Al hacer clic en el botón "Comenzar", cambiamos de pantalla
startButton.addEventListener("click", () => {
  homeScreen.style.display = "none"; // Ocultamos la pantalla de inicio
  mainScreen.style.display = "flex"; // Mostramos la pantalla principal
});
