function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}  

function getComputerChoice() {
    var ChoiceInt = getRandomIntInclusive(1, 3);
    var choiceString = "";
    switch(ChoiceInt) {
        case 1:
            choiceString = "Rock";
            break;
        case 2:
            choiceString = "Paper";
            break;
        case 3:
            choiceString = "Scissors";
            break;
        default:
            choiceString = "Rock";
    }
    return choiceString;
}

function determineWinner(playerSelection, computerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase();

    var result = "Draw";

    switch(playerSelectionLower) {
        case "rock":
            switch(computerSelectionLower) {
                case "rock":
                    result = "Draw";
                    break;
                case "paper":
                    result = "Lose";
                    break;
                case "scissors":
                    result = "Win";
                    break;
            }
            break;
        
        case "paper":
            switch(computerSelectionLower) {
                case "rock":
                    result = "Win";
                    break;
                case "paper":
                    result = "Draw";
                    break;
                case "scissors":
                    result = "Lose";
                    break;
            }
            break;
        
        case "scissors":
            switch(computerSelectionLower) {
                case "rock":
                    result = "Lose";
                    break;
                case "paper":
                    result = "Win";
                    break;
                case "scissors":
                    result = "Draw";
                    break;
            }
            break;
        
        default:
            result = "Please select a valid option"
    }

    return result;
}

function playRound(e) {
    round++;
    var playerSelection = e.target.innerHTML.toLowerCase();
    var computerSelection = getComputerChoice();
    var result = determineWinner(playerSelection, computerSelection);

    if (result === "Win") {
        playerScore++;
    }
    else if (result === "Lose") {
        computerScore++;
    }

    updateScores();

    if (round > 5) {
        console.log("Game over");
        endGame();
    }
}

function updateScores() {
    playerScoreElement.innerHTML = "You: " + playerScore;
    computerScoreElement.innerHTML = "Computer: " + computerScore;
    roundNumber.innerHTML = "Round " + round;
}

function endGame() {
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;

    var resultMessage = "";
    if (playerScore > computerScore) {
        resultMessage = "You win!";
    }
    else if (playerScore === computerScore) {
        resultMessage = "It's a tie!";
    }
    else {
        resultMessage = "You lose.";
    }

    roundNumber.innerHTML = resultMessage;
    buttonReset.disabled = false;
}

function resetGame() {
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
    buttonReset.disabled = true;
    round = 1;
    playerScore = 0;
    computerScore = 0;
    updateScores();
}

// var round = 1;
// var playerScore = 0;
// var computerScore = 0;

const playerScoreElement = document.getElementById("score-player");
const computerScoreElement = document.getElementById("score-computer");

const roundNumber = document.getElementById("round-number");
const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");
const buttonReset = document.getElementById("button-reset");

buttonRock.addEventListener("mouseup", playRound);
buttonPaper.addEventListener("mouseup", playRound);
buttonScissors.addEventListener("mouseup", playRound);
buttonReset.addEventListener("mouseup", resetGame);

resetGame();