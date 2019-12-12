let randomNumber;
let rangeButton = document.querySelector('#button-min-max-range-box');
let submitButton = document.querySelector('#submit-guess-button');
let nameInput1 = document.querySelector('#challenger-1-name-input');
let nameInput2 = document.querySelector('#challenger-2-name-input');

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
  checkRange(minRange, maxRange);
}

function checkRange(min, max) {
  let rangeError = document.querySelector('#range-error-msg');
  if (max.value < min.value) {
    rangeError.style.display = 'inline'
  } else {
    rangeError.style.display = 'none'
  }
}

function guessHandler() {
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
  checkGuesses(name1.innerText, guess1, guessMessage1);
  checkGuesses(name2.innerText, guess2, guessMessage2);
}

function updateName(input, nameDisplay) {
  nameDisplay.innerText = input.value;
}

function updateNumber(number, numberDisplay) {
  numberDisplay.innerText = number.value
}

function checkGuesses(name, guess, guessMessage) {
  checkInputs();
  if (guess.value < randomNumber) {
    guessMessage.innerText = 'In the words of Tal Bachman, go hiiiiiigggghhhhheeeayyyyayyyyy(er)'
  } else if (guess.value > randomNumber) {
    guessMessage.innerText = 'In the words of Lil Jon, get LOW(wer).'
  } else {
    guessMessage.innerText = 'Nailed it!'
    let winnerName = name;
    console.log('66name', winnerName);
    showWinnerCard(winnerName, nameInput1, nameInput2);
  }
}

function checkInputs() {
  let inputs = document.querySelectorAll('.input-form-box');
  let inputsError = document.querySelector('.error-msg-inputs')
  inputs.forEach(input => {
    console.log('wee woo wee woo');
    if (input.value === '') {
      inputsError.style.display = 'inline';
    }
  })
}


function showWinnerCard (name, name1, name2) {
  console.log(name, name1, name2);
  let aside = document.querySelector('#right-aside');
  aside.innerHTML += `
  <article class="winner-card">
    <div id="challenger-1-vs-challenger-2-wrapper">
      <p class="challenger-1-name-input-display bold-score-box-text">
        ${name1.value}
      </p>
      <p class="light-form-text">
        vs
      </p>
      <p class="challenger-2-name-input-display bold-score-box-text">
        ${name2.value}
      </p>
    </div>
    <div id="winner-name-and-winner">
      <div class="grey-horizontal-lines"></div>
      <p class="bold-winner-name">
        WINNER NAME
      </p>
      <p class="winner-card-winner">
        ${name}
      </p>
      <div class="grey-horizontal-lines"></div>
    </div>
    <div id="guesses-minutes-button-wrapper">
      <p class="number-of-guesses-statement">
        <span class="number-guesses bold-score-box-text">100</span>
        <span class="light-form-text">GUESSES</span>
      </p>
      <p class="number-of-minutes-statement">
        <span class="number-minutes bold-score-box-text">5</span>
        <span class="light-form-text">MINUTES</span>
      </p>
      <input class="button delete-card" type="button" name="update-button" value="X" />
    </div>`;
  };
