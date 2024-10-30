const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const replayBtn = document.getElementById("replayBtn");

const rockImg = document.getElementById("rockImg");
const paperImg = document.getElementById("paperImg");
const scissorsImg = document.getElementById("scissorsImg");

const playerImgRock = document.getElementById("playerImgRock");
const playerImgPaper = document.getElementById("playerImgPaper");
const playerImgScissors = document.getElementById("playerImgScissors");

const computerImgRock = document.getElementById("computerImgRock");
const computerImgPaper = document.getElementById("computerImgPaper");
const computerImgScissors = document.getElementById("computerImgScissors");

const playerQuestionMark = document.getElementById("pQuestionMark");
const computerQuestionMark = document.getElementById("cQuestionMark");

const rockLink = document.getElementById("rockLink");
const paperLink = document.getElementById("paperLink");
const scissorsLink = document.getElementById("scissorsLink");

const outcomeWin1 = document.getElementById("outcomeWin1");
const outcomeLose1 = document.getElementById("outcomeLose1");
const outcomeTie1 = document.getElementById("outcomeTie1");
const outcome2 = document.getElementById("outcome2")

const playerCounter = document.getElementById("playerCounter");
const computerCounter = document.getElementById("computerCounter");

const endOfGameWindow = document.getElementById("modalBackground");
const result = document.getElementById("result");

let pCounter = 0;
let cCounter = 0;

rockLink.onclick = function() {
    playRound("Rock");
};

paperLink.onclick = function() {
    playRound("Paper");
};

scissorsLink.onclick = function() {
    playRound("Scissors");
};

function playRound(playerChoice) {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomElement = options[randomIndex];

    computerQuestionMark.style.display = "none";
    playerQuestionMark.style.display = "none";
    playerImgRock.style.display = "none";
    playerImgPaper.style.display = "none";
    playerImgScissors.style.display = "none";

    if (playerChoice === "Rock") playerImgRock.style.display = "inline";
    if (playerChoice === "Paper") playerImgPaper.style.display = "inline";
    if (playerChoice === "Scissors") playerImgScissors.style.display = "inline";

    outcomeWin1.textContent = "";
    outcomeLose1.textContent = "";
    outcomeTie1.textContent = "";
    outcome2.textContent = "";

    computerImgRock.style.display = "none";
    computerImgPaper.style.display = "none";
    computerImgScissors.style.display = "none";

    if (playerChoice === randomElement) {
        outcomeTie1.textContent = "It's a tie!";
        outcome2.textContent = `${playerChoice} ties ${randomElement}`;
    } else if (
        (playerChoice === "Rock" && randomElement === "Scissors") ||
        (playerChoice === "Paper" && randomElement === "Rock") ||
        (playerChoice === "Scissors" && randomElement === "Paper")
    ) {
        pCounter++;
        playerCounter.textContent = `PLAYER: ${pCounter}`;
        outcomeWin1.textContent = "You won!";
        outcome2.textContent = `${playerChoice} wins from ${randomElement}`;
    } else {
        cCounter++;
        computerCounter.textContent = `COMPUTER: ${cCounter}`;
        outcomeLose1.textContent = "You lost!";
        outcome2.textContent = `${playerChoice} loses from ${randomElement}`;
    }

    if (randomElement === "Rock") computerImgRock.style.display = "inline";
    if (randomElement === "Paper") computerImgPaper.style.display = "inline";
    if (randomElement === "Scissors") computerImgScissors.style.display = "inline";

    if (pCounter === 5) {
        playerCounter.textContent = `PLAYER: 5`;
        setTimeout(() => {
            endOfGameWindow.style.display = "flex";
<<<<<<< HEAD
            result.textContent = "You won!"
=======
            result.textContent = "You won! 🎉"
>>>>>>> 5bf440b (Simlifying of JS code and adding a play again window)
        }, 500);


    } else if (cCounter === 5) {
        computerCounter.textContent = `COMPUTER: 5`;
        setTimeout(() => {
            endOfGameWindow.style.display = "flex";
            result.textContent = "You lost..."
        }, 500);
    }
}

function resetGame() {
    endOfGameWindow.style.display = "none";
    pCounter = 0;
    cCounter = 0;
    playerCounter.textContent = `PLAYER: ${pCounter}`;
    computerCounter.textContent = `COMPUTER: ${cCounter}`;
    outcomeWin1.textContent = "";
    outcomeLose1.textContent = "";
    outcomeTie1.textContent = "";
    outcome2.textContent = "";
    playerImgRock.style.display = "none";
    playerImgPaper.style.display = "none";
    playerImgScissors.style.display = "none";
    computerImgRock.style.display = "none";
    computerImgPaper.style.display = "none";
    computerImgScissors.style.display = "none";
    playerQuestionMark.style.display = "inline";
    computerQuestionMark.style.display = "inline";
}
