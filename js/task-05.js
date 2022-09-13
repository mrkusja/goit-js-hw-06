const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", textRide)

function textRide (event) {
  if (event.target.value === '') {
    console.log(textOutput.textContent = 'Anonymous')
  } else textOutput.textContent = event.target.value
    console.log(event.target.value)
}