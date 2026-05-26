const temperature = document.getElementById("temperature");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");

function convert(){

  if (celsius.checked) {
    result.textContent = (temperature.value * 9/5 + 32).toFixed(2) + " °F";
  } else {
    result.textContent = ((temperature.value - 32) * 5/9).toFixed(2) + " °C";
  }
}