// Getting random choice for computer.
function getComputerChoice() {
  let randomNum = Math.round(Math.random() * 100);

  if (randomNum > 32 && randomNum < 66) {
    return "rock";
  } else if (randomNum < 33) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Player input the choice and make it case-insensitive.
function getPlayerChoice() {
  let selection = prompt("Rock, Paper, Scissors?", "");
  return selection.toLocaleLowerCase();
}

// Plays a single round and show result.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else {
    return "invalid";
  }
}

// Get round result based on player and computer choice.
function getRoundResult() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();

  console.log("Player :" + playerSelection);
  console.log("Computer :" + computerSelection);

  alert(playRound(playerSelection, computerSelection));
}

// Plays a game with five rounds.
function playGame() {

  // Keep track of the score
  let playerScore = 0;
  let computerScore = 0;

  function getScore() {
    let roundResult = getRoundResult();
    
    if (roundResult === "It's a tie!") {
      playerScore;
      computerScore;
    } else if (
      roundResult === "You Win! Rock beats Scissors" ||
      roundResult === "You Win! Paper beats Rock" ||
      roundResult === "You Win! Scissors beats Paper"
    ) {
      playerScore++;
    } else {
      computerScore++;
    }

    let score = "Score: " + playerScore + " " + computerScore;

    console.log(score);
  }
  getScore();
  getScore();
  getScore();
  getScore();
  getScore();

  // Get the winner from the five round game.
  function getWinner() {
    if (playerScore === computerScore) {
      return "Game Tied!";
    } else if (playerScore > computerScore) {
      return "Player Win!";
    } else {
      return "Computer Win!";
    }
  }

  alert(getWinner());

}

playGame();
