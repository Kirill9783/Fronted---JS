// Получение элемента карточки
function getCardEl(text) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    return cardEl;
}

// Получение элемента заголовка
function getTitleEl(text) {
    const titleEl = document.createElement("h1");
    titleEl.textContent = text;
    titleEl.classList.add("title");
    return titleEl;
}

// Получение элемента формы
function getFormEl() {
    const formEl = document.createElement("form");
    formEl.classList.add("form");
    return formEl;
}

// Получение элемента текстового поля
function getInputEl(type, name, placeholder) {
    const inputEl = document.createElement("input");
    inputEl.type = type;
    inputEl.name = name;
    inputEl.placeholder = placeholder;
    inputEl.classList.add("input");
    inputEl.setAttribute("required", "true");
    return inputEl;
}

// Получение элемента кнопки
function getButtonEl(text) {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = text;
    buttonEl.classList.add("btn");
    return buttonEl;
}

// Получение элемента блока для space-between
function getSpaceBetweenWrapEl() {
    let buttonsWrapEl = document.createElement("div");
    buttonsWrapEl.classList.add("between-wrap");
    return buttonsWrapEl;
}

//Получение loader
function getLoaderEl() {
    const loaderEl = document.createElement("div");

    loaderEl.classList.add("loader");

    for (let i = 0; i < 12; i++) {
        const divEl = document.createElement("div");
        loaderEl.append(divEl);
    }

    return loaderEl;
}

export {
    getCardEl,
    getTitleEl,
    getFormEl,
    getInputEl,
    getButtonEl,
    getSpaceBetweenWrapEl,
    getLoaderEl,
}