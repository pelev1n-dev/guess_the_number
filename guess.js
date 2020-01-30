'use strict';

function guessTheNumber() {

  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  let number = getRandomNumber();
  console.log(number);

  function guess() {

    let userAnswer = +prompt('Введите число от 1 до 100');

    if(isNaN(userAnswer)){
      alert('Введи число!');
      guess();
    }

    if (userAnswer > number) {
      alert(`Загаданное число меньше. Осталось попыток ${counter}`);
      checkCounter();
      guess();
    }

    if (userAnswer < number) {
      alert(`Загаданное число больше. Осталось попыток ${counter}`);
      checkCounter();
      guess();
    }

    if (userAnswer === number){
      if (confirm("Вы угадали! Продолжить или завершить игру?")) {
        guessTheNumber();
      } else {
        return confirmGame();
      }
    }

  }

  let counter = 10;
  function checkCounter() {
    counter--;
    if (counter === 0) {
      return confirmGame();
    } else {
      return guess();
    }
  }

  function confirmGame() {
    alert('Игра завершена')
  }

  return guess();

}

guessTheNumber();