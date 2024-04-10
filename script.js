// Getting random choice for computer
function getComputerChoice() { 
    let randomNum = Math.round(Math.random()*100);

    if (randomNum > 32 && randomNum < 66) {
        return "Rock";
    } else if (randomNum < 33) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


// Plays a single round and show result
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock"
    } else {
        return "You Win! Scissors beats Rock"
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))