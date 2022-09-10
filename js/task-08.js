const form = document.querySelector(".login-form");

form.addEventListener("submit", formControl);

function formControl(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  const data = {
    Email: email.value,
    Password: password.value,
  };
  console.log(data);

  event.currentTarget.reset();
}
