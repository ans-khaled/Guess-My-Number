'use strict';

let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
console.log(hiddenNumber);

let score = 20;
let highscore = 0;
//========================Function to DRY 'message'=======================
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//==============================check bottom================================
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // Any thing enter by user his type 'String' for it we useing 'Number function' to covert type

  if (!guess) {
    displayMessage('! No Number');
  } else if (guess === hiddenNumber) {
    displayMessage('Correct Answer (:');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = hiddenNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== hiddenNumber) {
    if (score > 1) {
      displayMessage(guess > hiddenNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose (;');
      document.querySelector('.score').textContent = 0;
    }
  }
  //===================== The same code above but before using DRY ==================
  // else if (guess < hiddenNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose (;';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess > hiddenNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose (;';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
//===============================Again bottom======================================
document.querySelector('.again').addEventListener('click', function () {
  hiddenNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//============================== Coding Challenge #1 =============================

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
