var userChoice = prompt("Hi June, I want to play a game with you. Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

var compare = function(userChoice, computerChoice){
    if (choice1===choice2){
        return "The result is a tie!";
    }
    
    if (choice1==="rock"){
        if (choice2==="scissors")
            return "rock wins";
        else
            return "paper wins";
    }
    if (choice1==="paper"){
        if (choice2==="rock")
            return "paper wins";
        else
            return "scissors wins";
    }
     if (choice1==="sissors"){
        if (choice2==="rock")
            return "rock wins";
        else
            return "scissors wins";
    }
}

console.log("Computer: " + computerChoice);
