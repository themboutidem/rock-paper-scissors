const choices_array = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice () {
    let randIndex = Math.floor((Math.random())*2);
    computer_choice=choices_array[randIndex];
    return(computer_choice);
}

let winner=1; //computer wins
function playRound (playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        //Draw, play again
        alert("Draw! Play again!");
        winner = 0; //Draw
    }
    else if ((playerSelection.toLowerCase() === "rock")&&(computerSelection.toLowerCase() === "paper")) {
        // computer wins
        alert("You Lose! Paper beats Rock");
    }
    else if ((playerSelection.toLowerCase() === "paper")&&(computerSelection.toLowerCase() === "rock")) {
        // player wins
        alert("You Win! Paper beats Rock");
        winner = -1;
    }
    else if ((playerSelection.toLowerCase() === "rock")&&(computerSelection.toLowerCase() === "scissors")) {
        // player wins
        alert("You Win! Rock beats Scissors");
        winner = -1;
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
       winner = -1;
    }
}

function game() {
    let computerWin = 0, userWin = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter your Play [Rock,Paper,or Scissors]");
        let round = playRound(userInput,getComputerChoice());
        if (winner === 1){
            computerWin+=1;
        }
        else if (winner === -1) {
            userWin+=1;
        }
    }

    if (computerWin > userWin) {
        alert("You Lose! The Computers Won");
    }
    else if (userWin > computerWin) {
        alert("You Won! You defeated the Computers.");
    }
    else {
        alert("You Drew with the Robots. Play again!");
        game();
    }
}

