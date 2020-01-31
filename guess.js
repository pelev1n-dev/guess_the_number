'use strict';

const guessTheNumber = (function () {

  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  let counter = 10;
  let number = getRandomNumber();


  return function guess() {

    if (counter === 0) {
      if (confirm(`Игра завершена у вас ${counter} попыток. Начать новую игру?`)){
        counter = 10;
        getRandomNumber();
        guessTheNumber();
      }
      return
    }

    let userAnswer = +prompt(`Введите число от 1 до 100.`);

    if(null === userAnswer){
      return
    } else if(isNaN(userAnswer)){
      alert('Введи число!');
      guess();
    } else if(userAnswer > number){
      counter--;
      alert(`Загаданное число меньше. Осталось попыток ${counter}`);
      guess();
    } else if(userAnswer < number){
      counter--;
      alert(`Загаданное число больше. Осталось попыток ${counter}`);
      guess();
    } else if(userAnswer === number) {
      if(confirm("Вы угадали! Продолжить или завершить игру?")){
        counter = 10;
        getRandomNumber();
        guessTheNumber();
      }
    }

  }

})();

guessTheNumber();



