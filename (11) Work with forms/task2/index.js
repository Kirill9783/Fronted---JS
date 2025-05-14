const formEl = document.querySelector('.form')
const tbodyEl = document.querySelector('tbody');

const productName = document.querySelector('.product-name');
const productWeight = document.querySelector('.product-weight');
const productDistance = document.querySelector('.product-distance');

const inputAll = document.querySelectorAll('input');

const trEl = document.createElement('tr');

const h2 = document.createElement('h2');
h2.textContent = 'Пожалуйста, введите корректные значения для веса и/или расстояния';
h2.classList.add('error');

tbodyEl.append(trEl);



// function createEl(text) {
//     const tdEl = document.createElement('td');
//     tdEl.textContent = text;
//     trEl.append(tdEl);
// }

function createEl(text) {
    if (text <= 0) {
        trEl.innerHTML = ''
        formEl.reset();
        document.body.append(h2)
        return;
    }
    const tdEl = document.createElement('td');
    tdEl.textContent = text;
    trEl.append(tdEl);
}

function calculation(weight, distance) {
    return weight * distance
}

formEl.addEventListener('submit', function (ev) {
   ev.preventDefault();
   trEl.innerHTML = '';
    // if (productWeight.value <= 0 || productDistance.value <= 0) {
    //
    //     tbodyEl.innerHTML = ''
    //     formEl.reset();
    //     document.body.append(h2)
    //     return
    // }
   createEl(`${productName.value}`);
   createEl(`${productWeight.value}`);
   createEl(`${productDistance.value}`);
   createEl(`${calculation(productWeight.value, productDistance.value).toFixed(2)} руб.`);
});



// formEl.addEventListener('submit', function (ev) {
//     ev.preventDefault();
//     let table = document.querySelector('.product-table')
//     let row = table.insertRow();
//     let cell0 = row.insertCell(0);
//     let cell1 = row.insertCell(1);
//     let cell2 = row.insertCell(2);
//     let cell3 = row.insertCell(3);
//     cell0.innerHTML = productName.value;
//     cell1.innerHTML = productWeight.value;
//     cell2.innerHTML = productDistance.value;
//     cell3.innerHTML = `${calculation(productWeight.value, productDistance.value).toFixed(2)} руб.`;
// })


