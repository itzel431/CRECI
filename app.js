// Función para cambiar de pantalla
function goToSecondScreen() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");
}

// Función para cada apartado
function goToDiario() {
    alert("Aquí puedes registrar el Diario del bebé.");
}

function goToMomentos() {
    alert("Aquí puedes agregar fotos y momentos especiales.");
}

function goToSalud() {
    alert("Aquí puedes ingresar datos importantes sobre la salud del bebé.");
}

function goToLactancia() {
    alert("Aquí puedes llevar un control de las sesiones de lactancia.");
}

function goToCrecimiento() {
    alert("Aquí puedes registrar el crecimiento del bebé.");
}

function goToWhatsApp() {
    alert("Aquí puedes comunicarte con el pediatra o familiares.");
}
