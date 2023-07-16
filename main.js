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
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock breaks Scissors!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper covers Rock"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors cuts Paper"
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));