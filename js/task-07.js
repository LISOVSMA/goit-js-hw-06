const inputEl = document.querySelector("input");
const spanEl = document.querySelector("span");
inputEl.addEventListener("input", onChangeInput);
function onChangeInput() {
  spanEl.style.fontSize = `${inputEl.value}px`;
}
