let options = ["rock", "paper", "scissors"];
const computerPlay = () => {
  return options[Math.floor(Math.random() * options.length)];
};

const playRound = (playerSelection, computerSelection) => {
  let gameBegin = confirm("let's play Rock, Paper, Scissors!");
  if (gameBegin) {
    playerSelection = prompt("please enter rock, paper or scissors!");

    if (playerSelection) {
      playerSelection = playerSelection.trim().toLowerCase();
      if (
        playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors"
      ) {
        let result =
          playerSelection === computerSelection
            ? `You played: ${playerSelection}, computer played: ${computerSelection}. It's a draw!`
            : playerSelection === "paper" && computerSelection === "rock"
            ? "You win! Paper beats Rock."
            : playerSelection === "scissors" && computerSelection === "paper"
            ? "You win! Scissors beats Paper."
            : playerSelection === "rock" && computerSelection === "scissors"
            ? "You win! Rock beats Scissors!"
            : "You Lose!"; // we need more logic here for when computer wins
        return result;
      } else {
        return "Incorrect entry!";
      }
    } else {
      return "See you soon!";
    }
  } else {
    return "Goodbye!";
  }
};

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); //used console to
// test, we will use return later as per the instructions

// Next we have to create a game() function....
