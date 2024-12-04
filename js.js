// Funciones de navegación
function goToSecondScreen() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('second-screen').classList.remove('hidden');
}

function goToMomentsScreen() {
    document.getElementById('second-screen').classList.add('hidden');
    document.getElementById('moments-screen').classList.remove('hidden');
}

function goToHealthScreen() {
    document.getElementById('second-screen').classList.add('hidden');
    document.getElementById('health-screen').classList.remove('hidden');
}

function goToLactationScreen() {
    document.getElementById('second-screen').classList.add('hidden');
    document.getElementById('lactation-screen').classList.remove('hidden');
}

function goBack() {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById('second-screen').classList.remove('hidden');
}

// Funcionalidad de Momentos (guardar fotos)
let photoGallery = [];

function selectPhoto() {
    alert('Seleccionar Foto (en esta demo no es funcional)');
}

function takePhoto() {
    alert('Tomar Foto (en esta demo no es funcional)');
}

function addPhotoToGallery(photo, description) {
    photoGallery.push({ photo, description, date: new Date().toLocaleString() });
    displayGallery();
}

function displayGallery() {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = photoGallery.map(photo => `
        <div class="photo-item">
            <img src="${photo.photo}" alt="Foto" width="100">
            <p>${photo.description}</p>
            <p>${photo.date}</p>
        </div>
    `).join('');
}

// Funcionalidad de Salud (guardar datos)
document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const allergies = document.getElementById('allergies').value;
    const milkType = document.getElementById('milk-type').value;
    const vaccines = document.getElementById('vaccines').value;

    alert(`Datos guardados: Alergias: ${allergies}, Leche: ${milkType}, Vacunas: ${vaccines}`);
});

// Funcionalidad de Lactancia (cronómetro)
let timerInterval;
let timerSeconds = 0;

function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds++;
        document.getElementById('timer').textContent = formatTime(timerSeconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
