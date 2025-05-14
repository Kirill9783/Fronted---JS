import {addProductToLocalStorage} from "./addProductToLocalStorage.js";

export function handleFormSubmit(ev) {
    // ev.preventDefault();

    const name = document.querySelector(".name-product").value;
    const shelf = document.querySelector(".shelf-product").value;
    const weight = document.querySelector(".weight-product").value;
    const date = document.querySelector(".date-product").value;

    const product = {
        name: name,
        shelf: shelf,
        weight: weight,
        date: date
    }
    
    addProductToLocalStorage({
        ...product,
        id: `${Date.now()} - ${Math.floor(Math.random() * 1000)}`
    });
}
