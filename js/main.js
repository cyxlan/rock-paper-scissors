const choiceBtns = document.querySelectorAll(".choice-btn");

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
      console.log(`It's a Draw! ${playerChoice} ties with ${computerChoice}.`);
      return result;
      break;
    case "win":
      console.log(`You Win! ${playerChoice} beats ${computerChoice}!`);
      return result;
      break;
    case "lose":
      console.log(`You Lose! ${computerChoice} beats ${playerChoice}!`);
      return result;
  }
}

/*
// play 5 rounds of Rock Paper Scissors, display each round's results & the winner at the end
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // for (let i = 0; i < 5; i++) {
  //   console.log("------------ Round", i+1, "------------");
    let result = playRound(getPlayerChoice(), getComputerChoice());
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
    console.log("Player:", playerScore);
    console.log("CPU:", computerScore);
  // }

  // decide the final winner & display message accordingly
  if (playerScore === computerScore) {
    console.log("Player & CPU tie!")
  }
  else if (playerScore > computerScore) {
    console.log("Player wins!")
  }
  else {
    console.log("CPU wins!")
  }
}

game();
*/