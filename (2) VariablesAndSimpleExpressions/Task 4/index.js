let currentYear = 2025;
let index = 0;

let firstName = prompt("Введите первое имя");
let firstBirthYear = prompt("Введите год рождения для пользователя: " + firstName);
let firstAge = currentYear - firstBirthYear;
console.log(++index, firstName, firstAge);

let secondName = prompt("Введите второе имя");
let secondBirthYear = prompt("Введите год рождения для пользователя: " + secondName);
let secondAge = currentYear - secondBirthYear;
console.log(++index, secondName, secondAge);

let thirdName = prompt("Введите третье имя");
let thirdBirthYear = prompt("Введите год рождения для пользователя: " + thirdName);
let thirdAge = currentYear - thirdBirthYear;
console.log(++index, thirdName, thirdAge);

let averageAge = (firstAge + secondAge + thirdAge) / 3;
console.log("Средний возраст пользователей:", averageAge);