const buyerBasket = ['Яблоки', 'Арбуз', 'Книга', 'Кофе', 'Макароны', 'Молоко', 'Сахар'];

function renderList() {
    listEl.innerHTML = '';
    for (let i = 0; i < buyerBasket.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = `${i + 1}) ${buyerBasket[i]}`;
        listEl.append(liEl);
    }
}

const addProductBtn = document.createElement('button');
addProductBtn.classList.add('add-product');
addProductBtn.textContent = 'Добавить товар';
document.body.append(addProductBtn);

addProductBtn.onclick = function () {
    const addProduct = prompt('Введите название товара');
    if (addProduct === null || addProduct === '') {
        alert('Название товара не введено!')
    } else {
        buyerBasket.push(addProduct);
        renderList(sort(buyerBasket));
    }
}

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

const listEl = document.createElement('ul');
document.body.append(listEl);

renderList(sort(buyerBasket));