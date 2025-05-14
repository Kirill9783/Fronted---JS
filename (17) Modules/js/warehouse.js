import * as components from "./components.js";
import {handleFormSubmit} from "./handleFormSubmit.js";
import {pageDrawing} from "./pageDrawing.js";
import {getTableEl} from "./productTable.js";

export function warehouse(containerEl) {

    const cardEl = components.getCardEl();

    const betweenEl = components.getSpaceBetweenWrapEl();

    const titleEl = components.getTitleEl("Склад");
    titleEl.classList.add("ware-title");

    let addButtonEl = components.getButtonEl("Добавить запись");
    addButtonEl.setAttribute("type", "submit");

    const table = getTableEl();

    addButtonEl.addEventListener("click", function (ev) {
        ev.preventDefault();
        pageDrawing("addRecord");
    });

    betweenEl.append(titleEl, addButtonEl);
    cardEl.append(betweenEl, table);
    containerEl.append(cardEl);
}