const choices_array = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice () {
    let randIndex = Math.floor((Math.random())*2);
    computer_choice=choices_array[randIndex];
    return(computer_choice);
}


function playRound (playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        //Draw, play again
        alert("Draw! Play again!");
    }
    else if ((playerSelection.toLowerCase() === "rock")&&(computerSelection.toLowerCase() === "paper")) {
        // computer wins
        alert("You Lose! Paper beats Rock");
    }
    else if ((playerSelection.toLowerCase() === "paper")&&(computerSelection.toLowerCase() === "rock")) {
        // player wins
        alert("You Win! Paper beats Rock");
    }
    else if ((playerSelection.toLowerCase() === "rock")&&(computerSelection.toLowerCase() === "scissors")) {
        // player wins
        alert("You Win! Rock beats Scissors");
    }
    else if ((playerSelection.toLowerCase() === "scissors")&&(computerSelection.toLowerCase() === "rock")) {
        // computer wins
        alert("You Lose! Rock beats Scissors");
    }
    else if ((playerSelection.toLowerCase() === "paper")&&(computerSelection.toLowerCase() === "scissors")) {
        // computer wins
        alert("You Lose! Scissors beats Paper");
    }
    else if ((playerSelection.toLowerCase() === "scissors")&&(computerSelection.toLowerCase() === "paper")) {
       // player wins 
       alert("You win! Scissors beats Paper");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter your Play [Rock,Paper,or Scissors]");
        console.log(playRound(userInput,getComputerChoice()));
     }
}

