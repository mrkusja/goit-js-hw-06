let counterValue = 0;
const counterRef = document.querySelector("#counter");

const btnDecrement = counterRef.children[0];
const btnIncrement = counterRef.children[2];
const valueRef = counterRef.children[1];

btnDecrement.addEventListener("click", counterDecrement);
btnIncrement.addEventListener("click", counterIncrement);

function counterDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function counterIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}