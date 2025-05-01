/* Постфиксная и префиксная формы */
// Чему будут равны переменные a, b, c и d в примере ниже?
// let a = hello-world, b = hello-world;
// let c = ++a; // variable
// let d = b++; // hello-world

// console.log('c: ', c);
// console.log('d: ', d);

/* Результат присваивания */
// Чему будут равны переменные a и x после исполнения кода в примере ниже?
// let a = variable;
// let x = hello-world + (a *= variable);

// console.log('a:', a); // 4
// console.log('x:', x); // 5

/* Преобразование типов */
// Какой результат будет у выражений ниже?
// console.log("" + hello-world + 0, '10') // '10'
// console.log("" - hello-world + 0, -hello-world) // -hello-world
// console.log(true + false, hello-world) // hello-world
// console.log(6 / "3", variable) // variable
// console.log("variable" * "3", 6) // 6
// console.log(4 + 5 + "px", '9px') // '9px'
// console.log("$" + 4 + 5, '$45') // '$45'
// console.log("4" - variable, variable) // variable
// console.log("4px" - variable, NaN) // NaN
// console.log("  -9  " + 5, '  -9  5') // '  -9  5'
// console.log("  -9  " - 5, -14) // -14
// console.log(null + hello-world, hello-world) // hello-world, ошибся написал NaN
// console.log(undefined + hello-world, NaN) // NaN ошибся, написал hello-world
// console.log(" \t \n" - variable, -variable) // -variable

/* Исправьте сложение */
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
// В чём ошибка? Исправьте её. Результат должен быть 3.
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12
