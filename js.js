// Función para cambiar a la pantalla principal
function goToSecondScreen() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");
}

// Función para Momentos: abrir el álbum y tomar o seleccionar fotos
function goToMomentos() {
    alert("Funcionalidad de Momentos: Selecciona una foto o toma una foto, agrega una descripción y guárdala.");
    // Aquí se puede integrar un servicio de API para tomar una foto
}

// Función para Salud: ingresar datos sobre la salud del bebé
function goToSalud() {
    let healthData = prompt("Ingresa los datos de salud del bebé (ej: tipo de leche, alergias, vacunas):");
    if (healthData) {
        alert("Datos de salud guardados: " + healthData);
    } else {
        alert("No se ingresaron datos.");
    }
}

// Función para Lactancia: cronómetro
let lactanciaTimer;
let lactanciaStartTime;
let lactanciaElapsedTime = 0;

function goToLactancia() {
    let action = prompt("¿Iniciar o detener el cronómetro de lactancia? (escribe 'iniciar' o 'detener')");
    if (action.toLowerCase() === 'iniciar') {
        lactanciaStartTime = Date.now() - lactanciaElapsedTime;
        lactanciaTimer = setInterval(function() {
            lactanciaElapsedTime = Date.now() - lactanciaStartTime;
            console.log("Lactancia en curso: " + (lactanciaElapsedTime / 1000).toFixed(2) + " segundos.");
        }, 100);
        alert("Cronómetro iniciado.");
    } else if (action.toLowerCase() === 'detener') {
        clearInterval(lactanciaTimer);
        alert("Lactancia detenida. Duración: " + (lactanciaElapsedTime / 1000).toFixed(2) + " segundos.");
        lactanciaElapsedTime = 0;
    } else {
        alert("Comando no reconocido.");
    }
}

// Función para Crecimiento: Mostrar datos de crecimiento (puedes personalizar)
function goToCrecimiento() {
    alert("Funcionalidad de Crecimiento: Aquí se mostrarían los datos de crecimiento del bebé.");
}

// Función para WhatsApp: enlazar con WhatsApp
function goToWhatsApp() {
    window.open('https://wa.me/', '_blank');
}
