function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice
} //Generates random number between 0 and 2 corresponding to rock paper scissors choice

function getPlayerChoice() {
    let userinput = (prompt("Choose your move!")).toLowerCase();

    if (userinput == "rock") {
        console.log("Player: 0");
        return 0;
    }
    else if (userinput == "paper") {
        console.log("Player: 1");
        return 1;
    }
    else if (userinput == "scissors"){
        console.log("Player: 2");
        return 2;
    }
    else {
        console.log("Invalid move!");
        return -1;
    }
}//Converts user's text into numbers between 0 and 2 corresponding to rock paper scissors choice

function playRound(playerSelection, computerSelection) {
    console.log("Computer: " + computerSelection)
    let result = "No contest!";
    if (playerSelection == computerSelection){
        result = "draw";
    }
    else if (playerSelection == -1) {
        result = "Invalid move!";
    }
    else if (
        (playerSelection == 0 && computerSelection == 1) ||
        (playerSelection == 1 && computerSelection == 2) ||
        (playerSelection == 2 && computerSelection == 0)
        ) {
            result = "computer";
        }
    else {
        result = "player"
    }
        
    return result
}

function game() {
    let computer = 0;
    let player = 0;
    for (let i = 0; i < 5; i++) {
        let round = playRound(getPlayerChoice(),getComputerChoice());
        console.log(round);
        while (round == "draw" || round == "No contest!" || round == "Invalid move!") {
            round = playRound(getPlayerChoice(),getComputerChoice())
            console.log(round)
        }
        if (round == "computer")  {
            computer++;
        } //add point to "computer"
        else if (round == "player") {
            player++;
        } //add point to "player"
        else {
            console.log("error case");
        }
        console.log("");
        console.log(computer);
        console.log(player);
        console.log("");

    }
    console.log(computer);
    console.log(player);
}


game();
