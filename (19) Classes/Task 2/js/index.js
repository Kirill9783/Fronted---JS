import EditDelivery from "./EditDelivery.js";

const app = document.querySelector(".app");

const editDeliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11)
];

editDeliveryArr.forEach((item) => {
    app.append(item.getElement());
});