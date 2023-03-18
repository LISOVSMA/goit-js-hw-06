const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додаоформлення й мінімальне галереї флексбоксами або грідами через CSS класи.

//*********************/

const listEl = document.querySelector(".gallery");
listEl.style.display = "flex";
listEl.style.listStyle = "none";
listEl.style.gap = "30px";

const imageList = images
  .map(
    ({ url, alt }) =>
      `<li> <img src = ${url} alt = ${alt} width ='400'; height ='260'/></li>`
  )
  .join("");

listEl.insertAdjacentHTML("beforeend", imageList);
