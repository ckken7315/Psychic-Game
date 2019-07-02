// Array number that player can choose 

 var computerChoices =["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables to track players to win, lose, and numbers of guesses

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var computerGuess = [];

  

// set the computerGuess variables to detect the random array.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
    document.querySelector("#guessLeft").innerHTML = "Guesses left:" + guessesLeft;
    
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your guesses so far: " + letterUser.join(' ');
}




var restart = function() {
	guessesLeft = 9;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//when user pressed any keys, it will trigger this function.

document.onkeyup = function(event) {
    countGuessesLeft();
	guessesLeft--;


    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Loses: " + losses;
		restart();
	}
  };















// updatePage();

// function updatePage() {
//    var winsDiv= document.getElementById("wins");
//    var letterSpace=document.getElementById("letter");
//    letterSpace.append(letter)
    

    // document.querySelector("#losses").innerHTML = "Losses: " + losses;
    // // document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letter;
    // document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessLeft;
// }
// this function inital computer letters



// var compGuess = playerChoice[Math.floor(Math.random() * playerChoice.length)];
// computerGuess.push(compGuess);
// console.log(computerGuess[0]);


// // how the game setup 
// document.onkeyup = function(event) {
//     playerGuess = event.key;
//    letter.push(playerGuess);
//     console.log(computerGuess[0]);
//     updatePage();

// if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
//         wins ++; 
//         guessesLeft = 9;
//         computerGuess.length = 0;
//         var compGuess = playerChoice[Math.floor(Math.random() * playerChoice.length)];
//         computerGuess.push(compGuess);
//         console.log(computerGuess[0]);
//         updatePage();
//     }

//     else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
//         guessesLeft = guessesLeft-1;
//         updatePage();
//     }
//      else {
//         losses++;
//         guessesLeft = 9;
//         letter.length = 0;
//         computerGuess.length = 0;
//         var compGuess = playerChoice[Math.floor(Math.random() * playerChoice.length)];
//         computerGuess.push(compGuess);
//         console.log(computerGuess[0]);
//         updatePage();
//         }
//     }
// }
