var input = document.querySelector('.input');
var guessButton = document.querySelector('.guess')
var clearButton = document.querySelector('.clear')
var resetButton = document.querySelector('.reset')
var message = document.querySelector('.message')
var recentGuess = document.querySelector('.recent-guess')
var itWas = document.querySelector('.it-was')


function setNumber() {
  randomNumber = Math.floor(Math.random() * 100);
}

function checkGuess() {
  var guess = input.value
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

function clearInputField() {
  input.value = '';
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
