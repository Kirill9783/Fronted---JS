const pictureMaxEl = document.querySelector('.picture-max__place');
const catEl = document.querySelector('.cat');
const lionEl = document.querySelector('.lion');
const leopardEl = document.querySelector('.leopard');
const fishEl = document.querySelector('.fish');
const pandaEl = document.querySelector('.panda');

catEl.addEventListener('click', function (e) {
    pictureMaxEl.setAttribute('src', 'img/10.jpg');
});

lionEl.addEventListener('click', function (e) {
    pictureMaxEl.setAttribute('src', 'img/20.jpg');
});

leopardEl.addEventListener('click', function (e) {
    pictureMaxEl.setAttribute('src', 'img/30.jpg');
});

fishEl.addEventListener('click', function (e) {
    pictureMaxEl.setAttribute('src', 'img/40.jpg');
});

pandaEl.addEventListener('click', function (e) {
    pictureMaxEl.setAttribute('src', 'img/50.jpg');
});

//Возможен такой вариант если названия классов были бы одинаковые

// const photo = document.querySelectorAll('.photo');
// photo.forEach(item => {
//    item.addEventListener('click', function () {
//        pictureMaxEl.setAttribute('src', item.src)
//    });
// });
