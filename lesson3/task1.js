'use strict';

(function () {
  //1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

  console.log('Задание 1');

  let i = 0,
      arrOfPrimeNumbers = [];

  while (i < 100) {
    i++;
    if ((i === 1 || i % 2 === 0) && i !== 2) continue;
    if (i % 3 === 0 && i !== 3) continue;
    if (i % 5 === 0 && i !== 5) continue;
    if (i % 7 === 0 && i !== 7) continue;
    // console.log(i);
    arrOfPrimeNumbers.push(i);
  }

  console.log('Простые числа от 0 до 100 : ' + arrOfPrimeNumbers);

})();

