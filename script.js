const choices_array = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice () {
    let randIndex = Math.floor((Math.random())*2);
    computer_choice=choices_array[randIndex];
    return(computer_choice);
}

var div = document.getElementById('text-box')
var user_score = document.getElementById('user-score');
var comp_score = document.getElementById('iya-score');

let winner=1; //computer wins
let computerWin = 0, userWin = 0;
function playRound (playerSelection,computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        //Draw, play again
        div.innerHTML = "Draw! Play again!";
        winner = 0; //Draw
    }
    else if ((playerSelection.toLowerCase() === "rock")&&(computerSelection.toLowerCase() === "paper")) {
        // computer wins
        div.innerHTML="You Lose! Paper beats Rock";
        winner=1;
    }
    else if ((playerSelection.toLowerCase() === "paper")&&(computerSelection.toLowerCase() === "rock")) {
        // player wins
        div.innerHTML="You Win! Paper beats Rock";
        winner = -1;
    }
    else if ((playerSelection.toLowerCase() === "rock")&&(computerSelection.toLowerCase() === "scissors")) {
        // player wins
        div.innerHTML="You Win! Rock beats Scissors";
        winner = -1;
    }
    else if ((playerSelection.toLowerCase() === "scissors")&&(computerSelection.toLowerCase() === "rock")) {
        // computer wins
        div.innerHTML="You Lose! Rock beats Scissors";
        winner=1;
    }
    else if ((playerSelection.toLowerCase() === "paper")&&(computerSelection.toLowerCase() === "scissors")) {
        // computer wins
        div.innerHTML="You Lose! Scissors beats Paper";
        winner=1;
    }
    else if ((playerSelection.toLowerCase() === "scissors")&&(computerSelection.toLowerCase() === "paper")) {
       // player wins 
       div.innerHTML="You win! Scissors beats Paper";
       winner = -1;
    }

    if (winner === 1){ //Keep Round Winner Count
        computerWin+=1;
        comp_score.innerHTML=''+computerWin;
    }
    else if (winner === -1) {
        userWin+=1;
        user_score.innerHTML=''+userWin;
    }


    if (computerWin >= 5) { //Announce Winner After 5 wins
        div.innerHTML="Iya Tao won. Prepare for a whooping";
        window.confirm('Iya Tao won. Prepare for a whooping');
        if (confirm("Play Again?")) {
            location.reload();
        }
    }
    else if (userWin >= 5) {
        div.innerHTML="You won! You defeated Iya Tao.";
        window.confirm('You won! You defeated Iya Tao.');
        if (confirm("Play Again?")) {
            location.reload();
        }
    }
};

const rock = document.getElementById("rock");
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', function(){
    playRound('rock',getComputerChoice());
});
paper.addEventListener('click', function(){
    playRound('paper',getComputerChoice());
});
scissors.addEventListener('click', function(){
    playRound('scissors',getComputerChoice());
});

