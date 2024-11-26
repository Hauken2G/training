// Function to generate the computer choice
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

  let humanScore = 0;
  let computerScore = 0;
// Function to determine who won and assign point
  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundResult = "";
    if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      roundResult = `You win! ${humanChoice} beats ${computerChoice}. Score: ${humanScore} vs ${computerScore}`;
    } else if (humanChoice === computerChoice) {
        roundResult = `It's a tie! You both chose ${humanChoice}. Score: ${humanScore} vs ${computerScore}`;
    } else {
      computerScore++;
      roundResult = `You lose! ${computerChoice} beats ${humanChoice}. Score: ${humanScore} vs ${computerScore}`;
    }
    updateResults(roundResult);
    checkGameOver();
  }
  // Function to update results in the DOM
    function updateResults(roundResult) {
    const roundResultDiv = document.getElementById('round-result');
    const scoreDiv = document.getElementById('score');

    roundResultDiv.textContent = roundResult;
    scoreDiv.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
}

  // Function to check if the game is over
function checkGameOver() {
    const gameResultDiv = document.getElementById('game-result');
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            gameResultDiv.textContent = 'Congratulations! You won the game!';
        } else {
            gameResultDiv.textContent = 'The computer wins the game. Better luck next time!';
        }
        // Reset scores
        humanScore = 0;
        computerScore = 0;
    }
}
  // 3 buttons for rock paper scissors
  let rock = document.querySelector('#rock');
  let paper = document.querySelector('#paper');
  let scissors = document.querySelector('#scissors');
 
  // Event listeners for buttons
rock.addEventListener('click', () => {
    const result = playRound('rock');
    console.log(result);
    checkGameOver();
});

paper.addEventListener('click', () => {
    const result = playRound('paper');
    console.log(result);
    checkGameOver();
});

scissors.addEventListener('click', () => {
    const result = playRound('scissors');
    console.log(result);
    checkGameOver();
});