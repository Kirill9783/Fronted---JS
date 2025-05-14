function celsiusToFahrenheit(celsius) {    
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {    
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}

let result1 = celsiusToFahrenheit(25);
console.log("Вывод:", result1);
let result2 = fahrenheitToCelsius(77);
console.log("Вывод:", result2);