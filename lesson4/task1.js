'use strict';

(function () {
  const message = {
    ASK: 'Введите число от 0 до 999',
    NOT_A_NUMBER: 'Вы ввели не число',
    UP_TO_THOUSAND: 'Число должно быть в диаозоне от 0 до 999'
  };

  let number, obj;

  let convertNumberToObject = function (value) {
    let obj = {};
    let ones, tens, hundreds;
    ones = tens = hundreds = 0;

    if (isNaN(+value) || !value) {
      console.log(message.NOT_A_NUMBER);
    } else {
      switch (value.length) {
        case 1:
          ones = value[0];
          break;
        case 2:
          ones = value[1];
          tens = value[0];
          break;
        case 3:
          ones = value[2];
          tens = value[1];
          hundreds = value[0];
          break;
        default:
          console.log(message.UP_TO_THOUSAND);
          return obj;
      }

      // Рекомендуется использовать ASCII-символы в переменных, в т.ч. в имени ключа объекта?
      obj = {
        'ones': ones,
        'tens': tens,
        'hundreds': hundreds
      }
    }

    return obj;
  };

  number = prompt(message.ASK);
  obj = convertNumberToObject(number);
  console.log(obj);
})();