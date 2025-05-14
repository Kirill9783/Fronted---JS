const formEl = document.querySelector('.form')
const tbodyEl = document.querySelector('tbody');

const productName = document.querySelector('.product-name');
const productWeight = document.querySelector('.product-weight');
const productDistance = document.querySelector('.product-distance');

const trEl = document.createElement('tr');
tbodyEl.append(trEl);

const buttonEl = document.querySelector('.button');
const errorEl = document.querySelector('.error');

buttonEl.addEventListener('click', function (ev) {
    if (productWeight.value <= 0 || productDistance.value <= 0) {
        ev.preventDefault();
        errorEl.style.visibility = 'visible';
    } else {
        errorEl.style.visibility = 'hidden';
    }
});

function calculation(weight, distance) {
    return weight * distance;
}

formEl.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let table = document.querySelector('.product-table')
    let row = table.insertRow();
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    cell0.innerHTML = productName.value;
    cell1.innerHTML = productWeight.value;
    cell2.innerHTML = productDistance.value;
    cell3.innerHTML = `${calculation(productWeight.value, productDistance.value).toFixed(2)} руб.`;
    formEl.reset();
});