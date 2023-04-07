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

function playRound(playerSelection, computerSelection) {
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

function game() {
    var playerScore = 0;
    var computerScore = 0;
    var round = 1;

    while (round <= 5) {
        console.log("Round: " + round + "/5");
        var playerSelection = prompt("Enter an option (rock, paper, or scissors):")
        var computerSelection = getComputerChoice();
        var result = playRound(playerSelection, computerSelection);

        switch (result) {
            case "Win":
                playerScore++;
                console.log("You won!");
                break;
            case "Lose":
                computerScore++;
                console.log("You lost.");
                break;
            case "Draw":
                console.log("Draw!");
                break;
        }
        console.log("You selected " + playerSelection);
        console.log("Computer selected " + computerSelection);
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        console.log("");
        round++;
    }

    console.log("Game Over.");
    if (playerScore === computerScore) {
        console.log("It was a draw!")
    }
    else if (playerScore > computerScore) {
        console.log("You win!!!");
    }
    else {
        console.log("You lose.");
    }
}

game();