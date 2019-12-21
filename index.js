const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
  bodyTag: document.querySelector("body")
};

const timer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    function changeColor() {
      refs.bodyTag.style.backgroundColor =
        colors[randomIntegerFromInterval(0, 6)];
    }
    changeColor();
    this.timerId = setInterval(changeColor, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  }
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startButton.addEventListener("click", timer.start.bind(timer));
refs.stopButton.addEventListener("click", timer.stop.bind(timer));
