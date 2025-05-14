//ПОИСК ЭЛЕМЕНТА В МАССИВЕ

const arr = ['Кофе', 'Сок', 'Чай', 'Вода', 'Молоко'];
const search = 'Вода';



function find(arr, search) {

    let result = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}

console.log(find(arr, 'Вода'));
console.log(find(arr, 'Смузи'));
console.log(find(arr, 'Сок'));

//Практика поиска по DOM-элементам

function find(arr, search) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}

const users = ['Яна', 'Олег', 'Витя', 'Саша', 'Таня', 'Яша', 'Василий', 'Евгения', 'Настя'];

function renderList(arr) {
    const listEl = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        listEl.append(liEl);
    }

    document.body.append(listEl);
}

const searchBtn = document.createElement('button');
searchBtn.textContent = 'Поиск';
document.body.append(searchBtn);

searchBtn.onclick = function () {
    const search = prompt("Введите имя");

    const findIndex = find(users, search);

    if (findIndex > 1) {
        document.querySelector(`li:nth-child(${findIndex + 1})`).style.color = 'red';
    } else {
        alert('Имя не найдено!')
    }
}

renderList(users);

//ФИЛЬТРАЦИЯ МАССИВА

const arr = [19, 21, 5, 11, 18];

function filter(arr, minAge) {
    const result = [];

    for (const item of arr) {
        if (item >= minAge) {
            result.push(item);
        }
    }
    return result;
}

console.log(filter(arr, 18));
console.log(filter(arr, 10));

//7.5 Практика фильтрации DOM-элементов

function filter(arr, minAge) {
    const result = [];

    for (const item of arr) {
        if (item >= minAge) {
            result.push(item);
        }
    }
    return result;
}

const usersAge = [11, 23, 34, 11, 12, 4, 55, 21, 23];

const listEl = document.createElement('ul');
document.body.append(listEl);

function renderList(usersAge) {
    listEl.innerHTML = ''; //очищает содержимое, чтобы вставить новый отфильтрованный список
    for(let i = 0; i < usersAge.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1}) возраст: ${usersAge[i]}`;
        listEl.append(liEl);
    }
}

const filterBtn = document.createElement('button');
filterBtn.textContent = 'Фильтр';
document.body.append(filterBtn);

filterBtn.onclick = function() {
    const minAge = prompt('Введите возраст');

    const result = filter(usersAge, minAge);

    renderList(result);
}

renderList(usersAge);

//7.6 Сортировка массива

const arr = [7, 3, 9, 4, 5];

console.log(arr);

function sort(arr) {
    for (let i = 0; i <arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j ++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sort(arr));

//Практика сортировки по DOM-элементам

function sort(arr) {
    for (let i = 0; i <arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j ++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const usersAge = [11, 34, 23, 11, 12, 4, 55, 21, 23];



function renderList(arr) {
    listEl.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1}) возраст: ${arr[i]}`;
        listEl.append(liEl);
    }
}

const sortBtn = document.createElement('button');
sortBtn.textContent = 'Сортировка';
document.body.append(sortBtn);

sortBtn.onclick = function() {
    const result = sort(usersAge);
    renderList(result);
}

const listEl = document.createElement('ul');
document.body.append(listEl);

renderList(usersAge);