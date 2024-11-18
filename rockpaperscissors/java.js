function getComputerChoice() {
  let i = Math.random();
  if (i < 0.33) {
    return 'rock';
  } else if (i < 0.66) {
    return ' paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  let option = ' ';
  option = prompt('Enter choice (rock, paper, or scissors):');
  if (option !== 'rock' && option !== 'paper' && option !== 'scissors') {
    alert('You can only choose rock/paper/scissors');
    return;
  } else {
    return option.toLowerCase();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();
  if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}. Score: ${humanScore} vs ${computerScore}`;
  } else if (humanChoice === computerChoice) {
    return `It's a tie! You both chose ${humanChoice}. Score: ${humanScore} vs ${computerScore}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}. Score: ${humanScore} vs ${computerScore}`;
  }
}

function playGame() {
  
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();

  if (humanScore > computerScore) {
    console.log('Congratulations! You won the game!');
  } else if (humanScore < computerScore) {
    console.log('The computer wins the game. Better luck next time!');
  } else {
    console.log("It's a tie!");
  }
  console.log(`${humanScore} vs ${computerScore}`);
}

playGame();