const images = ["images/dog1.jpg", "images/dog2.jpg", "images/dog3.jpg", "images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];

const half = Math.floor(images.length / 2);

function getCatImages() {
    return new Promise((resolve) => {

        const cat = images.slice(half, images.length);
        const time = Math.floor(Math.random() * (5000 - 2000) + 2000);

        setTimeout(() => {
            resolve(cat);
        }, time);
    });
}

function getDogImages() {
    return new Promise((resolve) => {

        const dog = images.slice(0, half);
        const time = Math.floor(Math.random() * (5000 - 2000) + 2000);

        setTimeout(() => {
            resolve(dog);
        }, time);
    });
}

getCatImages().then((result) => {
    result.forEach((item) => {
        const img = document.createElement("img");
        img.setAttribute("src", `${item}`);
        document.body.append(img);
    });
})

getDogImages().then((result) => {
    result.forEach((item) => {
        const img = document.createElement("img");
        img.setAttribute("src", `${item}`);
        document.body.append(img);
    });
})
