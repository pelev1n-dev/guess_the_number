'use strict';

let number = Math.floor(Math.random() * 100);

function guess() {

  let userAnswer = +prompt('Введите число от 1 до 100');

  if(isNaN(userAnswer)){
    alert('Введи число!');
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
    if (confirm("Вы угадали! Продолжить или завершить игру?")) {
      guess();
    } else {
      alert("Игра завершена");
    }
  }

}

guess();
