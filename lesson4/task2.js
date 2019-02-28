'use strict';

(function () {
  function builtQuestion() {
    let text = '[' +  this.price + '] ' + this.text;
    for(let i = 0; i < this.options.length; i++) {
      text = text + '\n' + (i + 1) + ') ' + this.options[i];
    }

    if(this.fixed) {
      text = text + '\n' + 'Несгораемая сумма';
    }

    return text;
  }

  let questions = [
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 0,
      price: 100,
      fixed: false,
      getText: builtQuestion,
    },
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 1,
      price: 200,
      fixed: false,
      getText: builtQuestion,
    },
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 2,
      price: 300,
      fixed: true,
      getText: builtQuestion,
    },
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 3,
      price: 400,
      fixed: false,
      getText: builtQuestion,
    },
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 0,
      price: 500,
      fixed: false,
      getText: builtQuestion,
    },
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 1,
      price: 600,
      fixed: true,
      getText: builtQuestion,
    },
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 2,
      price: 700,
      fixed: false,
      getText: builtQuestion,
    },
    {
      text: 'Висит груша - нельзя скушать!',
      options: ['Лампочка', 'Кактус', 'Лопата', 'Автомобиль'],
      correct: 3,
      price: 800,
      fixed: false,
      getText: builtQuestion,
    }
  ];

  let startGame = function (arr, value) {
    let price = 0;
    let fixedPrice = 0;
    for(let i = value - 1; i < arr.length; i++) {
      let questionText = 'Вопрос номер – ' + (i + 1) + ' ' + questions[i].getText();

      if(+prompt(questionText) === (questions[i].correct + 1)) {
        alert('Текущий выигрыш: ' + questions[i].price);
        price = questions[i].price;

        if(questions[i].fixed) {
          fixedPrice = questions[i].price;
        }

      } else {
        price = 0;
      }
    }
    alert('Ваш выигрыш составил: ' + (price || fixedPrice));
  };

  let numberOfQuestion = prompt('Введите номер вопроса от 1 до ' + questions.length);
  startGame(questions, numberOfQuestion);
})();