import React from 'react';

export default function LactationScreen() {
    return (
        <section>
            <h2>Lactancia</h2>
            <div id="timer">00:00</div>
            <button onClick={startTimer}>Iniciar</button>
            <button onClick={stopTimer}>Detener</button>
            <button onClick={resetTimer}>Reiniciar</button>
        </section>
    );
}
