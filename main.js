
    // Players score variable
    let humanScore = 0;
    let computerScore = 0;

    // Function to get human's choice
    const getHumanChoice = () => {
        let humanChoice = prompt("Pick one: rock, paper, scissors");
        console.log(`Player Choice: ${humanChoice}`);
        return humanChoice;
    }

    // Function to get computer's choice
    const getComputerChoice = () => {
        const randomChoice = ["rock", "paper", "scissors"];
        const computerChoice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
        console.log(`Computer Choice: ${computerChoice}`);
        return computerChoice;
    }

    // Function to play a single round
    function playRound(theHumanChoice, theComputerChoice) {
        // Convert both choices to lowercase for case-insensitivity
        theHumanChoice = theHumanChoice.toLowerCase();
        theComputerChoice = theComputerChoice.toLowerCase();

        switch (theHumanChoice) {
            case "rock":
                switch (theComputerChoice) {
                    case "rock":
                        console.log("It's a tie! You both picked Rock!");
                        break;
                    case "paper":
                        computerScore++;
                        console.log("Computer wins! Paper covers Rock!");
                        break;
                    case "scissors":
                        humanScore++;
                        console.log("You win! Rock breaks Scissors!");
                        break;
                }
                break;
        
            case "paper":
                switch (theComputerChoice) {
                    case "rock":
                        humanScore++;
                        console.log("You win! Paper covers Rock!");
                        break;
                    case "paper":
                        console.log("It's a tie! You both picked paper!");
                        break;
                    case "scissors":
                        computerScore++;
                        console.log("Computer wins! Scissors cuts paper!");
                        break;
                }
                break;

            case "scissors":
                switch (theComputerChoice) {
                    case "rock":
                        computerScore++;
                        console.log("Computer wins! Rock breaks Scissors!");
                        break;
                    case "paper":
                        humanScore++;
                        console.log("You win! Scissors cuts Paper!");
                        break;
                    case "scissors":
                        console.log("It's a tie! You both picked scissors!");
                        break;
                }
                break;

            default:
                //return "Invalid choice!";
                console.log("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
        }

        // Log the updated scores
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);

    };




const theHumanChoice = getHumanChoice();
const theComputerChoice = getComputerChoice();

playRound(theHumanChoice, theComputerChoice);