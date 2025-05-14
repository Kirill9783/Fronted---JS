function addToCart(item) {
    const cartElement = document.querySelector('#cart');
    const liElement = document.createElement('li');

    liElement.textContent = item;    
    cartElement.append(liElement);
}