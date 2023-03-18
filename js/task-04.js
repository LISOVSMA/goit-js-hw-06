// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector("#value");

decrement.addEventListener("click", countDecrement);
increment.addEventListener("click", countIncrement);

function countDecrement() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}

function countIncrement() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}
