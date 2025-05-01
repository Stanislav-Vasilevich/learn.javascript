<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Привет, Мир!</title>
  <link rel="stylesheet" href="./../../css/index.css">
</head>
<body>
<?php
  $menuActiveItem = 'hello-world';
  
  require_once './../../templates/menu.php';
?>

<main>
  <div class="container">
    <div class="container">
      <h1>Задачи по уроку: "Привет, Мир!"</h1>
      <p>Создайте страницу, которая отобразит сообщение «Я JavaScript!».</p>
      <button class="button">Запустить скрипт</button>

      <p>Покажите сообщение с помощью внешнего скрипта.
        Возьмите решение предыдущей задачи Вызвать alert, и измените его. Извлеките содержимое скрипта во внешний файл alert.lessons, лежащий в той же папке.</p>
      <button class="button2">Запустить скрипт</button>
    </div>
  </div>
</main>

<script src="./index.js" type="module"></script>
</body>
</html>
