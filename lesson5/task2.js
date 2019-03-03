'use strict';

(function () {

  let renderCart = function (content) {
    let $container = document.querySelector('.container2');
    let $h2 = document.createElement('h2');
    $h2.textContent = 'Корзина';
    let $p = document.createElement('p');
    $p.textContent = content;
    $container.appendChild($h2);
    $container.appendChild($p);
  };

  let calculatePrice = function (arr) {
    let priceArr = [];
    arr.forEach(function (el) {
      priceArr.push(el.price);
    });

    return priceArr.reduce(function (sum, current) {
      return sum + current;
    }, 0);
  };

  let cart = {
    list: [{
      name: 'product1',
      price: 100
    },
      {
        name: 'product2',
        price: 200
      },
      {
        name: 'product3',
        price: 300
      }],
    countPrice: function () {
      let message = '';

      if (this.list.length === 0) {
        message = 'Корзина пуста';
      } else {
        let sum = calculatePrice(this.list);
        message = 'В корзине: ' + this.list.length + ' товаров на сумму ' + sum + ' рублей.';
      }
      renderCart(message);
    }
  };

  cart.countPrice();
})();