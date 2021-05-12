import './styles.css';
import { colors } from './js/data';
import { refs } from './js/refs';
const { startBtn, stopBtn, body } = refs;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function changeBodyBgColor() {
  const colorIdx = randomIntegerFromInterval(0, colors.length - 1);
  body.style.backgroundColor = colors[colorIdx];
}
const chaingingInterval = {
  intervalID: null,
  startInterval() {
    startBtn.disabled = true;
    this.intervalID = setInterval(() => {
      changeBodyBgColor();
    }, 1000);
  },
  stopInterval() {
    startBtn.disabled = false;
    clearInterval(this.intervalID);
  },
};
startBtn.addEventListener('click', () => {
  chaingingInterval.startInterval();
});
stopBtn.addEventListener('click', () => {
  chaingingInterval.stopInterval();
});
