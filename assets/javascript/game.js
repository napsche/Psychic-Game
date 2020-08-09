//define variables for game
var winCount = 0;
var lossCount = 0;
var guessRemain = 10; 
var guessedLetters = [];

//set up array for computer choices
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//have computer pick random letter
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
console.log(computerChoice)

//make event for when key is pressed
document.onkeyup = function(event) {
    var userChoice = event.key; 
    //userChoice must be letter A-Z
    var input = /[a-z]/gi; 
        if (!input.test(userChoice)) {
            alert("Please choose a letter!");
        }
        else {
            console.log(userChoice);
        }

    //computer will choose new letter if user loses
    if (guessRemain <= 0) {
        lossCount++;
        document.getElementById("lossCount").innerHTML = lossCount++;
        console.log("You lost!");
        alert("You lost!");
        guessRemain = 10;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        document.getElementById("guessRemain").innerHTML = 10;
        randomLetter = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomLetter];
        console.log(computerChoice);
    }

    //compare computer and user choice
    else if (computerChoice === userChoice) {
        winCount++;
        console.log("You win!");
        alert("You win!");
        document.getElementById("winCount").innerHTML = winCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        randomLetter = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomLetter];
        console.log(computerChoice);
        guessRemain = 10; 
        document.getElementById("guessRemain").innerHTML = 10;
    }
    else {
        console.log("Guess again!");
        document.getElementById("guessRemain").innerHTML = guessRemain--;
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }

    
}