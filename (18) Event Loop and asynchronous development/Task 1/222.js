


//ЗАМЕТКА ДЛЯ ЛИЧНОГО ПОЛЬЗОВАНИЯ
// function getImagesOne() {
//
//     const imagesOne = ["images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];
//
//     imagesOne.forEach((item) => {
//         const img = document.createElement("img");
//         img.setAttribute("src", `${item}`)
//         document.body.append(img)
//     });
// }
//
// function getImagesTwo() {
//
//     const imagesTwo = ["images/dog1.jpg", "images/dog2.jpg", "images/dog3.jpg"];
//
//     const img = document.createElement("img");
//
//     imagesTwo.forEach((item) => {
//         const img = document.createElement("img");
//         img.setAttribute("src", `${item}`)
//         document.body.append(img)
//     })
//
// }

// setTimeout(getImagesOne, Math.random()*1000)
// setTimeout(getImagesTwo, Math.random()*1000)


// function getImages() {
//     return new Promise(() => {
//
//         const images = ["images/dog1.jpg", "images/dog2.jpg", "images/dog3.jpg", "images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];
//
//         const half = Math.floor(images.length / 2);
//
//         const first = images.slice(0, half);
//         const second = images.slice(half, images.length);
//
//         setTimeout(() => {
//             first.forEach((item) => {
//                 const img = document.createElement("img");
//                 img.setAttribute("src", `${item}`);
//                 document.body.append(img);
//             })
//         }, Math.random() * 1000);
//
//         setTimeout(() => {
//             second.forEach((item) => {
//                 const img = document.createElement("img");
//                 img.setAttribute("src", `${item}`);
//                 document.body.append(img);
//             });
//         }, Math.random() * 1000);
//     });
// }
//
// getImages().then();