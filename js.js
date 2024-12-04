let timerInterval;
let seconds = 0;
let minutes = 0;
let timerRunning = false;

function goToSecondScreen() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('second-screen').classList.remove('hidden');
}

function openMoments() {
    document.getElementById('second-screen').classList.add('hidden');
    document.getElementById('moments-screen').classList.remove('hidden');
}

function openHealth() {
    document.getElementById('second-screen').classList.add('hidden');
    document.getElementById('health-screen').classList.remove('hidden');
}

function openLactation() {
    document.getElementById('second-screen').classList.add('hidden');
    document.getElementById('lactation-screen').classList.remove('hidden');
}

function goBack() {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById('second-screen').classList.remove('hidden');
}

function takePhoto() {
    document.getElementById('photo-input').click();
}

function uploadPhoto() {
    const photoInput = document.getElementById('photo-input');
    const file = photoInput.files[0];

    if (file) {
        const album = document.getElementById('album');
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        album.appendChild(image);
    }
}

function startStopTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        timerRunning = false;
        clearInterval(timerInterval);
    }
}

function updateTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
