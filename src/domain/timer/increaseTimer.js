import Timer from "../TimerEntity.js"

/**
 * @param {Timer} timer
 */

const increaseTimer = (timer) => {
    timer.remainingSeconds += 60 - (remainingSeconds % 60)
}

/**
 * @param {Timer} timer
 */
/*
const decreaseTimer = (timer) => {
    if (timer.remainingSeconds % 60 !== 0) {
        timer.remainingSeconds = timer.remainingSeconds - (timer.remainingSeconds % 60);
    } else {
        timer.remainingSeconds = timer.remainingSeconds - 60;
    }
};*/

const decreaseTimer = (timer) => {
    let remainingSeconds = timer.remainingTime % 60
    timer.remainingTime -= (remainingSeconds || 60)
}