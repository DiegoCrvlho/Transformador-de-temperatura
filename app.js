'use strict';
const converterCelsius = document.querySelector('.converterCelsius');
const converterFahrenheit = document.querySelector('.converterFahrenheit');

function celsiusToFahrent() {
    const celsius = document.getElementById('celsius').value;
    let finalResultc = document.querySelector('.finalResultCelsius');
    finalResultc.textContent = convertCelsiusToFahrenheit(celsius).toFixed(2) + "°F";
}

function fahrentToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    let finalResultf = document.querySelector('.finalResultFahrenheit');
    finalResultf.innerText = convertFahrenheitToCelsius(fahrenheit).toFixed(2) + "°C";
}

function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

converterCelsius.addEventListener('click', function () {
    celsiusToFahrent();
})

converterFahrenheit.addEventListener('click', function () {
    fahrentToCelsius();
})
