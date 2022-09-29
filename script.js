function getComputerChoice() {
  randomNumber = Math.random();
  let computerSelection = "";
  if((randomNumber >= 0) && (randomNumber < 1/3)) {
    computerSelection = "rock";
  } else if ((randomNumber >= 1/3) && (randomNumber < 2/3)) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "rock") {
        result = "tie";
      } else if (computerSelection === "paper") {
        result = "loss";
      } else if (computerSelection === "scissors") {
        result = "win";
      }
      break;
    case "paper":
      if (computerSelection === "rock") {
        result = "win";
      } else if (computerSelection === "paper") {
        result = "tie";
      } else if (computerSelection === "scissors") {
        result = "loss";
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        result = "loss";
      } else if (computerSelection === "paper") {
        result = "win";
      } else if (computerSelection === "scissors") {
        result = "tie";
      }
      break;
  }
  let playerSelectionFormatted = capitalizeFirstLetter(playerSelection);
  let computerSelectionFormatted = capitalizeFirstLetter(computerSelection);
  switch (result) {
    case "win":
      return `You win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}.`
      break;
    case "loss":
      return `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}.`
      break;
    case "tie":
      return `It's a tie! ${playerSelectionFormatted} and ${computerSelectionFormatted} are the same.`
      break;
  }
}

function capitalizeFirstLetter(string) {
  lowerString = string.toLowerCase();
  return lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));