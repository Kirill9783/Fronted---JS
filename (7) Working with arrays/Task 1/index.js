const books = ['Мастер и Маргарита', 'Гарри Поттер', 'За пропастью во ржи',
    'Властелин колец', 'Дюна', 'Отцы и дети'];


function renderList(array) {

    for (let i = 0; i < books.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1}) ${books[i]}`;
        listEl.append(liEl);
    }
}

const addBtn = document.createElement('button');
addBtn.classList.add('add-book');
addBtn.textContent = 'Добавить книгу';
document.body.append(addBtn);

addBtn.onclick = function () {
    const addBook = prompt('Введите название книги');
    if (addBook === null || addBook === '') {
        alert('Название книги не введено!')
    } else {
        listEl.innerHTML = '';
        books.push(addBook);
        renderList(books);
    }
}

const findBtn = document.createElement('button');
findBtn.classList.add('find-book');
findBtn.textContent = 'Найти';
document.body.append(findBtn);

function find(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}

findBtn.onclick = function () {
    const search = prompt("Введите название книги");

    const findIndex = find(books, search);

    if (findIndex > -1) {
        listEl.innerHTML = '';
        renderList(books);
        document.querySelector(`li:nth-child(${findIndex + 1})`).classList.add('found');
    } else {
        alert('Книга не найдена!');
        listEl.innerHTML = '';
        renderList(books);
    }
}

const listEl = document.createElement('ul');
document.body.append(listEl);

renderList(books);