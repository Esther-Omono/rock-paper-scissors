// Declaring score variables for player and computer
let playerScore = 0;
let compScore = 0;

// Function to get the Computer's choice
const getComputerChoice = () => {
    const randomChoice = ["rock", "paper", "scissors"];
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

// Function that plays a single round of the game
const playRound = (playerSelection, computerSelection) => {
    console.log('1', playerSelection, '2', computerSelection)
    if (playerSelection === computerSelection) {
        return `It's a Tie! You both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock breaks Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper covers Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors cuts Paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        return `You lose! ${computerSelection} covers ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        return `You lose! ${computerSelection} cuts ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        return `You lose! ${computerSelection} breaks ${playerSelection}`;
    } else {
        return "Select one of the options!";
    }
}

/*
Function that plays 5 rounds of the game and keeps scores to 
report a winner or loser at the end
*/
const game = () => {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors? Pick One!").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > compScore) {
        return "You beat the computer! Hurray!";
    } else if (playerScore < compScore) {
        return "Arrgh, You lost to the computer! Sad!";
    } else {
        return "You tied with the computer!";
    }
}

console.log(game());
