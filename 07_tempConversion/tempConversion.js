const ftoc = function(temp) {
  const celsius = (temp - 32) * (5/9)

  const roundedCelsius = Number(celsius).toFixed(1)

  return +roundedCelsius

};

const ctof = function(temp) {
  const fahrenheit = (temp * (9/5)) + 32

  const roundedFahrenheit = Number(fahrenheit).toFixed(1)
  return +roundedFahrenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
