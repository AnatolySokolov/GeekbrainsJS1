'use strict';

(function () {
  let $modal = document.querySelector('.modal');
  let $products = document.querySelector('.products');
  let $inner = $modal.querySelector('.inner');
  let $controls = document.querySelector('.controls');

  let imgModalSize = {
    width: 263,
    height: 280
  };
  let counter = 0;
  let upperLimit = 0;

  let createEl = function (path, options) {
    let el = document.createElement('img');

    el.classList.add('modal-image');
    el.src = path;
    el.width = options.width;
    el.height = options.height;

    return el;
  };

  let renderModalImages = function (value) {
    if (Array.isArray(value)) {
      let fragment = document.createDocumentFragment();

      value.forEach(function (path) {
        let $img = createEl(path, imgModalSize);

        fragment.appendChild($img);
      });
      $inner.appendChild(fragment);
    } else {
      let $img = createEl(value, imgModalSize);

      $inner.appendChild($img);
    }
  };

  let onControlsClick = function (e) {
    if (e.target.getAttribute('id') === 'btn-right') {
      (counter < upperLimit) ? counter++ : counter;
    } else if (e.target.getAttribute('id') === 'btn-left') {
      (counter > 0) ? counter-- : counter;
    }
    $inner.style.marginLeft = '-' + counter + '00%';
  };

  let onEscPress = function (e) {
    if (e.key === 'Escape') {
      $modal.classList.remove('opened');
      $inner.style.marginLeft = '';
      counter = 0;
      upperLimit = 0;
      window.cart.cart.clearCartContainer($inner);
      document.removeEventListener('keydown', onEscPress);
      $controls.removeEventListener('click', onControlsClick);
    }
  };

  let onItemClick = function (e) {
    if (e.target.tagName === 'IMG') {
      let id = +e.target.getAttribute('data-id');
      let item = window.cart.findInArray(id, window.data.products);

      if (Array.isArray(item.img)) {
        upperLimit = item.img.length - 1;
      }
      renderModalImages(item.img);
      $modal.classList.add('opened');
      document.addEventListener('keydown', onEscPress);
      $controls.addEventListener('click', onControlsClick);
    }
  };

  $products.addEventListener('click', onItemClick);
})();
