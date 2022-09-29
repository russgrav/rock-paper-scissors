function getComputerChoice() {
  randomNumber = Math.random();
  if((randomNumber >= 0) && (randomNumber < 1/3)) {
    computerChoice = "Rock";
  } else if ((randomNumber >= 1/3) && (randomNumber < 2/3)) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

getComputerChoice();
console.log(computerChoice);