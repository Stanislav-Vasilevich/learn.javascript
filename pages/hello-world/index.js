import {showAlert} from "./alert.js";

/* Вызвать alert */
// Создайте страницу, которая отобразит сообщение «Я JavaScript!».
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  alert('Я JavaScript!');
});

/* Покажите сообщение с помощью внешнего скрипта */
// Возьмите решение предыдущей задачи Вызвать alert, и измените его. Извлеките содержимое скрипта во внешний файл alert.pages, лежащий в той же папке.
const button2 = document.querySelector('.button2');
button2.addEventListener('click', () => {
  showAlert('Я JavaScript from function!');
})
