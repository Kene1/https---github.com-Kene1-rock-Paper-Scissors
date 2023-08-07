let gameBegin = confirm("Let's play Rock, Paper, Scissors!");
if (gameBegin) {
	prompt("Please enter rock, paper or scissors!");
}
function computerPlay() {
	// Generate a random number between 0 and 2 (inclusive)
	const randomNumber = Math.floor(Math.random() * 3);
  
	// Map the random number to 'Rock', 'Paper', or 'Scissors'
	switch (randomNumber) {
	  case 0:
		return 'Rock';
	  case 1:
		return 'Paper';
	  case 2:
		return 'Scissors';
	  default:
	}
}

function playRound(playerSelection, computerSelection) {

	playerSelection = playerSelection.toLowerCase()
	computerSelection = computerSelection.toLowerCase()

		// Check for a tie
		if (playerSelection === computerSelection) {
			return prompt("It's a tie!");
		}
  
		// Check for the winner based on player's choice
		switch (playerSelection) {
			case "rock":
				return prompt(computerSelection === "scissors" ? "You win! Rock beats Scissors." : "You lose! Paper beats Rock. Try again.");
			case "paper":
				return prompt(computerSelection === "rock" ? "You win! Paper beats Rock." : "You lose! Scissors beats Paper. Try again.");
			case "scissors":
				return prompt(computerSelection === "paper" ? "You win! Scissors beats Paper." : "You lose! Rock beats Scissors. Try again.");
			default:
				return prompt("Nice try :). Please choose 'Rock', 'Paper', or 'Scissors'.");
		}
	}
	function game() {
		for (let playerScore = 0; playerScore < 50; playerScore++) {
			const playerSelection = "rock";
			const computerSelection = computerPlay();
			const result = playRound(playerSelection, computerSelection);

			if (result === "You win!") {
				playerScore++;
			  } else if (result === "You lose!") {
				return prompt("You lost! Try again :). ");
			}
		}
	  };
game();


