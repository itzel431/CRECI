function goToSecondScreen() {
    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("second-screen").classList.remove("hidden");
}

// Funcionalidades de los apartados
function goToDiary() {
    alert("Aquí podrás registrar tu diario.");
}

function goToMoments() {
    alert("¡Toma una foto o selecciona una imagen para tus momentos!");
    // Aquí agregaríamos la funcionalidad de tomar foto o elegir una imagen del dispositivo
}

function goToHealth() {
    alert("Registra información sobre la salud de tu bebé.");
}

function goToLactation() {
    alert("Aquí puedes controlar el tiempo de lactancia con un cronómetro.");
}

function goToGrowth() {
    alert("Registra el crecimiento de tu bebé.");
}

function goToWhatsApp() {
    alert("Accede a la funcionalidad de WhatsApp.");
}
