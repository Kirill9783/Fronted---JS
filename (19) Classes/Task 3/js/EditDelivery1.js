import Delivery from "./Delivery.js";
import {getButtonEl, getCardEl, getFormEl, getInputEl, getOptionEl, getSelectEl, getTitleEl} from "./components.js";

export default class EditDelivery extends Delivery {
    constructor(name, address, distance) {
        super(name, address, distance);
    }

    getElement() {

        this.cardEl = document.createElement("div");
        this.cardEl.classList.add("card");

        this.nameTitle = document.createElement("span");
        this.nameTitle.classList.add("card__title");
        this.nameTitle.textContent = "Имя";

        this.nameEl = document.createElement("p");
        this.nameEl.classList.add("card__delivery-info");
        this.nameEl.textContent = this.name;

        this.addressTitle = document.createElement("span");
        this.addressTitle.classList.add("card__title");
        this.addressTitle.textContent = "Адрес";

        this.addressEl = document.createElement("p");
        this.addressEl.classList.add("card__delivery-info");
        this.addressEl.textContent = this.address;

        this.distanceTitle = document.createElement("span");
        this.distanceTitle.classList.add("card__title");
        this.distanceTitle.textContent = "Расстояние";

        this.distanceEl = document.createElement("p");
        this.distanceEl.classList.add("card__delivery-info");
        this.distanceEl.textContent = this.distance + " км";

        this.editButtonEl = document.createElement("button");
        this.editButtonEl.classList.add("card__edit-btn");
        this.editButtonEl.textContent = "Изменить";

        this.editButtonEl.addEventListener("click", () => {

            document.body.classList.add("edit-card__shadow");

            const editCard = getCardEl();

            const closeButtonEl = getButtonEl("x");
            closeButtonEl.classList.add("close-btn");
            closeButtonEl.addEventListener("click", () => {
                editCard.style.display = "none"
                document.body.classList.remove("edit-card__shadow");
            });

            const titleEl = getTitleEl("Изменить");

            const formEl = getFormEl();
            const nameInputEl = getInputEl("text", "name", "Имя", `${this.name}`);
            const addressInputEl = getInputEl("text", "address", "Адрес", `${this.address}`);
            const distanceInputEl = getInputEl("text", "distance", "Расстояние", `${this.distance}`);

            this.selectEl = getSelectEl();

            const emptyOptionalEl = getOptionEl("empty", "--- Статус ---");
            const canceledOptionalEl = getOptionEl("canceled", "Отменен");
            const deliveringOptionalEl = getOptionEl("delivering", "Доставляется");
            const deleveredOptionalEl = getOptionEl("delivered", "Доставлен");

            const saveButtonEl = getButtonEl("Сохранить");
            saveButtonEl.classList.add("save-btn");
            saveButtonEl.type = "submit";

            formEl.addEventListener("submit", (ev) => {
                ev.preventDefault();

                this.name = nameInputEl.value;
                this.address = addressInputEl.value;
                this.distance = distanceInputEl.value;

                if (this.selectEl.value) {
                    this.cardEl.classList.add(this.selectEl.value)

                    if (this.selectEl.value === "canceled") {
                        this.editButtonEl.disabled = true;
                        this.cardEl.classList.remove("delivered")
                    } else {
                        this.editButtonEl.disabled = false;
                    }
                }

                editCard.style.display = "none"
                document.body.classList.remove("edit-card__shadow");
            });

            this.selectEl.append(
                emptyOptionalEl,
                canceledOptionalEl,
                deliveringOptionalEl,
                deleveredOptionalEl
            );

            formEl.append(
                nameInputEl,
                addressInputEl,
                distanceInputEl,
                this.selectEl,
                saveButtonEl
            );

            editCard.append(
                titleEl,
                formEl,
                closeButtonEl
            );

            document.body.append(
                editCard
            );
        });

        this.cardEl.append(
            this.nameTitle,
            this.nameEl,
            this.addressTitle,
            this.addressEl,
            this.distanceTitle,
            this.distanceEl,
            this.editButtonEl
        );

        return this.cardEl;
    }

    static getTotalDistance(deliveryArr) {
        let sum = 0
        if (!document.querySelector(".card").classList.contains("canceled")) {

            // let sum = 0
            deliveryArr.forEach((item) => {
                sum += Number(item.distance)
            })
        } else {

        }
        return sum;
    }
}