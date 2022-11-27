const btnStart = document.querySelector('button[data-start]');
console.log(btnStart);
const btnStop = document.querySelector('button[data-stop]');
console.log(btnStop);
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
}, 1000);
btnStart.disabled = true;
btnStop.disabled = false;
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
    btnStop.disabled = true;
    btnStart.disabled = false;
});

