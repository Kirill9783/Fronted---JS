const listEl = document.createElement('ul');
document.body.append(listEl)

const arr = [100, 500, 250, 750, 300];

function renderList(array) {
    listEl.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${array[i]}`;
        listEl.append(liEl);
    }
}

renderList(arr);

const increaseBtn = document.createElement('button');
increaseBtn.classList.add('increase');
increaseBtn.textContent = 'Сортировать по возрастанию';
document.body.append(increaseBtn);

increaseBtn.addEventListener('click', function () {
   arr.sort((a, b) => a - b);
   renderList(arr);
});

const decreaseBtn = document.createElement('button');
decreaseBtn.classList.add('decrease');
decreaseBtn.textContent = 'Сортировать по убыванию';
document.body.append(decreaseBtn);

decreaseBtn.addEventListener('click', function () {
    arr.sort((a, b) => b - a);
    renderList(arr);
});