function getComputerChoice() {
  let i = Math.random();
  if (i < 0.33) {
    return "rock";
  } else if (i < 0.66) {
    return "paper";
  } else {
      return "scissors";
  }
}
console.log(getComputerChoice());

function getHumanChoice () {
  let option = prompt("Enter choice (rock, paper, or scissors):").toLowerCase(); 
  if (option !== "rock" && option !== "paper" && option !== "scissors") {
     alert ("You can only choose rock/paper/scissors")
     return null;
  } else {
 return option;
}
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice) {
humanChoice = getComputerChoice()
computerChoice = getHumanChoice()
if (getHumanChoice() === "rock" && getComputerChoice() === "paper" || 
    getHumanChoice() === "paper" && getComputerChoice() === "rock" ||
    getHumanChoice() === "scissors" && getComputerChoice() === "paper") {
humanScore++;
return `You win! ${humanChoice} beats ${computerChoice}. Score: ${humanScore} vs ${computerScore}`;
} else if (humanChoice === computerChoice) {
  return `It's a tie! You both chose ${humanChoice}. Score: ${humanScore} vs ${computerScore}`;
} else {
  computerScore++;
  return `You lose! ${computerChoice} beats ${humanChoice}. Score: ${humanScore} vs ${computerScore}`;
}
}
console.log(playRound());

function playGame(playRound, humanScore, computerScore) {
  for (let i = 1; i <= 5; i++) 
    { 
}
}
