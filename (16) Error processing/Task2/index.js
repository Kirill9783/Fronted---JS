function greeting() {
    const username = prompt("Введите имя пользователя");

    if (username === "" || username === null) {
        const err = new Error('Имя обязательно для заполнения');
        err.name = 'NameError';

        throw err;
    }
}

try {
    greeting();
} catch(error) {
    if (error.name === 'NameError') {
        alert(error.message);
    }
}