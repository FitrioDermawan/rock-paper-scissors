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
const computerSelection = getComputerChoice();

console.log(computerSelection);

// Player input the choice and make it case-insensitive
function getPlayerChoice() {
    let selection = prompt("Rock, Paper, Scissors?", "");
    return selection.toLocaleLowerCase();
}
const playerSelection = getPlayerChoice();

console.log(playerSelection);

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
console.log(playRound(playerSelection, computerSelection))
