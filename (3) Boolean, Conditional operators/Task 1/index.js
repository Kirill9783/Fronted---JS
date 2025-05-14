const balance = 500;
let isCardInATM = true;

let request = Number(prompt("Введите сумму:"));

if (request <= balance && isCardInATM) {
    console.log("Операция выполняется");
} else {
    console.log("Операция отклонена");
}
