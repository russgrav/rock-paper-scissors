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
  switch (result) {
    case "win":
      return "win";
      break;
    case "loss":
      return "loss";
      break;
    case "tie":
      return "tie";
      break;
  }
}

function capitalizeFirstLetter(string) {
  lowerString = string.toLowerCase();
  return lowerString.charAt(0).toUpperCase() + lowerString.slice(1);
}

function game() {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = getComputerChoice();
    gameResult = playRound(playerSelection, computerSelection);
    let resultMessage = "";
    let playerSelectionFormatted = capitalizeFirstLetter(playerSelection);
    let computerSelectionFormatted = capitalizeFirstLetter(computerSelection);
    switch (gameResult) {
      case "win":
        resultMessage = `You win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}.`
        wins += 1;
        break;
      case "loss":
        resultMessage = `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}.`
        losses += 1;
        break;
      case "tie":
        resultMessage = `It's a tie! ${playerSelectionFormatted} and ${computerSelectionFormatted} are the same.`
        ties += 1;
        break;
    }
    console.log(resultMessage);
  }
  if (wins > losses) {
    console.log(`FINAL RESULT: You win, ${wins} to ${losses}.`)
  } else if (wins === losses) {
    console.log(`FINAL RESULT: It's a tie, ${wins} to ${losses}.`)
  } else if (wins < losses) {
    console.log(`FINAL RESULT: You lose, ${wins} to ${losses}.`)
  }
}

game();


