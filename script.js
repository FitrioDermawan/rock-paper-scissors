function getComputerChoice() {
    let choice;
    
    let randomNum = Math.round(Math.random()*100)+1;
    console.log(randomNum);

    if (randomNum > 30 && randomNum < 60) {
        choice = "Rock";
    } else if (randomNum < 30) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    console.log(choice);
}

getComputerChoice();