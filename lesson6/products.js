'use strict';

(function () {
  let $productsContainer = document.querySelector('.products');
  let $cartContainer = document.querySelector('.cart');

  let createItem = function (o) {
    let template = document.querySelector('#template').content.querySelector('.product');
    let $item = template.cloneNode(true);
    $item.querySelector('.image').src = o.img;
    $item.querySelector('.image').alt = o.name;
    $item.querySelector('.image').setAttribute('data-id', o.id);
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

  let onButtonBuyClick = function (e) {
    if (e.target.tagName === 'BUTTON') {
      let id = +e.target.getAttribute('data-id');
      window.cart.cart.add(id);
      window.cart.cart.clearCartContainer();
      window.cart.cart.render();
    }
  };

  let onButtonRemoveClick = function (e) {
    let id = +e.target.getAttribute('data-id');
    window.cart.cart.remove(id);
    window.cart.cart.clearCartContainer();
    window.cart.cart.render();
  };

  renderProducts(window.data.products);
  $productsContainer.addEventListener('click', onButtonBuyClick);
  $cartContainer.addEventListener('click', onButtonRemoveClick);
})();
