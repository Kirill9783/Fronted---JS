const popup = document.querySelector(".popup");
const button = document.querySelector(".popup__button");
const overlay = document.querySelector(".overlay");
const giftImg = document.querySelector(".gift-img");
const giftTitle = document.querySelector(".popup__title");

const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "img/discount.jpg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "img/discount2.jpg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "img/gift.jpg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "img/delivery.jpg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "img/discount.jpg"
    }
]

const randomGift = Math.floor(Math.random() * giftArr.length);

setTimeout(() => {
    popup.style.display = "block";
    overlay.classList.add("show");
    giftImg.setAttribute("src", giftArr[randomGift].icon)
    giftTitle.textContent = giftArr[randomGift].title
}, 3000);

button.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show");
});