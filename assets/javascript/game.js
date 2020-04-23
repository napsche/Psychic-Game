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
}