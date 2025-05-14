let interval;
let startTime;

function startProgress(duration) {

    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const timer = document.querySelector('.timer');

    clearInterval(interval);
    startTime = Date.now();

    progressBar.style.transition = `width ${duration}ms linear`;
    progressBar.style.width = '0%';

    interval = setInterval(() => {
        const time = Date.now() - startTime;
        const percent = Math.min((time / duration) * 100, 100);

        progressText.textContent = Math.floor(percent) + '%';
        timer.textContent = `Время: ${(time / 1000).toFixed(1)} с`;

        if (percent >= 100) {
            clearInterval(interval);
        }
    }, 40);

    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 0);
}

startProgress(3000);