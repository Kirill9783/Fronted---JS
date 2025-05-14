const cars = {
    bmw: {
        wheels: 4,
        hp: 300,
        doors: 2,
        isStarted: false,
        maxSpeed: 220
    },
    mercedes: {
        wheels: 4,
        hp: 250,
        doors: 3,
        isStarted: false,
        maxSpeed: 200
    },
    audi: {
        wheels: 4,
        hp: 320,
        doors: 4,
        isStarted: false,
        maxSpeed: 260
    }
}

//1 способ
Object.keys(cars).forEach((property) => {
    console.log(`${property}`);
})

console.log('------------------------------------------------');

//2 способ
function getCarName(object) {
    for (let key in object) {
        console.log(key);
    }
}
getCarName(cars);

/* Первый способ с Object.keys(cars).forEach(...) более предпочтителен, потому что:

    Явно работает только с собственными ключами объекта

Object.keys(cars) возвращает массив только собственных (не унаследованных) ключей объекта.
    for...in перебирает не только собственные, но и унаследованные свойства (если таковые появятся, например, через Object.prototype). Это может привести к нежелательным побочным эффектам.
    Лучше читается

Код с Object.keys().forEach() сразу показывает, что мы работаем с ключами объекта.
    В for...in приходится дополнительно проверять object.hasOwnProperty(key), если объект может иметь унаследованные свойства.
    Совместимость с современными методами работы с массивами

Object.keys() возвращает массив, что позволяет применять такие удобные методы, как forEach(), map(), filter() и другие.
    for...in работает с объектом напрямую, поэтому его нужно вручную обрабатывать.
    Таким образом, Object.keys().forEach() — более безопасный, лаконичный и понятный способ перебора ключей объекта.

 */