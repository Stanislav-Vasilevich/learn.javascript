/* Каким будет результат этих выражений? */
console.log('5 > 4: ', 5 > 4, true);
console.log('"ананас" > "яблоко": ', "ананас" > "яблоко", true); // неправильно написал
console.log('"2" > "12": ', "2" > "12", false); // неправильно написал
console.log('undefined == null: ', undefined == null, true);
console.log('undefined === null: ', undefined === null, false);
console.log('null == "\\n0\\n": ', null == "\n0\n", false);
console.log('null === +"\\n0\\n": ', null === +"\n0\n", false);
