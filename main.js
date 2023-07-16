// Function to get the Computer's choice"
function getComputerChoice() {
    const randomChoice = ["rock", "paper", "scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}
console.log("Computer played: " + getComputerChoice());

// Function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock breaks Scissors!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper covers Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors cuts Paper"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! ${computerSelection} covers ${playerSelection}`
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose! ${computerSelection} cuts ${playerSelection}`
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! ${computerSelection} breaks ${playerSelection}`
    } else {
        return `Select one of the options!`
    }
}

const playerSelection = prompt("Rock, Paper or Scissors? Pick One!").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));