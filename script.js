var minimum = document.querySelector('.min')
var maximum = document.querySelector('.max')
var setRangeButton = document.querySelector('.set')
var input = document.querySelector('.input')
var guessButton = document.querySelector('.guess')
var clearButton = document.querySelector('.clear')
var resetButton = document.querySelector('.reset')
var message = document.querySelector('.message')
var errorMessage = document.querySelector('.error-message')
var recentGuess = document.querySelector('.recent-guess')
var itWas = document.querySelector('.it-was')
var rangeMessage = document.querySelector('.range-message')

function numbersOnly(user_input) {
  var regex = /[^0-9]/g
  user_input.value = user_input.value.replace(regex, "");
}

function setNumber() {
  var min = parseInt(minimum.value)
  var max = parseInt(maximum.value)
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  rangeMessage.innerHTML = `Range is set to ${min} - ${max}`
}

function setNewNumber() {
  if (minimum.value > 10)
    minimum.value -= 10;
  else {
    minimum.value = 1;
  }
  var min = minimum.value;
  var maxim = parseInt(maximum.value);
  var max = maxim += 10;
  document.querySelector('.max').value = max;
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
}

function checkGuess() {
  var guess = input.value
  if (guess < minimum.value || guess > maximum.value) 
    errorMessage.innerHTML = "Your entry is not within range. Please press 'Clear' and try again.";
  else {
    itWas.innerHTML = 'Your last guess was';
    recentGuess.innerHTML = guess;
    if (guess == randomNumber) {
      message.innerHTML = 'BOOM!';
      setNewNumber();
      rangeMessage.innerHTML = `Range is now ${minimum.value} - ${maximum.value}`
    } else if (guess > randomNumber) {
      message.innerHTML = 'That is too high!';
    } else {
      message.innerHTML = 'That is too low!';
    }
  }
}

function checkFieldEmpty() {
  if (input.value == '') {
    clearButton.disabled = true
    guessButton.disabled = true
  } else {
    clearButton.disabled = false
    guessButton.disabled = false
  }
}

input.addEventListener('keyup', function (event) {
  checkFieldEmpty(event.target.value);
  });

function clearInputField() {
  input.value = '';
  errorMessage.innerHTML = ''
  clearButton.disabled = true
  guessButton.disabled = true
}

function resetGame() {
  minimum.value = ''
  maximum.value = ''
  input.value = ''
  itWas.innerHTML = ''
  recentGuess.innerHTML = ''
  message.innerHTML = ''
  rangeMessage.innerHTML = ''
}

setRangeButton.addEventListener('click', setNumber);
guessButton.addEventListener('click', checkGuess);
clearButton.addEventListener('click', clearInputField);
resetButton.addEventListener('click', resetGame);