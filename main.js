let randomNumber;
let rangeButton = document.querySelector('#button-min-max-range-box');
let submitButton = document.querySelector('#submit-guess-button');

rangeButton.addEventListener('click', getRange);
submitButton.addEventListener('click', guessHandler);


function getRange() {
  let minRange = document.querySelector('#user-min-number');
  let maxRange = document.querySelector('#user-max-num');
  let minDisplay = document.querySelector('#min-number-from-form');
  let maxDisplay = document.querySelector('#max-number-from-form');
  randomNumber = Math.round(Math.random() * (maxRange.value - minRange.value) + minRange.value);
  console.log(randomNumber);
  minDisplay.innerText = minRange.value;
  maxDisplay.innerText = maxRange.value;

}


function guessHandler() {
  let nameInput1 = document.querySelector('#challenger-1-name-input');
  let nameInput2 = document.querySelector('#challenger-2-name-input');
  let name1 = document.querySelector('.challenger-1-input-display');
  let name2 = document.querySelector('.challenger-2-input-display');
  let guess1 = document.querySelector('#challenger-1-guess');
  let guess2 = document.querySelector('#challenger-2-guess');
  let guessDisplay1 = document.querySelector('#challenger-1-number-guess');
  let guessDisplay2 = document.querySelector('#challenger-2-number-guess');
  let guessMessage1 = document.querySelector('#challenger-1-message-guess');
  let guessMessage2 = document.querySelector('#challenger-2-message-guess');

  updateName(nameInput1, name1);
  updateName(nameInput2, name2);
  updateNumber(guess1, guessDisplay1);
  updateNumber(guess2, guessDisplay2);
  checkGuesses(guess1, guessMessage1);
  checkGuesses(guess2, guessMessage2);
}

function updateName(input, nameDisplay) {
  nameDisplay.innerText = input.value;
}

function updateNumber(number, numberDisplay) {
  numberDisplay.innerText = number.value
}

function checkGuesses(guess, guessMessage) {
  if (guess.value < randomNumber) {
    guessMessage.innerText = 'In the words of Tal Bachman, go hiiiiiigggghhhhheeeayyyyayyyyy(er)'
  } else if (guess.value > randomNumber) {
    guessMessage.innerText = 'In the words of Lil Jon, get LOW(wer).'
  } else {
    guessMessage.innerText = 'Nailed it!'
    showWinnerCard()
  }
}
