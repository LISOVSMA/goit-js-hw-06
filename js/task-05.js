// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onChangeInputText);

function onChangeInputText(event) {
  spanEl.textContent = event.currentTarget.value;
  if (spanEl.textContent === "") {
    spanEl.textContent = "Anonymous";
  }
}
