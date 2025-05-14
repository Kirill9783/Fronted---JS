const listEl = document.createElement('ul');
document.body.append(listEl)

const addBtn = document.querySelector('.add');
const deleteBtn = document.querySelector('.delete');

function addEl() {
    const liEl = document.createElement('li');
    liEl.textContent = 'Новый элемент списка';
    listEl.append(liEl);
}

function deleteEl() {
    listEl.lastElementChild.remove();
}

addBtn.addEventListener('click', addEl);
deleteBtn.addEventListener('click', deleteEl);