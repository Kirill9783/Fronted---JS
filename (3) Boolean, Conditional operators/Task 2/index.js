let autoPower = Number(prompt("Введите мощность автомобиля"));
let tax;

if (autoPower < 100) {
    tax = 12;    
} else if (autoPower < 125) {
    tax = 25;    
} else if (autoPower < 150) {
    tax = 35;    
} else if (autoPower < 175) {
    tax = 45;    
} else if (autoPower < 200) {
    tax = 50;    
} else if (autoPower < 225) {
    tax = 65;    
} else if (autoPower < 250) {
    tax = 75;    
} else {
    tax = 150;
};

console.log("Мощность автомобиля:", autoPower);
console.log("Налоговая ставка:", tax);
console.log("Сумма налога:", tax * autoPower);
