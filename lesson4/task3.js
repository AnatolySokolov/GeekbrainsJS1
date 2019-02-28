'use strict';

(function () {

  // товар
  let product = {
    basePrice: 100,
    size: ['s', 'm', 'l'],
    color: ['red', 'yellow', 'green'],
    price: function () {
      // возвращает цену в зависимости от размера, цвета и др свойств
    }
  };

  // корзина
  let cart = {
    list: [product1, product2, product3], // товары в корзине
    amount: this.list.length, // кол-во товара
    countPrice: function () {
      // возвращает суммарную стоимость корзины
    },
    addToCart: function (obj) {
      this.list.push(obj);  //добавление товара в корзину
    },
    removeFromCart: function (obj) {
      // метод проверяет, есть ли такой товар в корзине и, если он есть, удаляет
    }
  }

  // Доработаю и исправлю на следующих уроках
})();