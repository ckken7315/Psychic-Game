// Array number that player can choose 

window.onload = function() {

 var playerChoice =["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables to track players to win, lose, and numbers of guesses

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letter = [];
var computerGuess = [];
var playerGuess;

updatePage();

function updatePage() {
   var winsDiv= document.getElementById("wins");
   var letterSpace=document.getElementById("letter");
   letterSpace.append(letter)
    

    // document.querySelector("#losses").innerHTML = "Losses: " + losses;
    // // document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letter;
    // document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessLeft;
}
// this function inital computer letters



var compGuess = playerChoice[Math.floor(Math.random() * playerChoice.length)];
computerGuess.push(compGuess);
console.log(computerGuess[0]);


// how the game setup 
document.onkeyup = function(event) {
    playerGuess = event.key;
   letter.push(playerGuess);
    console.log(computerGuess[0]);
    updatePage();

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins ++; 
        guessesLeft = 9;
        computerGuess.length = 0;
        var compGuess = playerChoice[Math.floor(Math.random() * playerChoice.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
        updatePage();
    }

    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
        updatePage();
    }
     else {
        losses++;
        guessesLeft = 9;
        letter.length = 0;
        computerGuess.length = 0;
        var compGuess = playerChoice[Math.floor(Math.random() * playerChoice.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
        updatePage();
        }
    }
}
