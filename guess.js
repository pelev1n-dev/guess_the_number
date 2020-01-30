'use strict';

let number = Math.floor(Math.random() * 100);

function guess() {
  let userAnswer = +prompt('Введите число от 0 до 100');

  if(typeof (userAnswer) !== 'number') {
    userAnswer = +prompt('Введите число от 0 до 100');
    guess();
  }

  if (userAnswer > number) {
    alert('Загаданное число меньше');
    guess();
  }

  if (userAnswer < number) {
    alert('Загаданное число больше');
    guess();
  }

  if (userAnswer === number){
    confirm('Вы угадали! Продолжить или завершить игру?')
  }

}

guess();










