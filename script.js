let playerscore = 0;
let computerscore = 0;
let htmlresult = document.querySelector(".result");
let htmlpscore = document.querySelector(".playerscore");
let htmlcscore = document.querySelector(".computerscore");
let gameover = document.querySelector(".gameover");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choice
} //Generates random number between 0 and 2 corresponding to rock paper scissors choice

function playRound(playerSelection, computerSelection) {

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
            result = "computer wins";
            computerscore++;
        }
    else {
        result = "player wins";
        playerscore++;
    }

    htmlresult.textContent = result;
    htmlpscore.textContent = playerscore;
    htmlcscore.textContent = computerscore;

    tally();
    return result;
}

function tally() {
    if (computerscore == 5) {
        gameover.textContent = "GAME OVER! COMPUTER WINS!";
        computerscore = 0;
        playerscore = 0;
    }
    else if (playerscore == 5) {
        gameover.textContent = "GAME OVER! PLAYER WINS!";
        computerscore = 0;
        playerscore = 0;
    }
    else {
        gameover.textContent = "";
    }
}
    
function play() {
    let buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach(key => key.addEventListener("mousedown", (e) => {
        playRound(e.target.id, getComputerChoice()) //e.target.id refers to player's choice
    }))
    }//Listens for click on rock, paper or scissors, returning 0, 1, or 2, respectively


play()
// game();


