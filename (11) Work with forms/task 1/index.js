const form = document.querySelector('.form');
const userName = document.querySelector('.user-name');
const email = document.querySelector('.email');
const comment = document.querySelector('.comment__input');

const button = document.querySelector('.button');

userName.addEventListener('focus', function () {
    userName.style.backgroundColor = 'lightblue';
});

const minLengthName = 3;

userName.addEventListener('blur', function () {
    userName.style.backgroundColor = 'white';
    if (userName.value.length < minLengthName) {
        userName.style.backgroundColor = 'red'
    }
});

email.addEventListener('focus', function () {
    email.style.backgroundColor = 'lightblue';
});

email.addEventListener('blur', function () {
    email.style.backgroundColor = 'white';
});

comment.addEventListener('focus', function () {
    comment.style.backgroundColor = 'lightblue';
});

comment.addEventListener('blur', function () {
    comment.style.backgroundColor = 'white';
});

const rangeEl = document.querySelector('.range');
const valueEl = document.querySelector('.value');
valueEl.textContent = rangeEl.value;
rangeEl.addEventListener('input', function (event) {
    valueEl.textContent = event.target.value;
});

const list = document.createElement('ul');
list.classList.add('list');
const h2El = document.createElement('h2');
h2El.textContent = 'Результат опроса'
document.body.append(list);


function createEl(text) {
    const liEl = document.createElement('li');
    liEl.textContent = text;
    list.append(liEl);
}

function getCheckedCheckBoxes() {
    const checkboxes = document.querySelectorAll('input.checkbox:checked');
    return Array.from(checkboxes).map(el => el.value);
}

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    list.innerHTML = '';
    list.append(h2El)
    createEl(`Имя пользователя: ${userName.value}`);
    createEl(`Email: ${email.value}`);
    createEl(`Пол: ${form.elements['radio'].value}`);
    createEl(`Оценка сервиса: ${rangeEl.value}`);
    createEl(`Интересы пользователя: ${getCheckedCheckBoxes()}`);
    createEl(`Дополнительные комментарии: ${comment.value}`);
});