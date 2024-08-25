// console.log(Math.floor(Math.random() * 100 + 1));
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowerHigh = document.querySelector(".lower-high");
const startOver = document.querySelector(".resultParas");

const div = document.createElement("div");

let prevGuess = [];
let numGuess = 1;
let guessTake = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = userInput.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (!guess) {
    alert("Value can't be empty");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 to 100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 9) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  guessTake++;
  if (parseInt(guess) === randomNumber) {
    displayMsg(
      `Congrats! You guessed it right.<br/> You take ${guessTake} Guesses. :)`
    );
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  lowerHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");
  // div.classList.add("button");
  div.innerHTML = `<button id="newGame" class="button">Start a new game </button>`;
  startOver.appendChild(div);
  playGame = false;
  newGame();
}

function newGame() {
  const startNew = document.querySelector("#newGame");
  startNew.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    lowerHigh.innerHTML = "";
    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    startOver.removeChild(div);

    playGame = true;
  });
}
