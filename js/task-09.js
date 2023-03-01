function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChange = document.querySelector('button.change-color');
colorChange.addEventListener('click', getRandomHexColor);
