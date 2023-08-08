let options = ["rock", "paper", "scissors"];
let playerSelectionScore = 0;
let computerSelectionScore = 0;
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    let gameBegin = confirm("Let's play Rock, Paper or Scissors")
    
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


// console.log(playRound(playerSelection, computerSelection));

function game() {
    // const computerSelection = computerPlay();
    let gameBegin = confirm("Let's play Rock, Paper or Scissors")

    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock";
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerSelectionScore > computerSelectionScore) {
        console.log(`You win ${playerSelectionScore} times`)
    } else {
        console.log(`Computer wins ${computerSelectionScore} times`)
    }
}
game();