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
// prompt user for their choice (repeat until a valid choice is entered), then return it
function getPlayerChoice() {
  let playerChoice = prompt("Enter your choice (Rock, Paper, Scissors): ");

  // convert choice to lowercase for case-insensitive check
  playerChoice = playerChoice.toLowerCase();
  // if user entered an invalid choice, alert them & prompt again
  if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    alert("Invalid choice, try again.")
    getPlayerChoice()
  }
  // convert choice to title case (capitalize first letter)
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  
  return playerChoice;
}

const playerChoice = getPlayerChoice();
console.log("Player choice:", playerChoice);
const computerChoice = getComputerChoice();
console.log("CPU choice:", computerChoice);