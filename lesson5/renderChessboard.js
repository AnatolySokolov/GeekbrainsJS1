'use strict';

(function () {

  const charCodeA = 97; //from ASCII table
  let $container = document.querySelector('.container');
  // объект шахмотной доски, здесь будут связаны координаты полей с соответсвующими дом узлами
  let chessboard = {};

  let createEl = function (tagName, className, content) {
    let el = document.createElement(tagName);
    if (className) {
      if (Array.isArray(className)) {
        className.forEach(function (name) {
          el.classList.add(name);
        });
      } else {
        el.classList.add(className);
      }
    }
    if (content) {
      el.textContent = content;
    }
    return el;
  };
                                     // light       dark
  let colorOfField = function (i, j, className1, className2) {
    if (i % 2 !== 0 && j % 2 === 0 || i % 2 === 0 && j % 2 !== 0) {
      return className1;
    }
    return className2;
  };

  let $fields = createEl('div', 'fields');

  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      let className = colorOfField(i, j, 'field-light', 'field-dark');
      let coords = String.fromCharCode(charCodeA + j) + (i + 1);
      let $field = createEl('div', ['field', className]);
      // $field.setAttribute('data-position', coords);
      chessboard[coords] = $field;
      $fields.appendChild($field);
    }
  }

  let $notation = createEl('div', 'notation');
  let $letters = createEl('ul', 'letters');
  let $numbers = createEl('ul', 'numbers');

  for (let i = 0; i < 8; i++) {
    let $letter = createEl('li', null, String.fromCharCode(charCodeA + i));
    let $number = createEl('li', null, i + 1);
    $letters.appendChild($letter);
    $numbers.appendChild($number);
  }

  // контейнер div с классом chessboard
  let $chessboard = createEl('div', 'chessboard');

  // container > chessboard > fields + notation > letters + numbers
  $notation.appendChild($letters);
  $notation.appendChild($numbers);
  $chessboard.appendChild($fields);
  $chessboard.appendChild($notation);
  $container.appendChild($chessboard);

  // console.log(obj);

  // exports
  window.renderChessboard = {
    createEl: createEl,
    chessboard: chessboard
  };

})();
