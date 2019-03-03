'use strict';

(function () {
  let product = [
    {
      name: 'рубашка',
      color: 'белый',
      price: 2000
    },
    {
      name: 'брюки',
      color: 'черный',
      price: 3000,
    },
    {
      name: 'ботинки',
      color: 'черный',
      price: 7000
    }
  ];

  // h2 + ul > li * 3 > p(name) + p(color) + p(price) ^^ p(общая сумма)

  let createItem = function (obj) {
    let $item = document.createElement('li');
    let $name = document.createElement('p');
    let $color = document.createElement('p');
    let $price = document.createElement('p');

    $name.textContent = 'наименование товара: ' + obj.name;
    $color.textContent = 'цвет: ' + obj.color;
    $price.textContent = 'цена: ' + obj.price;

    $item.appendChild($name);
    $item.appendChild($color);
    $item.appendChild($price);
    return $item;
  };

  let renderCatalog = function (arr) {
    let $container = document.querySelector('.container3');

    let $title = document.createElement('h2');
    $title.textContent = 'Каталог товаров';

    let $list = document.createElement('ul');
    let $total = document.createElement('p');
    let total = 0;

    arr.forEach(function (el){
      let item = createItem(el);
      $list.appendChild(item);
      total += el.price;
    });

    $total.textContent = 'Общая сумма: ' + total;

    $container.appendChild($title);
    $container.appendChild($list);
    $container.appendChild($total);
  };

  renderCatalog(product);

})();
