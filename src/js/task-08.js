const formElement = document.querySelector("form");

formElement.addEventListener("submit", onCheckSubmit);

function onCheckSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    mail: email.value,
    password: password.value,
  };
  console.log(formData);

  event.currentTarget.reset();
}
