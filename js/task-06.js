const inputEl = document.querySelector("input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const total = event.currentTarget.value.length;
  console.log(total);
  if (Number(inputEl.dataset.length) === total) {
    inputEl.classList.add("valid");
    return;
  }
  inputEl.classList.add("invalid");
}
