let options = ["rock", "paper", "scissors"];

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
                    return ("It's a draw! Both played " + playerSelection);
                }else if (playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "rock" && computerSelection === "scissors") {
                    return ("You win! " + playerSelection + " beats " + computerSelection );
                }else {
                    return ("Computer wins! " + computerSelection + " beats " + playerSelection);
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

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let playerSelectionScore = 0;
    let computerSelectionScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);

        // if ()
    }
}