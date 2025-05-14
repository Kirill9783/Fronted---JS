export default class Delivery {

    _name = "";
    _address = "";
    _distance = 0;

    constructor(name, address, distance) {
        this.name = name;
        this.address = address;
        this.distance = distance;
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
        this.distanceEl.textContent = this.distance;

        this.cardEl.append(
            this.nameTitle,
            this.nameEl,
            this.addressTitle,
            this.addressEl,
            this.distanceTitle,
            this.distanceEl
        );

        return this.cardEl;
    }

    set name(value) {
        this._name = value;

        if (this.nameEl) {
            this.nameEl.textContent = this._name;
        }
    }

    get name() {
        return this._name;
    }

    set address(value) {
        this._address = value;

        if (this.addressEl) {
            this.addressEl.textContent = this._address;
        }
    }

    get address() {
        return this._address;
    }

    set distance(value) {
        this._distance = value;

        if (this.distanceEl) {
            this.distanceEl.textContent = this._distance;
        }
    }

    get distance() {
        return this._distance + " км";
    }
}