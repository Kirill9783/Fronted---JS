function getCardEl() {
    const cardEl = document.createElement("div");
    cardEl.classList.add("edit-card");
    return cardEl;
}

function getTitleEl(text) {
    const titleEl = document.createElement("h1");
    titleEl.textContent = text;
    titleEl.classList.add("edit-card__title");
    return titleEl;
}

function getFormEl() {
    const formEl = document.createElement("form");
    formEl.classList.add("form");
    formEl.method = "POST";
    return formEl;
}

function getInputEl(type, name, placeholder, value) {
    const inputEl = document.createElement("input");
    inputEl.type = type;
    inputEl.name = name;
    inputEl.classList.add(`${name}`);
    inputEl.placeholder = placeholder;
    inputEl.value = value;
    inputEl.classList.add("text-field");
    return inputEl;
}

function getButtonEl(text) {
    const buttonEl = document.createElement("button");
    buttonEl.textContent = text;
    return buttonEl;
}

function getSelectEl() {
    const selectEl = document.createElement("select");
    selectEl.classList.add("select");
    selectEl.name = "select";
    return selectEl;
}

function getOptionEl(value, text) {
    const optionEl = document.createElement("option");
    optionEl.textContent = text;
    optionEl.value = value;
    return optionEl;
}

export {
    getCardEl,
    getTitleEl,
    getFormEl,
    getInputEl,
    getButtonEl,
    getSelectEl,
    getOptionEl
}