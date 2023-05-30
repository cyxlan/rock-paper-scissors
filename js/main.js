// randomly return 1 of "Rock", "Paper", or "Scissors"
function getComputerChoice() {
  // get a random number between 0-3
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "Rock";
  }
  else if (randomNum === 1) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}
console.log("CPU choice:", getComputerChoice());