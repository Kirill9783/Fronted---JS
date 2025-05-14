const celsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32;
}

//const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;
//const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

console.log(celsiusToFahrenheit(25));

const fahrenheitToCelsius = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8;
}

//const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;
//const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) / 1.8;

console.log(fahrenheitToCelsius(77));