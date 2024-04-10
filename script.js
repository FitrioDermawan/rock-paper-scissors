// Getting random choice for computer
function getComputerChoice() { 
    let randomNum = Math.round(Math.random()*100);

    if (randomNum > 32 && randomNum < 66) {
        return "rock";
    } else if (randomNum < 33) {
        return "paper";
    } else {
        return "scissors";
    }
}


// Plays a single round and show result
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else {
        return "You Win! Rock beats Scissors"
    }
}

// Player input the choice and make it case-insensitive
let selection = prompt("Rock, Paper, Scissors?", "");
const playerSelection = selection.toLowerCase();

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))

