'use strict';

(function () {
  window.cart = {
    data: window.data.products,
    list: [],

    add: function (id) {
      let item = findItemById(id, this.data);
      if (checkCart(id, this.list)) {
        return false;
      }
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
      renderCart(this.list);
    },

    clearCartContainer: function () {
      let $container = document.querySelector('.cart');
      while ($container.firstChild) {
        $container.removeChild($container.firstChild);
      }
    }
  };

  let findItemById = function (value, arr) {
    let item = undefined;
    arr.some(function (el) {
      if (el.id === value) {
        item = el;
      }
    });
    return item;
  };

  let checkCart = function (value, arr) {
    return arr.some(function (el) {
      return el.id === value;
    });
  };

  let createCartItem = function (o) {
    let template = document.querySelector('#template').content.querySelector('.cart-item');
    let $item = template.cloneNode(true);
    $item.querySelector('.cart-image').src = o.img;
    $item.querySelector('.cart-image').alt = o.name;
    $item.querySelector('.cart-name').textContent = o.name;
    $item.querySelector('.cart-price').textContent = '$' + o.price;
    $item.querySelector('.cart-btn').setAttribute('data-id', o.id);
    return $item;
  };

  let renderCart = function (arr) {
    let fragment = document.createDocumentFragment();
    let $container = document.querySelector('.cart');
    arr.forEach(function (el) {
      fragment.appendChild(createCartItem(el));
    });
    $container.appendChild(fragment);
  };
})();
