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

function getCar(carName) {
    if (Object.keys(cars).includes(carName)) {
        console.log(`${carName}`,  cars[carName]);
    } else {
        console.log('Автомобиль не найден');
    }
    return cars[carName];
}

/*
function getCar(carName) {
    if (cars[carName]) {
        return cars[carName];
    } else {
        console.log('Автомобиль не найден');
    }
    return cars[carName];
}
 */


getCar('audi');









