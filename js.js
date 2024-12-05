// Función para ir a la segunda pantalla cuando se presiona el botón "Empezar"
function goToSecondScreen() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");
}

// Función para ir a la sección de Momentos
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

// Función para ir a la sección de Salud
function goToSalud() {
    let saludData = {};
    saludData.tipoLeche = prompt("¿Qué tipo de leche está tomando tu bebé?");
    saludData.tipoPañales = prompt("¿Qué tipo de pañales está usando?");
    saludData.alergias = prompt("¿Tu bebé tiene alguna alergia?");
    saludData.tipoSangre = prompt("¿Cuál es el tipo de sangre de tu bebé?");
    saludData.vacunas = prompt("¿Qué vacunas ha recibido?");
    saludData.proximasCitas = prompt("¿Cuándo es la próxima cita con el pediatra?");
    
    alert(`Datos de salud guardados: \n
    Tipo de leche: ${saludData.tipoLeche}\n
    Tipo de pañales: ${saludData.tipoPañales}\n
    Alergias: ${saludData.alergias}\n
    Tipo de sangre: ${saludData.tipoSangre}\n
    Vacunas: ${saludData.vacunas}\n
    Próxima cita: ${saludData.proximasCitas}`);
}

// Función para ir a la sección de Lactancia
let timer;
let isRunning = false;
let lactanciaDuracion = 0;

function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        alert(`Lactancia registrada: ${lactanciaDuracion} minutos.`);
    } else {
        lactanciaDuracion = 0;
        isRunning = true;
        timer = setInterval(() => {
            lactanciaDuracion++;
            document.getElementById("timerDisplay").textContent = `Duración: ${lactanciaDuracion} min`;
        }, 60000);  // Incrementa cada minuto
    }
}

// Función para ir a la sección de Crecimiento (si aplica)
function goToCrecimiento() {
    alert("Aquí iría la sección de Crecimiento");
}

// Función para ir a la sección de WhatsApp (si aplica)
function goToWhatsApp() {
    alert("Aquí iría la funcionalidad de WhatsApp");
}

