const fahrenheit1 = prompt("Enter a temperature in Fahrenheit to convert in Celsius.");
const fahrenheit2 = prompt("Enter a temperature in Fahrenheit to convert in Celsius.");
const fahrenheit3 = prompt("Enter a temperature in Fahrenheit to convert in Celsius.");

function FahrenheitConverter(fahrenheit) {
  return (Math.round((fahrenheit - 32) * (5 / 9)))
}

console.log(fahrenheit1 + ' degree Fahrenheit = ' + FahrenheitConverter(fahrenheit1) + ' degrees Celsius')
console.log('Temperature of ' + fahrenheit2 + ' Fahrenheit is equivalent to ' + FahrenheitConverter(fahrenheit2) + ' degrees Celsius')
console.log('Water boiling temperate is ' + fahrenheit3 + ' Fahrenheit or ' + FahrenheitConverter(fahrenheit3) + ' Celsius')