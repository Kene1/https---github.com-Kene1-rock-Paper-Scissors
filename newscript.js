let options = ["rock", "paper", "scissors"];
let playerSelectionScore = 0;
let computerSelectionScore = 0;
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

let gameBegin = confirm("Let's play Rock, Paper or Scissors")

function playRound(playerSelection, computerSelection) {
    
    if (gameBegin) {
        playerSelection = prompt("Please enter rock, paper or scissors!");

        if (playerSelection) {
            playerSelection = playerSelection.trim().toLowerCase();

            if (
                playerSelection === "rock" ||
                playerSelection === "paper" ||
                playerSelection === "scissors"
              ) {
                
                if (playerSelection === computerSelection) {
                    alert("It's a draw! Both played " + playerSelection);
                }else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "scissors") {
                    playerSelectionScore++;
                    alert("You win! " + playerSelection + " beats " + computerSelection );
                }else {
                    computerSelectionScore++;
                    alert("Computer wins! " + computerSelection + " beats " + playerSelection);
                }
              }else {
                return "Incorrect entry!, Please try again...";
              }
        }else {
            return "See You Soon!"
        }
    }else {
        return "Goodbye!"
    }
} 


function game() {

    const playerSelection = "rock";
    const computerSelection = computerPlay();
    for (let i = 0; i < 5; i++) {
         playRound(playerSelection, computerSelection);
    }
    if (playerSelectionScore > computerSelectionScore) {
        console.log(`You win ${playerSelectionScore} times`)
    } else {
        console.log(`Computer wins ${computerSelectionScore} times`)
    }
}
game();