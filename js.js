// Función para cambiar de pantalla: de inicio a la pantalla principal
function goToSecondScreen() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");
}

// Función para cada apartado
function goToMoments() {
    alert("Funcionalidad de Momentos: Toma o selecciona una foto, añade descripción y guarda.");
    // Aquí puedes abrir una nueva ventana o lógica para tomar una foto
}

function goToHealth() {
    let healthData = prompt("Ingresa datos de salud (ej: Alergias, vacunas, etc.):");
    if (healthData) {
        alert("Datos de salud guardados: " + healthData);
    } else {
        alert("No se ingresaron datos.");
    }
}

function goToLactation() {
    let startTime = Date.now();
    alert("Lactancia: Cronómetro iniciado.");
    
    // Temporizador para la lactancia
    let timer = setInterval(function() {
        let elapsedTime = (Date.now() - startTime) / 1000; // segundos
        console.log("Tiempo: " + elapsedTime + " segundos");
    }, 1000);
}

function goToGrowth() {
    alert("Funcionalidad de Crecimiento: Puedes registrar el crecimiento del bebé.");
}

function goToWhatsApp() {
    alert("Funcionalidad de WhatsApp: Puedes compartir información con el pediatra.");
}
