const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const timer = document.querySelector(".timer");
const photoDiv = document.querySelector(".photo");

const card2 = document.querySelector(".card2")
const progressBar2 = document.querySelector(".progress-bar2");
const progressText2 = document.querySelector(".progress-text2");
const timer2 = document.querySelector(".timer2");
const photoDiv2 = document.querySelector(".photo2");

let interval;
let startTime;

const images = ["images/dog1.jpg", "images/dog2.jpg", "images/dog3.jpg", "images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];

const half = Math.floor(images.length / 2);

function firstProgress(duration) {

    card2.classList.add('hidden');
    photoDiv.classList.add('hidden');

    startTime = Date.now();

    progressBar.style.transition = `width ${duration}ms linear`;
    progressBar.style.width = '0%';

    interval = setInterval(() => {
        const time1 = Date.now() - startTime;
        const percent = Math.min((time1 / duration) * 100, 100);

        progressText.textContent = Math.floor(percent) + '%';
        timer.textContent = `Время: ${(time1 / 1000).toFixed(1)} с`;

        if (percent >= 100) {
            clearInterval(interval);
            photoDiv.classList.remove('hidden');
        }
    }, 40);

    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 0);

    return new Promise((resolve) => {

        const cat = images.slice(half, images.length);
        const time = Math.floor(Math.random() * (5000 - 2000) + 2000);

        setTimeout(() => {
            resolve(cat);
        }, duration);
        console.log(time)
    });
}

function secondProgress(duration) {

    card2.classList.remove('hidden');
    photoDiv2.classList.add('hidden');

    startTime = Date.now();

    progressBar2.style.transition = `width ${duration}ms linear`;
    progressBar2.style.width = '0%';

    interval = setInterval(() => {
        const time2 = Date.now() - startTime;
        const percent = Math.min((time2 / duration) * 100, 100);

        progressText2.textContent = Math.floor(percent) + '%';
        timer2.textContent = `Время: ${(time2 / 1000).toFixed(1)} с`;

        if (percent >= 100) {
            clearInterval(interval);
            photoDiv2.classList.remove('hidden');
        }
    }, 40);

    setTimeout(() => {
        progressBar2.style.width = '100%';
    }, 0);

    return new Promise((resolve) => {

        const dog = images.slice(0, half);
        const time = Math.floor(Math.random() * (5000 - 2000) + 2000);

        setTimeout(() => {
            resolve(dog);
        }, duration);
    });
}

firstProgress(2000).then((result) => {
    result.forEach((item) => {
        const img = document.createElement("img");
        img.setAttribute("src", `${item}`)
        photoDiv.append(img)
    });
}).then(() => secondProgress(3000).then((result) => {
    result.forEach((item) => {
        const img = document.createElement("img");
        img.setAttribute("src", `${item}`)
        photoDiv2.append(img)
    });
}));