const textInput = document.querySelector("#validation-input");
const inputLength = textInput.dataset.length;

textInput.addEventListener("blur", isValide);

function isValide(event) {
  if (Number(event.target.value.length) === Number(inputLength)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("invalid");
  }
}
