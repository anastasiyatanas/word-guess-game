

var wins = 0;
var losses = 0;
var left = 9;
var guess = 0;
var guessesSoFar = [];

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function(event) {
   
    
guessesSoFar.push(event.key)
   left-- 
    var playerChoices = event.key;

    // var playerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    

    if (playerChoices === computerGuess) { 
        wins ++;
        guessesSoFar = [];
        left = 9
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    } 
    if (left == 0) {
        losses ++;
        guessesSoFar = [];
        left = 9
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
  
    var html =
          "<p>You chose: " + playerChoices + "</p>" +
        "<p>Your Guesses  so far: " + guessesSoFar.join(", ") + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + left + "</p>" ;
         

    document.querySelector("#game").innerHTML = html;
  }
 