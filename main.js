// Function to get computer's choice
const getComputerChoice = () => {
    const randomChoice = ["rock", "paper", "scissors"];
    console.log(randomChoice[Math.floor(Math.random() * randomChoice.length)]);
}

getComputerChoice();

// Function to get human's choice
const getHumanChoice = () => {
    let humanChoice = prompt("Pick one: rock, paper, scissors");
    console.log(humanChoice);
}

getHumanChoice();