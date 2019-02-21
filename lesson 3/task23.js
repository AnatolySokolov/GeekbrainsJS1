'use strict';

(function () {
  // 2. С этого урока начинаем работать с функционалом интернет-магазина.
  // Предположим, есть сущность корзины.
  // Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

  // 3. Товары в корзине хранятся в массиве. Задачи:
  // a) Организовать такой массив для хранения товаров в корзине;
  // b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

  const range = {
    min: 1,
    max: 10
  };

  const englishUnicode = {
    upperCase: {
      min: 65,
      max: 90
    },
    lowerCase: {
      min: 97,
      max: 122
    }
  };

  const cart = [];  //Пустой массив товаров в корзине.

  let getRandomIntByRange = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  // Генирирует случайное имя из 4х букв на авнглийском языке.
  let createNameOfGoods = function () {
    return String.fromCharCode(
        getRandomIntByRange(englishUnicode.lowerCase.min, englishUnicode.lowerCase.max),
        getRandomIntByRange(englishUnicode.lowerCase.min, englishUnicode.lowerCase.max),
        getRandomIntByRange(englishUnicode.lowerCase.min, englishUnicode.lowerCase.max),
        getRandomIntByRange(englishUnicode.lowerCase.min, englishUnicode.lowerCase.max)
    );
  };

  //Заполняет корзину случайным кол-вом товаров со свойствами name и price.
  let fillTheCart = function (arr, value) {
    for (let i = 0; i < value; i++) {
      let obj = {};
      obj.name = createNameOfGoods();
      obj.price = getRandomIntByRange(range.min, range.max);
      arr.push(obj);
    }
    return arr;
  };

  //Определяет стоимость корзины.
  let countCartPrice = function (arr) {
    let count = null;
    arr.forEach(function (el) {
      count += el.price;
    });
    return count;
  };

  // Вызов функций создание корзины и подсчет её стоимости.
  fillTheCart(cart, getRandomIntByRange(range.min, range.max));
  let count = countCartPrice(cart);

  console.log('Задание 2 и 3');
  console.log('Колличество товаров в корзине ' + cart.length);
  console.log(cart);
  console.log('Суммарная стоимость корзины ' + count);

})();