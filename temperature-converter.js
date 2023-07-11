function convertTemperature() {
  var temperature = parseFloat(document.getElementById('temperature').value);
  var unit = document.getElementById('unit').value;
  var result = document.getElementById('result');

  if (unit === 'celsius') {
    var fahrenheit = (temperature * 9/5) + 32;
    var kelvin = temperature + 273.15;
    result.innerHTML = `Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>Kelvin: ${kelvin.toFixed(2)}K`;
  } else if (unit === 'fahrenheit') {
    var celsius = (temperature - 32) * 5/9;
    var kelvin = (temperature + 459.67) * 5/9;
    result.innerHTML = `Celsius: ${celsius.toFixed(2)}°C<br>Kelvin: ${kelvin.toFixed(2)}K`;
  } else if (unit === 'kelvin') {
    var celsius = temperature - 273.15;
    var fahrenheit = (temperature * 9/5) - 459.67;
    result.innerHTML = `Celsius: ${celsius.toFixed(2)}°C<br>Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  } else {
    result.innerHTML = 'Invalid unit';
  }
}

// Randomly change background gradient on page load
function changeBackgroundGradient() {
  var colors = ['#FF5722', '#FF9800', '#FFC107', '#FFEB3B', '#CDDC39', '#8BC34A', '#4CAF50', '#009688', '#00BCD4', '#03A9F4'];
  var body = document.querySelector('body');
  var randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  var randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = `linear-gradient(to bottom, ${randomColor1}, ${randomColor2})`;
}

changeBackgroundGradient();
