// Definimos los límites del temporizador
const MAX_TIME = 59; // Máximo de minutos permitidos
const MIN_TIME = 0;  // Mínimo de minutos permitidos

// Variable principal del tiempo en minutos
let time = 0;
let timer = null; // Variable para el setInterval
let lastSetTime = 0; // Guarda el último valor para resetear

// Capturamos los elementos del HTML
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("restButton");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

// Función para actualizar la pantalla del temporizador
const updateDisplay = () => {
    let minutes = time;
    let seconds = 0;

    let formattedMinutes;
    let formattedSeconds;

    if (minutes < 10) {
        formattedMinutes = "0" + minutes;
    } else {
        formattedMinutes = minutes;
    }

    formattedSeconds = "00"; // Siempre mostramos los segundos en "00"

    minutesDisplay.textContent = formattedMinutes;
    secondsDisplay.textContent = formattedSeconds;
};

// Función para añadir tiempo (+1 minuto)
const addTime = () => {
    if (time < MAX_TIME) {
        time = time + 1;
        lastSetTime = time; // Guarda el último valor introducido
        updateDisplay();
    }
};

// Función para reducir tiempo (-1 minuto)
const subTime = () => {
    if (time > MIN_TIME) {
        time = time - 1;
        lastSetTime = time; // Guarda el último valor introducido
        updateDisplay();
    }
};

// Función para iniciar el temporizador
const startTimer = () => {
    if (timer !== null) {
        return; // Evita múltiples temporizadores
    }

    let totalSeconds = time * 60; // Convertimos los minutos en segundos

    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            timer = null;
            return;
        }

        totalSeconds = totalSeconds - 1;

        let newMinutes = Math.floor(totalSeconds / 60);
        let newSeconds = totalSeconds % 60;

        let formattedMinutes;
        let formattedSeconds;

        if (newMinutes < 10) {
            formattedMinutes = "0" + newMinutes;
        } else {
            formattedMinutes = newMinutes;
        }

        if (newSeconds < 10) {
            formattedSeconds = "0" + newSeconds;
        } else {
            formattedSeconds = newSeconds;
        }

        minutesDisplay.textContent = formattedMinutes;
        secondsDisplay.textContent = formattedSeconds;
    }, 1000);
};

// Función para reiniciar el temporizador al último valor introducido
const resetTimer = () => {
    clearInterval(timer);
    timer = null;
    time = lastSetTime;
    updateDisplay();
};

// Asignamos eventos a los botones
upButton.addEventListener("click", addTime);
downButton.addEventListener("click", subTime);
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

// Inicializamos la pantalla con 00:00
updateDisplay();
