// GAME
let wins = 0;
let losses = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
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
}

function displayRoundResult(result, playerSelection, computerSelection) {
  let resultMessage = "";
  let playerSelectionFormatted = capitalizeFirstLetter(playerSelection);
  let computerSelectionFormatted = capitalizeFirstLetter(computerSelection);
  switch (result) {
    case "win":
      resultMessage = 
      `You win! ${playerSelectionFormatted} beats ${computerSelectionFormatted}.`
      wins += 1;
      break;
    case "loss":
      resultMessage = 
      `You lose! ${computerSelectionFormatted} beats ${playerSelectionFormatted}.`
      losses += 1;
      break;
    case "tie":
      resultMessage = 
      `It's a tie!`
      break;
  }
  resultsDiv.textContent = resultMessage;
  playerScoreDiv.textContent = `Player score: ${wins}`
  computerScoreDiv.textContent = `Computer score: ${losses}`
  if (wins === 5 || losses === 5) {
    displayFinalResult(wins, losses);
    mainContent.appendChild(restartButton);
    restartButton.setAttribute('id', 'restartButton');
  }
}

function displayFinalResult(wins, losses) {
  if (wins > losses) {
    finalResultDiv.textContent = 'FINAL RESULT: You win!';
  } else if (wins < losses) {
    finalResultDiv.textContent = 'FINAL RESULT: You lose...';
  }
}

function restartGame() {
  wins = 0;
  losses = 0;
  resultsDiv.textContent = "";
  playerScoreDiv.textContent = `Player score: ${wins}`;
  computerScoreDiv.textContent = `Computer score: ${losses}`;
  finalResultDiv.textContent = "";
  mainContent.removeChild(restartButton);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// UI

function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  displayRoundResult(result, playerSelection, computerSelection);
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultsDiv = document.querySelector('.results');
const playerScoreDiv = document.querySelector('.playerScore');
const computerScoreDiv = document.querySelector('.computerScore');
const finalResultDiv = document.querySelector('.finalResult');
const mainContent = document.querySelector('.main-content');
const restartButton = document.createElement('button');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartButton.addEventListener('click', () => restartGame());
restartButton.innerHTML = 'Restart';


