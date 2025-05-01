<?php global $menuActiveItem;
  error_reporting(-1); ?>

<header class="header">
  <div class="container">
    <nav class="menu">
      <a class="menu__item <?php echo $menuActiveItem === '/' ? 'menu__item_active' : '' ?>" href="<?php echo '/index.php';?>">Главная</a>
      <a class="menu__item <?php echo $menuActiveItem === 'hello-world' ? 'menu__item_active' : '' ?>" href="<?php echo '/pages/hello-world/index.php' ?>">Привет, Мир!</a>
      <a class="menu__item <?php echo $menuActiveItem === 'variable' ? 'menu__item_active' : '' ?>" href="<?php echo '/pages/variable/index.php' ?>">Переменные</a>
    </nav>
  </div>
</header>