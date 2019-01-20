// declare variable for range minimum
var minimum = document.querySelector('.min')
// declare variable for range maximum 
var maximum = document.querySelector('.max')
// declare variabale for 'set range' button
var setRangeButton = document.querySelector('.set')
// declare variable for user input when guessing a number
var input = document.querySelector('.input')
// declare variable for 'guess' button
var guessButton = document.querySelector('.guess')
// declare variable for 'clear' button
var clearButton = document.querySelector('.clear')
// declare variable for 'reset' button
var resetButton = document.querySelector('.reset')
// declare varibale for 'number not in range' error message
var errorMessage = document.querySelector('.error-message')
// declare variable for first part of 'guess result message'
var message = document.querySelector('.message')
// declare varibale for recently guessed number
var recentGuess = document.querySelector('.recent-guess')
// declare varibale for second part of guess 'result message'
var itWas = document.querySelector('.it-was')
// declare varibale for 'range message'
var rangeMessage = document.querySelector('.range-message')

// function for making sure only numbers are accepted as input
function numbersOnly(user_input) {
  //globally accepting only numbers 1-9 as input
  var regex = /[^0-9]/g
  //if input is not a number 0-9, input will be stripped out from input field
  user_input.value = user_input.value.replace(regex, "");
}

//function for generating a random number that the user can guess
function setNumber() {
  //range minimum value set by user, converted from string to an integer
  var min = parseInt(minimum.value)
  //range maximum value set by user, converted from string to an integer
  var max = parseInt(maximum.value)
  // generate random full number between minimum and maximum range, both inclusive
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  // range message to inform user about what the range is
  rangeMessage.innerHTML = `Range is set to ${min} - ${max}`
}

//function for generating a new number after user wins a round
function setNewNumber() {
  // decrease current mimimum range by 10 only if current range is no less than 11.
  if (minimum.value > 10)
    minimum.value -= 10;
  // if current mimimum range is anywhere less than 11, set range to be 1
  else {
    minimum.value = 1;
  }
  // declare varibale for new mimimum range. Will also be updating the minimum range input field 
  var min = minimum.value;
  // change current max range from string to integer
  var maxim = parseInt(maximum.value);
  // increase max range (integer) by 10
  var max = maxim += 10;
  // set maximum range input field to be new increased maximum range
  document.querySelector('.max').value = max;
  // generate new random number that the user can guess using the updated min and max range 
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
}

// function for checking user's guess
function checkGuess() {
  // declare varilable for user input value
  var guess = input.value
  // check if guess is within current range
  if (guess < minimum.value || guess > maximum.value) 
  // if not within current range, render error message for user to adjust their entry
    errorMessage.innerHTML = "Your entry is not within range. Please press 'Clear' and try again.";
  //else check guess 
  else {
    // tell user what their last guess was 
    itWas.innerHTML = 'Your last guess was';
    recentGuess.innerHTML = guess;
    // if guess was correct
    if (guess == randomNumber) {
      // confirm win
      message.innerHTML = 'BOOM!';
      // update range and generate new number for user to guess
      setNewNumber();
      // inform user about new range values
      rangeMessage.innerHTML = `Range is now ${minimum.value} - ${maximum.value}`
      // if guess was above random number 
    } else if (guess > randomNumber) {
      // inform user about it
      message.innerHTML = 'That is too high!';
      // if guess was below random number 
    } else {
      // inform user inform user about it
      message.innerHTML = 'That is too low!';
    }
  }
}

// function for checking if input field is empty
function checkFieldEmpty() {
  // if input value empty
  if (input.value == '') {
    // keep 'guess' and 'clear' buttons disabled
    clearButton.disabled = true
    guessButton.disabled = true
    // if input field has content 
  } else {
    // enable 'clear' and 'guess' buttons
    clearButton.disabled = false
    guessButton.disabled = false
  }
}

// declaring timing for when to run function for checking input field is empty
input.addEventListener('keyup', function (event) {
  checkFieldEmpty(event.target.value);
  });

// fucntion for clearing input field. To use with clear button
function clearInputField() {
  // set value to be empty
  input.value = '';
  // remove error message if there is one
  errorMessage.innerHTML = ''
  // set 'guess' and 'clear' buttons back to disabled state
  clearButton.disabled = true
  guessButton.disabled = true
}

// function for resetting the game
function resetGame() {
  // set mimimum range value to be empty
  minimum.value = ''
  // set maximum range value to be empty
  maximum.value = ''
  // set user's recent guess to be empty
  input.value = ''
  // set range error message to be empty
  errorMessage.innerHTML = ''
  // set guessing result info messages to be empty
  itWas.innerHTML = ''
  recentGuess.innerHTML = ''
  message.innerHTML = ''
  // set range message to be empty
  rangeMessage.innerHTML = ''
}

// declaring to run the setNumber function on clicking the reset button
setRangeButton.addEventListener('click', setNumber);
// declaring to run the checkGuess function on clicking the guess button
guessButton.addEventListener('click', checkGuess);
// declaring to run the clear input field function on clicking the clear button
clearButton.addEventListener('click', clearInputField);
// declaring to run the reset game function on clicking the reset button
resetButton.addEventListener('click', resetGame);
