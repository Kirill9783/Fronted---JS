import {pageDrawing} from "./pageDrawing.js";

export function deleteProduct(product) {
    const products = JSON.parse(localStorage.getItem("products"));

    const productsAfterDelete = products.filter((item) => product.id !== item.id);

    localStorage.setItem("products", JSON.stringify(productsAfterDelete));
    pageDrawing();
}