function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector('body');
const btn = document.querySelector('button');
const textColor = document.querySelector('span');

btn.addEventListener('click', bgColor);

function bgColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyColor.style.backgroundColor;
}
