let options = ["rock", "paper", "scissors"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
};

function playRound(playerSelection, computerSelection) {
  let gameBegin = confirm("Let's play Rock, Paper, Scissors!");
  if (gameBegin) {
    playerSelection = prompt("Please enter rock, paper or scissors!");

    if (playerSelection === computerSelection) {
      return playerSelection = prompt("It's a tie!");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return playerSelection = prompt("Cingrats! You win! Let's play next round. :) ");
    } else {
      return playerSelection = prompt("You lose! Try again :) ");
    }
};
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); //used console to
// test, we will use return later as per the instructions

// Next we have to create a game() function.... and add a loop
function game() {
  for (let i = 0; i < 5; i++) {
    //
  }
};
