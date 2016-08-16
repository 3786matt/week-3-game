
	
var alphabet=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userChoice;

var wins = 0;

var losses = 0;

var left = 10;

var soFar = [];



function user() {

	userChoice = document.getElementById("userInput").value;
	
	soFar.push(userChoice);
    document.getElementById("p").innerHTML = soFar;
	
	var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(compChoice);
    
    if(compChoice == userChoice) {
		wins = wins+1;
		var w = document.getElementById("win");
		w.innerHTML = "Wins:" + wins;
		
	}

	else if(userChoice !== compChoice) {
		left = left-1;
		var l = document.getElementById("left");
		l.innerHTML = "Guesses left: " + left;
		
	}
		console.log(left);

	if(left==0) {
		losses = losses + 1;
		var lo = document.getElementById("loss");
		lo.innerHTML = "Losses:" + losses;
		left = 10;
		
		console.log(compChoice)
	}
}

