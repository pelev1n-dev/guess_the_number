'use strict';

const guessTheNumber = (function () {

  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  function checkCounter() {
    counter--;
    if (counter === 0) {
      alert(`Игра завершена у вас ${counter} попыток`);
      guessTheNumber();
    }
  }

  let counter = 10;
  let number = getRandomNumber();


  return function guess() {

    let userAnswer = +prompt(`Введите число от 1 до 100. У вас ${counter} попыток`);
    checkCounter();

    if(isNaN(userAnswer)){
      alert('Введи число!');
      guess();
    }

    if (userAnswer > number) {
      alert(`Загаданное число меньше. Осталось попыток ${counter}`);
      guess();
    }

    if (userAnswer < number) {
      alert(`Загаданное число больше. Осталось попыток ${counter}`);
      guess();
    }

    if (userAnswer === number){
      if(confirm("Вы угадали! Продолжить или завершить игру?")){
        guessTheNumber();
      }
    }

  }

})();

guessTheNumber();

/*function guessTheNumber() {

  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  let number = getRandomNumber();

  let counter = 10;
  function checkCounter() {
    counter--;
    if (counter === 0) {
      endGame();
    } else {
      guess();
    }
  }

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
        endGame();
      }
    }

  }

  function endGame() {
    alert('Игра завершена');
    guessTheNumber();
  }

  return guess();

}*/

