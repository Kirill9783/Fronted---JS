// let interval; // Stores the interval ID for controlling the animation
// let startTime; // Stores the time when the animation starts
//
// function startProgress() {
//     // Get references to the relevant elements in the DOM
//     const progressBar = document.getElementById('progressBar');
//     const progressText = document.getElementById('progressText');
//     const timer = document.getElementById('timer');
//     const completionText = document.getElementById('completionText');
//     const userTimeInput = document.getElementById('timeInput').value;
//
//     // Convert the user input (in seconds) to milliseconds
//     let totalDuration = parseInt(userTimeInput) * 1000;
//
//     // If the input is not valid or less than 1 second, default to 4 seconds
//     if (isNaN(totalDuration) || totalDuration < 1000) {
//         totalDuration = 4000;
//     }
//
//     // Hide the completion message before starting the progress
//     completionText.classList.add('hidden');
//
//     // Clear any previous intervals to prevent conflicts
//     clearInterval(interval);
//     startTime = Date.now(); // Record the start time of the progress
//
//     // Set the CSS transition to smoothly animate the width of the progress bar
//     progressBar.style.transition = `width ${totalDuration}ms linear`;
//     progressBar.style.width = '0%'; // Reset the progress bar width to 0%
//
//     // Use setInterval to update the progress bar and percentage text in real-time
//     interval = setInterval(() => {
//         const elapsedTime = Date.now() - startTime; // Calculate the time elapsed since the start
//         const percentage = Math.min((elapsedTime / totalDuration) * 100, 100); // Calculate progress percentage
//
//         // Update the progress text and the timer display
//         progressText.textContent = Math.floor(percentage) + '%';
//         timer.textContent = `Time: ${(elapsedTime / 1000).toFixed(1)}s`;
//
//         // If the progress reaches 100%, stop the interval and show the completion message
//         if (percentage >= 100) {
//             clearInterval(interval);
//             completionText.classList.remove('hidden'); // Show the "Progress Completed" message
//         }
//     }, 40); // Update the progress every 40 milliseconds
//
//     // Trigger the CSS animation to expand the progress bar
//     setTimeout(() => {
//         progressBar.style.width = '100%';
//     }, 0);
// }
//
// function resetProgress() {
//     // Stop the interval if it’s running
//     clearInterval(interval);
//
//     // Get references to the relevant elements
//     const progressBar = document.getElementById('progressBar');
//     const progressText = document.getElementById('progressText');
//     const timer = document.getElementById('timer');
//     const completionText = document.getElementById('completionText');
//
//     // Reset the progress bar, percentage text, and timer display
//     progressBar.style.transition = ''; // Remove the transition to instantly reset
//     progressBar.style.width = '0%'; // Reset the progress bar width to 0%
//     progressText.textContent = '0%'; // Reset the percentage text to 0%
//     timer.textContent = 'Time: 0s'; // Reset the timer display
//     classList.add('hidden'); // Hide the completion message
// }

let interval; // Stores the interval ID for controlling the animation
let startTime; // Stores the time when the animation starts

function startProgress(duration) {
    // Get references to the relevant elements in the DOM
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const timer = document.getElementById('timer');
    const completionText = document.querySelector(".foto-cat");
    //const userTimeInput = document.getElementById('timeInput').value;

    // Convert the user input (in seconds) to milliseconds
    //let totalDuration = parseInt(userTimeInput) * 1000;

    // If the input is not valid or less than 1 second, default to 4 seconds
    // if (isNaN(totalDuration) || totalDuration < 1000) {
    //     totalDuration = 4000;
    // }

    // Hide the completion message before starting the progress
    completionText.classList.add('hhh');


    // Clear any previous intervals to prevent conflicts
    clearInterval(interval);
    startTime = Date.now(); // Record the start time of the progress

    // Set the CSS transition to smoothly animate the width of the progress bar
    progressBar.style.transition = `width ${duration}ms linear`;
    progressBar.style.width = '0%'; // Reset the progress bar width to 0%

    // Use setInterval to update the progress bar and percentage text in real-time
    interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime; // Calculate the time elapsed since the start
        const percentage = Math.min((elapsedTime / duration) * 100, 100); // Calculate progress percentage

        // Update the progress text and the timer display
        progressText.textContent = Math.floor(percentage) + '%';
        timer.textContent = `Время: ${(elapsedTime / 1000).toFixed(1)} с`;

        // If the progress reaches 100%, stop the interval and show the completion message
        if (percentage >= 100) {
            clearInterval(interval);
            completionText.classList.remove('hhh'); // Show the "Progress Completed" message
        }
    }, 40); // Update the progress every 40 milliseconds

    // Trigger the CSS animation to expand the progress bar
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 0);
}

startProgress(2000)

// function resetProgress() {
//     // Stop the interval if it’s running
//     clearInterval(interval);
//
//     // Get references to the relevant elements
//     const progressBar = document.getElementById('progressBar');
//     const progressText = document.getElementById('progressText');
//     const timer = document.getElementById('timer');
//     const completionText = document.getElementById('completionText');
//
//     // Reset the progress bar, percentage text, and timer display
//     progressBar.style.transition = ''; // Remove the transition to instantly reset
//     progressBar.style.width = '0%'; // Reset the progress bar width to 0%
//     progressText.textContent = '0%'; // Reset the percentage text to 0%
//     timer.textContent = 'Time: 0s'; // Reset the timer display
//     classList.add('hidden'); // Hide the completion message
// }






// const progressBar = document.querySelector(".progress-bar");
// const progressText = document.querySelector(".progress-text");
// const timer = document.querySelector(".timer");
// const photoDiv = document.querySelector(".photo");
//
// const card2 = document.querySelector(".card2")
// const progressBar2 = document.querySelector(".progress-bar2");
// const progressText2 = document.querySelector(".progress-text2");
// const timer2 = document.querySelector(".timer2");
// const photoDiv2 = document.querySelector(".photo2");
//
// let interval;
// let startTime;
//
// const images = ["images/dog1.jpg", "images/dog2.jpg", "images/dog3.jpg", "images/cat1.jpg", "images/cat2.jpg", "images/cat3.jpg"];
//
// const half = Math.floor(images.length / 2)
//
// const first = images.slice(0, half);
// const second = images.slice(half, images.length);
//
// function firstProgress(array, duration) {
//
//     card2.classList.add('hidden');
//     photoDiv.classList.add('hidden');
//
//     array.forEach((item) => {
//         const img = document.createElement("img");
//         img.setAttribute("src", `${item}`)
//         photoDiv.append(img)
//     });
//
//     startTime = Date.now();
//
//     progressBar.style.transition = `width ${duration}ms linear`;
//     progressBar.style.width = '0%';
//
//     interval = setInterval(() => {
//         const time1 = Date.now() - startTime;
//         const percent = Math.min((time1 / duration) * 100, 100);
//
//         progressText.textContent = Math.floor(percent) + '%';
//         timer.textContent = `Время: ${(time1 / 1000).toFixed(1)} с`;
//
//         if (percent >= 100) {
//             clearInterval(interval);
//             photoDiv.classList.remove('hidden');
//         }
//     }, 40);
//
//     setTimeout(() => {
//         progressBar.style.width = '100%';
//     }, 0);
// }
//
// function secondProgress(array, duration) {
//
//     card2.classList.remove('hidden');
//     photoDiv2.classList.add('hidden');
//
//     array.forEach((item) => {
//         const img = document.createElement("img");
//         img.setAttribute("src", `${item}`)
//         photoDiv2.append(img)
//     });
//
//     startTime = Date.now();
//
//     progressBar2.style.transition = `width ${duration}ms linear`;
//     progressBar2.style.width = '0%';
//
//     interval = setInterval(() => {
//         const time2 = Date.now() - startTime;
//         const percent = Math.min((time2 / duration) * 100, 100);
//
//         progressText2.textContent = Math.floor(percent) + '%';
//         timer2.textContent = `Время: ${(time2 / 1000).toFixed(1)} с`;
//
//         if (percent >= 100) {
//             clearInterval(interval);
//             photoDiv2.classList.remove('hidden');
//         }
//     }, 40);
//
//     setTimeout(() => {
//         progressBar2.style.width = '100%';
//     }, 0);
// }
//
// function start() {
//     firstProgress(first, 2000);
//     setTimeout(() => secondProgress(second, 3000), 2000);
// }
//
// start();