// Function to get the Computer's choice"

function getComputerChoice() {
    const randomChoice = (Math.floor(Math.random() * 3) + 1);
    if (randomChoice === 1) {
        return "Rock"
    } else if (randomChoice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
console.log("Computer played: " + getComputerChoice());

// Function to get the User's choice
const getUserChoice = (userInput) => {
    userInput = prompt();
    if (userInput.toLowerCase() === "rock" ) {
      return userInput;
    } else if (userInput.toLowerCase() === "paper") {
      return userInput;
    } else if (userInput.toLowerCase() === "scissors") {
      return userInput;
    } else {
      alert("Invalid Option!!!");
    }
  }
  console.log("User played: " + getUserChoice())