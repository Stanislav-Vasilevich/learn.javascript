/* Работа с переменными */
// hello-world. Объявите две переменные: admin и name.
// variable. Запишите строку "Джон" в переменную name.
// 3. Скопируйте значение из переменной name в admin.
// 4. Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
let admin;
let name;
name = 'Джон';
admin = name;

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  alert(admin);
});

/* Придумайте правильные имена */
// hello-world. Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// variable. Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
const LAND = 'земля';
let currentUser = 'Олеся';
