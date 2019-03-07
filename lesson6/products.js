'use strict';

(function () {
  let $productsContainer = document.querySelector('.products');
  let $cartContainer = document.querySelector('.cart');

  let createItem = function (o) {
    let template = document.querySelector('#template').content.querySelector('.product');
    let $item = template.cloneNode(true);
    $item.querySelector('.image').src = o.img;
    $item.querySelector('.image').alt = o.name;
    $item.querySelector('.name').textContent = o.name;
    $item.querySelector('.color').textContent = o.color;
    $item.querySelector('.size').textContent = o.size;
    $item.querySelector('.delivery').textContent = o.delivery;
    $item.querySelector('.price').textContent = '$' + o.price;
    $item.querySelector('.btn').setAttribute('data-id', o.id);
    return $item;
  };

  let renderProducts = function (arr) {
    let $container = document.querySelector('.products');
    let fragment = document.createDocumentFragment();
    arr.forEach(function (el) {
      fragment.appendChild(createItem(el));
    });
    $container.appendChild(fragment);
  };

  let getId = function (e, list) {
    let id = undefined;
    Array.from(list).some(function (el) {
      if (el === e.target) {
        id = +el.getAttribute('data-id');
      }
    });
    return id;
  };

  let onButtonBuyClick = function (e) {
    let buttonList = $productsContainer.querySelectorAll('.btn');
    let id = getId(e, buttonList);
    window.cart.add(id);
    window.cart.clearCartContainer();
    window.cart.render();
  };

  let onButtonRemoveClick = function (e) {
    let buttonList = $cartContainer.querySelectorAll('.cart-btn');
    let id = getId(e, buttonList);
    window.cart.remove(id);
    window.cart.clearCartContainer();
    window.cart.render();
  };

  renderProducts(window.data.products);
  $productsContainer.addEventListener('click', onButtonBuyClick);
  $cartContainer.addEventListener('click', onButtonRemoveClick);
})();
