import {pageDrawing} from "./pageDrawing.js";

export function sortTable() {

    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.sort((a,b) => a.weight.localeCompare(b.weight));

    localStorage.setItem("products", JSON.stringify(products));
    pageDrawing();
}
