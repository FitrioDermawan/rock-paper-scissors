// Add event listener to get round result.
const choices = document.querySelectorAll("#choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    getRoundResult(choice);
  });
});

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

  const results = document.querySelector("#results")

  const player = document.createElement("div");
  player.classList.add("selection");
  player.textContent = `Player: ${playerSelection}`; 

  results.appendChild(player);

  const computer = document.createElement("div");
  computer.classList.add("selection");
  computer.textContent = `Computer: ${computerSelection}`;

  results.appendChild(computer);

  const roundResult = document.createElement("div");
  roundResult.classList.add("roundResult");
  roundResult.textContent = result;

  results.append(roundResult);
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

// playGame();
