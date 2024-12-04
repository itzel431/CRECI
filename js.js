// Función para iniciar el cronómetro
let timer;
let isRunning = false;
let time = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            time++;
            document.getElementById('timer').innerText = formatTime(time);
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    time = 0;
    document.getElementById('timer').innerText = '00:00';
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${sec < 10 ? '0' : ''}${sec}`;
}

// Lógica para seleccionar una imagen
function handleImageSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const image = new Image();
            image.src = reader.result;
            document.getElementById('selectedImage').appendChild(image);
        };
        reader.readAsDataURL(file);
    }
}
