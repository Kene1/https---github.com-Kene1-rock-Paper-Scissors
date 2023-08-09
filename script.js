let options = ["rock", "paper", "scissors"];
let playerSelectionScore = 0;
let computerSelectionScore = 0;

const computerPlay = () => {
  return options[Math.floor(Math.random() * options.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection) {
    playerSelection = playerSelection.trim().toLowerCase();
    if (options.includes(playerSelection)) {
      if (playerSelection === computerSelection) {
        return "It's a draw! Both played " + playerSelection;
      } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
      ) {
        playerSelectionScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
      } else {
        computerSelectionScore++;
        return (
          "Computer wins! " + computerSelection + " beats " + playerSelection
        );
      }
    } else {
      return "Incorrect entry! Please try again...";
    }
  } else {
    return "See you soon!";
  }
};

const game = () => {
  const shouldPlay = confirm("Do you want to play Rock, Paper, Scissors?");

  if (!shouldPlay) {
    console.log("Maybe next time!");
    return;
  }

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      `Round ${i + 1}: Enter rock, paper, or scissors! (Press Cancel to stop)`
    );

    if (playerSelection === null) {
      console.log("Game stopped.");
      break;
    }

    while (!options.includes(playerSelection.trim().toLowerCase())) {
      console.log("Invalid choice. Please try again...");
      playerSelection = prompt(
        `Round ${i + 1}: Enter rock, paper, or scissors! (Press Cancel to stop)`
      );
      if (playerSelection === null) {
        console.log("Game stopped.");
        break;
      }
    }

    if (playerSelection === null) {
      break;
    }

    const computerSelection = computerPlay();
    console.log(`Round ${i + 1}:`);
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerSelectionScore > computerSelectionScore) {
    console.log(`You won ${playerSelectionScore} times`);
  } else if (playerSelectionScore === computerSelectionScore) {
    console.log("The game ended in a draw.");
  } else {
    console.log(`Computer won ${computerSelectionScore} times`);
  }
};

game();
