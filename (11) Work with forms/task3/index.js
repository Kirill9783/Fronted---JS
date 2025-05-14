const numberCard = document.querySelector(".number-card");
const cardNumber = document.querySelector(".card-number");

cardNumber.textContent = numberCard.value;
numberCard.addEventListener('input', function (ev) {
    cardNumber.textContent = ev.target.value;

});

numberCard.onkeyup = function () {
    let len = this.value.replace(/\s+/g, '').length;
    if (len % 4 === 0) {
        this.value += " ";
    }
}

const nameHolder = document.querySelector(".name-holder");
const cardName = document.querySelector(".card-name");

cardName.textContent = nameHolder.value;
nameHolder.addEventListener('input', function (ev) {
    cardName.textContent = ev.target.value;
});

const dateCard = document.querySelector(".date-card");
const cardDate = document.querySelector(".card-date");

cardDate.textContent = dateCard.value;
dateCard.addEventListener('input', function (ev) {
    cardDate.textContent = ev.target.value;
});

const mirLogo = document.querySelector(".pay-system");
const logoImg = document.querySelector(".logo-img");
mirLogo.addEventListener('change', function (ev) {
    logoImg.setAttribute("src", mirLogo.value)
})

const bg = document.querySelector(".bg")
const card = document.querySelector(".card")
bg.addEventListener ('change', function () {
    card.style.backgroundColor = bg.value;
});





