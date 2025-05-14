const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const popup = document.querySelector(".popup");
const button = document.querySelector(".popup__button");
const input = document.querySelector(".input-code");
const title = document.querySelector(".title");

const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
}

const cookie = getCookie();

popup.style.display = "block";
overlay.classList.add("show");
cook();

function cook() {
    if (promocodeObj.promocode === cookie.promocode){
        title.textContent = "У вас уже применена скидка 50%";
        input.value = promocodeObj.promocode
        input.style.color = "green";
    }
}

button.addEventListener("click", function (ev) {
    ev.preventDefault();
    if (promocodeObj.promocode.toLowerCase() === input.value.toLowerCase()) {
        title.textContent = "Промокод применён. Скидка 50%!";
        input.style.color = "green";
        document.cookie = encodeURIComponent(Object.keys(promocodeObj)[0]) + '=' + encodeURIComponent(promocodeObj.promocode);
    } else {
        input.style.color = "black";
        title.innerHTML = "";
    }
});

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=');
        acc[name] = value;
        return acc;
    }, {})
}
