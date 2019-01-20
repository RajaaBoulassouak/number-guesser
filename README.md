# Number-Guesser

## What is it?

Nummber Guesser is a game which generates a random number that the user can guess. It first requires the user to select a desired range from which they can guess the random number from. Only numerical and non-negative values are accepted. 
To increase the level of difficulty, each time the user wins a round, the range expands automatically by 20.

![](images/Screen%20Shot%202019-01-20%20at%201.36.42%20PM.png)

## What was used to build it?

Number Guesser is a front-end-only app built using HTML, CSS and JavaScript.

## User Interactions

First the user enters their desired range minimum and range maximum to start with and clicks on 'Set Range' to set the entered range. Next the user enters their guess. Only numerical and non-negative values are accepted, evrything else is automatically stripped out from the input field. As long as no guess is entered the 'Guess' and Clear' buttons are disabled. Once the user enters their guess, the 'Guess' and Clear' buttons turn interactable. Once the user clicks on the 'Guess' button, The most recent guess and a message informing about the guess result are rendered. A guess can be eather too low, too high or correct. The game can be reset at anytime.

![](images/Screen%20Shot%202019-01-20%20at%201.31.37%20PM.png)
![](images/Screen%20Shot%202019-01-20%20at%201.32.24%20PM.png)


The user can click the 'clear' button to clear the inpput field and try a new guess. If the guess is not withing the set range, an alert message informs the user about the error. The user needs to clear the input field and enter a valid guess.

![](images/Screen%20Shot%202019-01-20%20at%201.33.04%20PM.png)


The user can keep guessing until the correct number is guessed. Once the user guesses the correct number, the range minimum descreases by 10 and the range maximum increases by 10 allowing for a wider range each round. The smallest possible range minimum is 1. Once a range minimum of 1 is reached only the range maximum will increase by 20 each round.

![](images/Screen%20Shot%202019-01-20%20at%201.33.28%20PM.png)

## Getting started

Clone this repository via `git clone git@github.com:RajaaBoulassouak/number-guesser.git` in the CLI.
In the CLI run 'open index html'

Have fun!










