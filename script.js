var input = document.querySelector('.input');
var guessButton = document.querySelector('.guess')
var clearButton = document.querySelector('.clear')
var resetButton = document.querySelector('.reset')
var message = document.querySelector('.message')
var errorMessage = document.querySelector('.error-message')
var recentGuess = document.querySelector('.recent-guess')
var itWas = document.querySelector('.it-was')

function setNumber() {
  randomNumber = Math.floor(Math.random() * 100);
}

function numbersOnly(user_input) {
  var regex = /[^0-9]/g;
  user_input.value = user_input.value.replace(regex, "");
}

function checkGuess() {
  var guess = input.value
  if (guess < 1 || guess > 100) 
    errorMessage.innerHTML = "Your entry is outside of the range of possible entries. Please press 'Clear' and try again."
  else {
    itWas.innerHTML = 'Your last guess was';
    recentGuess.innerHTML = guess;
    if (guess == randomNumber) {
      message.innerHTML = 'BOOM!';
    } else if (guess > randomNumber) {
      message.innerHTML = 'That is too high!';
    } else {
      message.innerHTML = 'That is too low!';
    }
  }
}

function checkFieldEmpty() {
  if (input.value == '') {
    clearButton.disabled = true;
    guessButton.disabled = true;
  } else {
    clearButton.disabled = false;
    guessButton.disabled = false;
  }
}

input.addEventListener('keyup', function (event) {
  checkFieldEmpty(event.target.value);
  });

function clearInputField() {
  input.value = '';
  errorMessage.innerHTML = '';
  clearButton.disabled = true;
  guessButton.disabled = true;
}

function resetGame() {
  input.value = '';
  setNumber();
  itWas.innerHTML = '';
  recentGuess.innerHTML = '';
  message.innerHTML = '';
}

window.addEventListener('load', setNumber);
guessButton.addEventListener('click', checkGuess);
clearButton.addEventListener('click', clearInputField);
resetButton.addEventListener('click', resetGame);