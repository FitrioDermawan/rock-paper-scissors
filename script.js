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
    alert("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You Lose! Paper beats Rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You Win! Rock beats Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You Win! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You Lose! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You Win! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You Lose! Rock beats Scissors");
  } else {
    alert("invalid");
  }
}

// Get round result based on player and computer choice.
function getRoundResult() {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice();

  console.log("Player :" + playerSelection);
  console.log("Computer :" + computerSelection);

  return playRound(playerSelection, computerSelection);
}

// Plays a game with five rounds.
function playGame() {

  // Keeps track of the score
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
}

playGame();
