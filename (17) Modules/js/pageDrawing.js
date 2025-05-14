//Отрисовка страницы
import { getLoaderEl } from "./components.js";

export async function pageDrawing(namePage) {
    const appEl = document.querySelector(".app");
    appEl.innerHTML = "";

    const loaderEl = getLoaderEl();
    appEl.append(loaderEl);

    switch (namePage) {
        case "addRecord":
            const addRecord = await import("./addRecord.js");
            addRecord.addRecord(appEl);
            loaderEl.remove();
            break;
        default:
            const warehouse = await import("./warehouse.js");
            warehouse.warehouse(appEl);
            loaderEl.remove();
    }
}