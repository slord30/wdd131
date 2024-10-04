const wcf = document.querySelector('#wcf');

function windChill(temp, speed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow (speed, 0.16)) + (0.34275 * tempC * Math.pow(speed, 0.16));
}

let tempC = 61;
let speed = 2;



if (tempC <= 10 && speed > 4.8) {
    wcf.textContent = windChill(tempC, speed).toFixed(1);
}
else {
    wcf.textContent = "N/A";
}