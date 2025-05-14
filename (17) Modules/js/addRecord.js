import * as components from "./components.js";
import {handleFormSubmit} from "./handleFormSubmit.js";
import {pageDrawing} from "./pageDrawing.js";

export function addRecord(containerEl) {

    const cardEl = components.getCardEl();

    const titleEl = components.getTitleEl("Добавить запись");

    const formEl = components.getFormEl();

    let nameInputEl = components.getInputEl("text", "name", "Название");
    nameInputEl.classList.add("name-product");
    let shelfInputEl = components.getInputEl("text", "shelf", "Полка");
    shelfInputEl.classList.add("shelf-product");
    let weightInputEl = components.getInputEl("text", "weight", "Вес");
    weightInputEl.classList.add("weight-product");
    let dateInputEl = components.getInputEl("date", "date", "Время хранения");
    dateInputEl.classList.add("date-product");

    let addButtonEl = components.getButtonEl("Добавить запись");
    addButtonEl.setAttribute("type", "submit");

    formEl.addEventListener("submit", function (event) {
        event.preventDefault()
        handleFormSubmit();
        pageDrawing();
    });

    formEl.append(nameInputEl, shelfInputEl, weightInputEl, dateInputEl, addButtonEl);
    cardEl.append(titleEl, formEl);
    containerEl.append(cardEl);
}