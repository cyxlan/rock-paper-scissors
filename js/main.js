const choiceBtns = document.querySelectorAll(".choice-btn");
const roundResultMsg = document.querySelector("#round-result");
const playerScoreMsg = document.querySelector('#player-score');
const computerScoreMsg = document.querySelector('#computer-score');
const gameResultMsg = document.querySelector("#game-result");

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

// play 1 round of Rock Paper Scissors, display the result message & return the result
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

  // display the appropriate result message & return the result
  switch(result) {
    case "tie":
      roundResultMsg.textContent = `It's a Draw! ${playerChoice} ties with ${computerChoice}.`;
      return result;
      break;
    case "win":
      roundResultMsg.textContent = `You Win! ${playerChoice} beats ${computerChoice}!`;
      return result;
      break;
    case "lose":
      roundResultMsg.textContent = `You Lose! ${computerChoice} beats ${playerChoice}!`;
      return result;
  }
}

let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    let playerChoice = btn.textContent;
    let result = playRound(playerChoice, getComputerChoice())

    // update the scores according to the round result
    switch(result) {
      case "tie":
        playerScore++;
        computerScore++;
        break;
      case "win":
        playerScore++;
        break;
      case "lose":
        computerScore++;
    }
    playerScoreMsg.textContent = `Player: ${playerScore}`;
    computerScoreMsg.textContent = `CPU: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
      if (playerScore === 5) {
        gameResultMsg.textContent = "Player wins!";
      }
      else {
        gameResultMsg.textContent = "CPU wins!";
      }
    }
  })
})