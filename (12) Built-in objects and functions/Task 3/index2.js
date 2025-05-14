const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const popup = document.querySelector(".popup");
const button = document.querySelector(".popup__button");
const input = document.querySelector(".input-code");
const title = document.querySelector(".title");

const promocodeArr = [
    {
        promocode: "PROM10",
        gift: "Скидка 10%"
    },
    {
        promocode: "PROM50",
        gift: "Скидка 50%"
    },
    {
        promocode: "GIFT",
        gift: "Подарок в корзине"
    }
]

const cookie = getCookie();
popup.style.display = "block";
overlay.classList.add("show");
cook();

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=');
        acc[name] = value;
        return acc;
    }, {})
}

function cook() {
    promocodeArr.find(c => {
        if (cookie.promocode === c.promocode) {
            title.textContent = `У вас есть действующий промокод. ${c.gift}`;
            input.value = c.promocode
            input.style.color = "green";
        }
    });
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const code = promocodeArr.find(c => c.promocode === input.value)
    title.textContent = code ? `Промокод применён. ${code.gift}` : "";
    input.style.color = code ? "green" : "black";
    document.cookie = "promocode" + "=" + encodeURIComponent(code.promocode);
});