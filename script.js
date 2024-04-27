// Add event listener to get round result.
const choices = document.querySelectorAll("#choice");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    startGame();
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

  const player = document.querySelector("#playerSelection");
  player.textContent = `Player: ${playerSelection}`;

  const computer = document.querySelector("#computerSelection");
  computer.textContent = `Computer: ${computerSelection}`;

  const roundResult = document.querySelector("#roundResult");
  roundResult.textContent = result;

  return roundResult.textContent;
}

// Plays a one round game
function playGame(choice) {
  document.querySelector("#finalResult").style.display = "none";
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
  }
  getScore(choice);

  const player = document.querySelector("#playerScore");
  const computer = document.querySelector("#computerScore");

  player.textContent = playerScore;
  computer.textContent = computerScore;

  function getWinner() {
    const finalResult = document.querySelector("#finalResult");
    if (playerScore === 5 && computerScore === 5) {
      finalResult.textContent = "Game Tied!";
      gameEnd();
    } else if (playerScore === 5) {
      finalResult.textContent = "Player Win!";
      gameEnd();
    } else if (computerScore === 5) {
      finalResult.textContent = "Computer Lose!";
      gameEnd();
    }
  }

  getWinner();

  function gameEnd() {
    document.querySelectorAll("#results div").forEach(function (div) {
      div.style.display = "none";
    });

    document.querySelectorAll("#choices button").forEach(function (button) {
      button.style.display = "none";
    });

    document.querySelector("#finalResult").style.display = "";
    document.querySelector("#playAgain").style.display = "";
  }

  const playAgain = document.querySelector("#playAgain");

  playAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;

    document.querySelectorAll("#score div").forEach(function (div) {
      div.style.display = "none";
    });

    document.querySelectorAll("#score div").forEach(function (div) {
      div.style.display = "none";

      document.querySelectorAll("#choices button").forEach(function (button) {
        button.style.display = "";
      });

      playAgain.style.display = "none";

      document.querySelector("#finalResult").style.display = "none";
    });
  });
}

function startGame() {
  document.querySelectorAll("#results div").forEach(function (div) {
    div.style.display = "";
  });

  document.querySelectorAll("#score div").forEach(function (div) {
    div.style.display = "";
  });
}
