// Function to get the Computer's choice"
function getComputerChoice() {
    const randomChoice = ["rock", "paper", "scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}
console.log("Computer played: " + getComputerChoice());