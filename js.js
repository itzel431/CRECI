// Función para ir a la pantalla principal
function goToSecondScreen() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('second-screen').classList.remove('hidden');
}

// Funciones para los apartados
function goToDiary() {
    alert('Vas a Diario!');
    // Lógica para mostrar el Diario
}

function goToMoments() {
    alert('Vas a Momentos!');
    // Lógica para tomar fotos, guardar descripción, etc.
}

function goToHealth() {
    alert('Vas a Salud!');
    // Lógica para registrar datos de salud
}

function goToLactation() {
    alert('Vas a Lactancia!');
    // Lógica para iniciar el cronómetro de lactancia
}

function goToGrowth() {
    alert('Vas a Crecimiento!');
    // Lógica para el seguimiento del crecimiento del bebé
}

function goToWhatsApp() {
    alert('Vas a WhatsApp!');
    // Lógica para abrir WhatsApp o agregar alguna funcionalidad
}
