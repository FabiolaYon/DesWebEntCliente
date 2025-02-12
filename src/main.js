import { TIME_FORMAT } from "./domain/timer/constants.js";
import Timer from "./domain/timer/TimerEntity.js";

//TODO: get last timer from local storage
let lastTimer = 1200;
let timer = new Timer(lastTimer);

// Refrescamos la UI
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");

/**
 * @param {HTMLElement} minutes
 * @param {HTMLElement} seconds
 * @param {Timer} timer
 */
const refreshUI = (minutes, seconds, timer) => {
    if (minutes && seconds) {
        minutes.innerHTML = timer.getMinutes();
        seconds.innerHTML = timer.getSeconds();
    } else {
        console.error("No se encontraron los elementos de la UI");
    }
};

refreshUI(minutesText, secondsText, timer);

const MAX_MINUTE = 50;
const MIN_SECOND = 0;

let minutes = 0;
let seconds = 20;

// Corrección: Llamar correctamente a las funciones de incremento y decremento
const addMinut = () => {
    timer.remainingTime = Math.min(timer.remainingTime + 60, MAX_MINUTE * 60);
    refreshUI(minutesText, secondsText, timer);
};

const subMin = () => {
    timer.remainingTime = Math.max(timer.remainingTime - 60, MIN_SECOND);
    refreshUI(minutesText, secondsText, timer);
};

// Corrección: Definir startButton y añadir evento
const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", () => {
        tic();
    });
} else {
    console.error("No se encontró el botón de inicio");
}

const tic = () => {
    if (timer.remainingTime > 0) {
        timer.remainingTime--;
        refreshUI(minutesText, secondsText, timer);
        setTimeout(tic, 1000);
    } else {
        alert("It's timeeeee... (All I want for Christmas is you!)");
    }
};
