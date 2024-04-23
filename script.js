// Add event listener to get round result.
const choices = document.querySelectorAll("#choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice);
  });
});

let playerScore = 0;
let computerScore = 0;

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
function getPlayerChoice(playerChoice) {
  return playerChoice.value;
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
function getRoundResult(choice) {
  let computerSelection = getComputerChoice();
  let playerSelection = getPlayerChoice(choice);

  let result = playRound(playerSelection, computerSelection);

  const player = document.querySelector("#playerSelection")
  player.textContent = `Player: ${playerSelection}`;

  const computer = document.querySelector("#computerSelection");
  computer.textContent = `Computer: ${computerSelection}`;

  const roundResult = document.querySelector("#roundResult");
  roundResult.textContent = result;

  return roundResult.textContent;
}

// Plays a one round game
function playGame(choice) {
  function getScore(choice) {
    let roundResult = getRoundResult(choice);

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
  getScore(choice);
  
  const player = document.querySelector("#playerScore");
  const computer = document.querySelector("#computerScore");

  player.textContent = playerScore;
  computer.textContent = computerScore;

  function getWinner() {
    if (playerScore === 5 && computerScore === 5) {
      return "Game Tied!";
    } else if (playerScore === 5) {
      return "Player Win!";
    } else if (computerScore === 5) {
      return "Computer Win!";
    }
  }

  const winner = getWinner();
  if (winner !== undefined) {
    alert(winner);
  }
}
