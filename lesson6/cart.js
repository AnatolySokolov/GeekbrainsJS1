'use strict';

(function () {
  let cart = {
    data: window.data.products,
    list: [],

    add: function (id) {
      let item = findInArray(id, this.data);
        if (findInArray(id, this.list)) {
        item.quantity++;
        return false;
      }
      item.quantity = 1;
      this.list.push(item);
    },

    remove: function (id) {
      let arr = this.list;
      arr.some(function (el, i) {
        if (el.id === id) {
          return arr.splice(i, 1);
        }
      });
    },

    render: function () {
      renderCart(this.list, this.checkTotal());
    },

    clearCartContainer: function ($container) {
      while ($container.firstChild) {
        $container.removeChild($container.firstChild);
      }
    },

    checkTotal: function () {
      let total = 0;
      this.list.forEach(function (el) {
        total += el.price * el.quantity;
      });
      return total;
    }
  };

  let findInArray = function (value, arr) {
    let item = undefined;
    arr.some(function (el) {
      if (el.id === value) {
        item = el;
      }
    });
    return item;
  };

  let isArray = function (value) {
    if (Array.isArray(value)) {
      return value[0];
    }
    return value;
  };

  let createCartItem = function (o) {
    let template = document.querySelector('#template').content.querySelector('.cart-item');
    let $item = template.cloneNode(true);
    $item.querySelector('.cart-image').src = isArray(o.img);
    $item.querySelector('.cart-image').alt = o.name;
    $item.querySelector('.cart-name').textContent = o.name;
    $item.querySelector('.cart-price').textContent = '$' + o.price;
    $item.querySelector('.cart-quantity span').textContent = o.quantity;
    $item.querySelector('.cart-btn').setAttribute('data-id', o.id);
    return $item;
  };

  let renderCart = function (arr, total) {
    let $container = document.querySelector('.cart');
    let $total = document.createElement('p');

    $total.classList.add('.total');
    $total.textContent = 'В корзине нет товаров';

    if (arr.length !== 0) {
      let fragment = document.createDocumentFragment();
      arr.forEach(function (el) {
        fragment.appendChild(createCartItem(el));
      });
      $container.appendChild(fragment);

      $total.textContent = 'Общая стоимость товаров: $' + total;
    }

    $container.appendChild($total);
  };

  cart.render();

  window.cart = {
    cart: cart,
    findInArray: findInArray
  };
})();
