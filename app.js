// Función para ir a la segunda pantalla (pantalla principal)
function goToSecondScreen() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");
}

// Función para ir a Momentos
function goToMomentos() {
    let input = prompt("¿Quieres agregar una foto de tu bebé? (S para tomar foto o N para seleccionar)");
    if (input.toUpperCase() === 'S') {
        alert("Aquí iría la funcionalidad para tomar una foto");
    } else if (input.toUpperCase() === 'N') {
        alert("Aquí iría la funcionalidad para seleccionar una foto del dispositivo");
    } else {
        alert("Opción no válida.");
    }
}

// Función para ir a Salud
function goToSalud() {
    let saludData = {};
    saludData.tipoLeche = prompt("¿Qué tipo de leche está tomando tu bebé?");
    saludData.tipoPañales = prompt("¿Qué tipo de pañales está usando?");
    saludData.alergias = prompt("¿Tu bebé tiene alguna alergia?");
    saludData.tipoSangre = prompt("¿Qué tipo de sangre tiene tu bebé?");
    saludData.vacunas = prompt("¿Qué vacunas tiene tu bebé?");
    saludData.citas = prompt("¿Cuándo es la próxima cita al pediatra?");
    alert(`Datos registrados: ${JSON.stringify(saludData)}`);
}

// Función para ir a Lactancia
function goToLactancia() {
    let startTime;
    let endTime;
    let isStarted = false;

    const startStopButton = prompt("Iniciar lactancia? (Escribe 'Iniciar' para comenzar o 'Detener' para parar)");
    if (startStopButton === "Iniciar") {
        startTime = new Date();
        alert("Lactancia iniciada.");
        isStarted = true;
    } else if (startStopButton === "Detener" && isStarted) {
        endTime = new Date();
        let duration = (endTime - startTime) / 1000; // en segundos
        alert(`Duración de la lactancia: ${duration} segundos`);
    } else {
        alert("Operación no válida.");
    }
}

// Función para ir a Crecimiento (sin funcionalidad específica, puedes agregarla)
function goToCrecimiento() {
    alert("Esta sección estará dedicada al crecimiento del bebé.");
}

// Función para ir a WhatsApp (puedes agregar la funcionalidad de enviar mensajes)
function goToWhatsApp() {
    alert("Redirigiendo a WhatsApp...");
}
