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
  var minim = parseInt(minimum.value);
  var maxim = parseInt(maximum.value);
  if (minim > 10) {
    minim -= 10;
    maxim += 10;
  } else if (minim < 11 && minim > 1) {
    minim = 1;
    maxim += 10;
  } else {
    maxim += 20;
  }
  var min = minim
  var max = maxim
  document.querySelector('.min').value = minim;
  document.querySelector('.max').value = maxim;
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
}

function checkGuess() {
  if (parseInt(input.value) < minimum.value || parseInt(input.value) > maximum.value) 
    errorMessage.innerHTML = "Your entry is not within range. Please press 'Clear' and try again.";
  else {
    itWas.innerHTML = 'Your last guess was';
    recentGuess.innerHTML = parseInt(input.value);
    if (parseInt(input.value) == randomNumber) {
      message.innerHTML = 'BOOM!';
      setNewNumber();
      rangeMessage.innerHTML = `Range is now ${minimum.value} - ${maximum.value}`
    } else if (parseInt(input.value) > randomNumber) {
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
  errorMessage.innerHTML = ''
  itWas.innerHTML = ''
  recentGuess.innerHTML = ''
  message.innerHTML = ''
  rangeMessage.innerHTML = ''
}

setRangeButton.addEventListener('click', setNumber);
guessButton.addEventListener('click', checkGuess);
clearButton.addEventListener('click', clearInputField);
resetButton.addEventListener('click', resetGame);