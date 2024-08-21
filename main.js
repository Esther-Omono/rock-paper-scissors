document.addEventListener("DOMContentLoaded", () => {
    // Players score variable
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    const getComputerChoice = () => {
        const randomChoice = ["rock", "paper", "scissors"];
        return randomChoice[Math.floor(Math.random() * randomChoice.length)];
    };

    // Function to play a single round
    function playRound(theHumanChoice) {
        const theComputerChoice = getComputerChoice();

        let resultMessage = "";

        switch (theHumanChoice) {
            case "rock":
                switch (theComputerChoice) {
                    case "rock":
                        resultMessage = "It's a tie! You both picked Rock!";
                        break;
                    case "paper":
                        computerScore++;
                        resultMessage = "Computer wins! Paper covers Rock!";
                        break;
                    case "scissors":
                        humanScore++;                            resultMessage = "You win! Rock breaks Scissors!";
                        break;
                }
                break;
        
            case "paper":
                switch (theComputerChoice) {
                    case "rock":
                        humanScore++;
                        resultMessage = "You win! Paper covers Rock!";
                        break;
                    case "paper":
                        resultMessage = "It's a tie! You both picked paper!";
                        break;
                    case "scissors":
                        computerScore++;
                        resultMessage = "Computer wins! Scissors cuts paper!";
                        break;
                }
                break;

            case "scissors":
                switch (theComputerChoice) {
                    case "rock":
                        computerScore++;
                        resultMessage = "Computer wins! Rock breaks Scissors!";
                        break;
                    case "paper":
                        humanScore++;
                        resultMessage = "You win! Scissors cuts Paper!";
                        break;
                    case "scissors":
                        resultMessage = "It's a tie! You both picked scissors!";
                        break;
                }
                break;

            default:
                //return "Invalid choice!";
                resultMessage = "Invalid choice. Please choose 'rock', 'paper', or 'scissors'.";
        }

        // Update the result message in the DOM
        document.getElementById("round-result").textContent = resultMessage;
        document.getElementById("score").textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;

        // Check if a player has reached 5 points
        if (humanScore === 5 || computerScore === 5) {
            const winnerMessage = humanScore === 5 ?    "Congratulations! You won the game!" : "Computer wins the game! Better luck next time.";
            document.getElementById("winner").textContent = winnerMessage;

            // Disable buttons after the game ends
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;

            // Show the restart button
            document.getElementById("restart").classList.remove("hidden");
            document.getElementById("restart").style.display = "inline";
        }
    };

    // Event listeners for button clicks
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

    // Event listeners for button clicks
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

    // Restart game event listener
    document.getElementById("restart").addEventListener("click", () => {
        // Reset scores
        humanScore = 0;
        computerScore = 0;

        // Reset the game UI
        document.getElementById("round-result").textContent = "";
        document.getElementById("score").textContent = "Score - Human: 0, Computer: 0";
        document.getElementById("winner").textContent = "";

        // Enable buttons
        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;

        // Hide the restart button
        document.getElementById("restart").style.display = "none";
    });
});
