"use strict";

// Variables for selectors
const scoreVar = document.querySelector(".score");
const finalNumberVar = document.querySelector(".final-number");
const highScoreVar = document.querySelector(".highscore");
const userInputVar = document.querySelector(".user-input");
const commentsVar = document.querySelector(".comments");
const checkVar = document.querySelector(".check");
const resultVar = document.querySelector(".result");
const tryAgainVar = document.querySelector(".try-again");
const exitVar = document.querySelector(".exit-button");

// Variables for score board
let score = 20;
let win = 0;
let highScore = 0;
let guessNumber = Math.trunc(Math.random() * 20) + 1;
let userName = document.cookie;

function out() {
  commentsVar.textContent = `You Lost ${userName} !!!`;
  resultVar.textContent = "Don't worry, you can try again!!!";
  scoreVar.textContent = `Score: 0`;
}

checkVar.addEventListener("click", function () {
  if (win === 0) {
    let userValue = Number(userInputVar.value);

    if ((userValue > 20 || userValue < 1) && score > 0) {
      commentsVar.textContent = "Please guess a number between 1 to 20";
    } else if (userValue < guessNumber && score > 0) {
      commentsVar.textContent = "Low Value!!! 🤔";
      score--;
      if (score < 1) {
        out();
        return;
      }
      scoreVar.textContent = `Score: ${score}`;
    } else if (userValue > guessNumber && score > 0) {
      commentsVar.textContent = "High Value!!! 🤔";
      score--;
      if (score < 1) {
        out();
        return;
      }
      scoreVar.textContent = `Score: ${score}`;
    } else if (userValue === guessNumber && score > 0) {
      finalNumberVar.textContent = `🎉✨ ${guessNumber} ✨🎉`;
      finalNumberVar.style.color = "green";
      finalNumberVar.style.fontSize = "20px";
      if (score > highScore) {
        highScore = score;
        highScoreVar.textContent = `HighScore: ${highScore}`;
      }
      commentsVar.textContent = `You Won ${userName} !!!`;
      resultVar.textContent = "🎊🎉🎈🎈🎉🎊";
      win = 1;
    }
  }
});

tryAgainVar.addEventListener("click", function () {
  guessNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  win = 0;
  scoreVar.textContent = `Score: ${score}`;
  finalNumberVar.textContent = "?";
  finalNumberVar.style.color = "black";
  finalNumberVar.style.fontSize = "30px";
  commentsVar.textContent = "Guess a number";
  resultVar.textContent = "You can do it!!!";
  userInputVar.value = "";
});

exitVar.onclick = function () {
  document.cookie = "buddy";
};
