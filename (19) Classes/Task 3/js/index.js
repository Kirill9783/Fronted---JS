import EditDelivery from "./EditDelivery.js";
import {getButtonEl, getTextEl} from "./components.js";

const app = document.querySelector(".app");

const editDeliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11)
];

editDeliveryArr.forEach((item) => {
    app.append(item.getElement());
});

const totalDistanceWrapEl = document.createElement("div");
totalDistanceWrapEl.classList.add("wrap-total")

const totalDistanceButtonEl = getButtonEl("Общее расстояние");
totalDistanceButtonEl.classList.add("total-distance-btn");
const totalDistance = getTextEl();

totalDistanceButtonEl.addEventListener("click", () => {
    totalDistance.textContent = "Общее расстояние: " + EditDelivery.getTotalDistance(editDeliveryArr) + " км";
})

totalDistanceWrapEl.append(
    totalDistanceButtonEl,
    totalDistance
);

app.append(
    totalDistanceWrapEl
);