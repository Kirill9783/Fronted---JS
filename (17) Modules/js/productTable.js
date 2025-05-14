//Получение таблицы продуктов

import {deleteProduct} from "./deleteProduct.js";
import {pageDrawing} from "./pageDrawing.js";
import {sortTable} from "./sort.js";

let idProduct = null;

export function getTableEl() {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    let tableEl = document.createElement("table");
    tableEl.classList.add("products-table");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const row = document.createElement("tr");

    row.innerHTML = `
            <th>Название</th>
            <th>Полка</th>
            <th>Вес</th>
            <th>Время хранения</th>
            <th></th>
        `;

    tableEl.addEventListener("click", function(e) {
        if (e.target.tagName !== 'TH') return;
        let th = e.target;
        sortTable();
    });

    products.forEach((product) => {

        const row2 = document.createElement("tr");

        row2.innerHTML = `
            <td>${product.name}</td>
            <td>${product.shelf}</td>
            <td>${product.weight}</td>
            <td>${product.date}</td>
        `;

        const td = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.textContent = "Удалить";
        deleteButton.setAttribute("type", "button");

        thead.append(row);
        td.append(deleteButton);
        row2.append(td);
        tbody.append(row2);

        deleteButton.addEventListener("click", () => {
            idProduct = product.id
            deleteProduct(product)
        });

    });

    tableEl.append(thead, tbody);
    return tableEl;
}