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
    playerChoice = getPlayerChoice()
  }
  // convert choice to title case (capitalize first letter)
  playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  
  return playerChoice;
}

// play 1 round of Rock Paper Scissors & return the result message
function playRound(playerChoice, computerChoice) {
  // decide the result of the game
  let result;
  if (playerChoice === computerChoice) {
    result = "tie";
  }
  else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")) {
    result = "win";
  }
  else {
    result = "lose";
  }

  // return the appropriate result message
  switch(result) {
    case "tie":
      return `It's a Draw! ${playerChoice} ties with ${computerChoice}.`;
      break;
    case "win":
      return `You Win! ${playerChoice} beats ${computerChoice}!`
      break;
    case "lose":
      return `You Lose! ${computerChoice} beats ${playerChoice}!`
  }
}

// play 5 rounds of Rock Paper Scissors, display each round's results & the winner at the end
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
}

game();