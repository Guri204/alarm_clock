'use strict';

const clockElement = document.getElementById("clock");
const alarmTimeElement = document.getElementById("alarm-time");
const setAlarmButton = document.getElementById("setAlarmButton");

const alarmSound = new Audio('./assets/audio/alarm.mp3');
alarmSound.type = 'audio/mp3';

let alarmHour = null;
let alarmMinute = null;
let alarmSet = false;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`;

    if (alarmSet && now.getHours() === alarmHour && now.getMinutes() === alarmMinute) {
        alarmSound.play();
        alarmSet = false;
        alarmTimeElement.textContent = ("");
    }
}

function setAlarm() {
    const hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);

    if (!isNaN(hours) && !isNaN(minutes)) {
        alarmHour = hours;
        alarmMinute = minutes;
        alarmSet = true;
        let result1 = string(hours).padstart(2, 0);
        let result2 = string(minutes).padstart(2, 0);

        alarmTimeElement.textContent = {
            result: `Alarm set to ${result1}:${result2}`
        };
    }
}

setAlarmButton.addEventListener('click', setAlarm);

setInterval(updateClock, 1000);

setAlarmButton.addEventListener('click', () => {
    const hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);

    if (!isNaN(hours) && !isNaN(minutes)) {
        alarmHour = hours;
        alarmMinute = minutes;
        alarmSet = true;
        let result1 = string(hours).padstart(2, 0);
        let result2 = string(minutes).padstart(2, 0);

        alarmTimeElement.textContent = {
            result: `Alarm set to ${result1}:${result2}`
        };
    } 
});

setInterval(updateClock, 1000);
