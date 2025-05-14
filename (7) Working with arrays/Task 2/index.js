const arrHeight = [164, 157, 160, 143, 170];

function renderList(arrHeight) {
    listEl.innerHTML = '';
    for (let i = 0; i < arrHeight.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1}) ${arrHeight[i]}`;
        listEl.append(liEl);
    }
}

function filter(arr, minAge) {
    const result = [];

    for (const item of arr) {
        if (item >= minAge) {
            result.push(item);
        }
    }
    return result;
}

const addHeight = document.createElement('button');
addHeight.classList.add('add-height');
addHeight.textContent = 'Добавить рост';
document.body.append(addHeight);

addHeight.onclick = function () {
    const addHeight = prompt('Введите рост ученика');
    if (addHeight === null || addHeight === '') {
        alert('Рост не введен!');
    } else {
        arrHeight.push(Number(addHeight));
        renderList(arrHeight)
    }
}

const filterBtn = document.createElement('button');
filterBtn.classList.add('filter');
filterBtn.textContent = 'Фильтровать';
document.body.append(filterBtn);

filterBtn.onclick = function () {
    const filterText = prompt('Введите минимальный рост');

    const filterResult = filter(arrHeight, filterText);

    renderList(filterResult);
}

const listEl = document.createElement('ul');
document.body.append(listEl);

renderList(arrHeight);