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
    let option = prompt("Enter choice:");
    if (option !== "rock" && option !== "paper" && option !== "scissors") {
       alert ("You can only choose rock/paper/scissors")
       return;
    } else {
   return option;
}
}

const humanScore =