const rolled = document.getElementById("rolledElement");

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

const rockLink = document.getElementById("rockLink");
const paperLink = document.getElementById("paperLink");
const scissorsLink = document.getElementById("scissorsLink");

const outcomeWin1 = document.getElementById("outcomeWin1");
const outcomeLose1 = document.getElementById("outcomeLose1");
const outcomeTie1 = document.getElementById("outcomeTie1");
const outcome2 = document.getElementById("outcome2")

const playerCounter = document.getElementById("playerCounter");
const computerCounter = document.getElementById("computerCounter");



let pCounter = 0;
let cCounter = 0;

rockLink.onclick = function(){
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomElement = options[randomIndex];

    playerImgPaper.style.display = "none";
    playerImgScissors.style.display = "none";
    playerImgRock.style.display = "inline";

    outcomeWin1.textContent = "";
    outcomeLose1.textContent = "";
    outcomeTie1.textContent = "";
    outcome2.textContent = "";

    if(randomElement === "Rock"){
        computerImgScissors.style.display = "none";
        computerImgPaper.style.display = "none";
        computerImgRock.style.display = "inline";

        outcomeTie1.textContent = "It's a tie!";
        outcome2.textContent = "Rock ties rock";

    }
    else if(randomElement === "Paper"){
        cCounter++;
        computerCounter.textContent = `COMPUTER: ${cCounter}`

        computerImgScissors.style.display = "none";
        computerImgRock.style.display = "none";
        computerImgPaper.style.display = "inline";

        outcomeLose1.textContent = "You lost!"
        outcome2.textContent = "Rock wins from paper!";
    }
    else{
        pCounter++;
        playerCounter.textContent = `PLAYER: ${pCounter}`

        computerImgPaper.style.display = "none";
        computerImgRock.style.display = "none";
        computerImgScissors.style.display = "inline";

        outcomeWin1.textContent = "You won!";
        outcome2.textContent = "Rock wins from scissors";
    }
}

paperLink.onclick = function(){
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomElement = options[randomIndex];

    playerImgRock.style.display = "none";
    playerImgScissors.style.display = "none";
    playerImgPaper.style.display = "inline";

    outcomeWin1.textContent = "";
    outcomeLose1.textContent = "";
    outcomeTie1.textContent = "";
    outcome2.textContent = "";

    if(randomElement === "Rock"){
        pCounter++;
        playerCounter.textContent = `PLAYER: ${pCounter}`

        computerImgScissors.style.display = "none";
        computerImgPaper.style.display = "none";
        computerImgRock.style.display = "inline";

        outcomeWin1.textContent = "You won!";
        outcome2.textContent = "Paper wins from rock";

    }
    else if(randomElement === "Paper"){
        computerImgScissors.style.display = "none";
        computerImgRock.style.display = "none";
        computerImgPaper.style.display = "inline";

        outcomeTie1.textContent = "It's a tie!"
        outcome2.textContent = "Paper ties paper!";
    }
    else{
        cCounter++;
        computerCounter.textContent = `COMPUTER: ${cCounter}`

        computerImgPaper.style.display = "none";
        computerImgRock.style.display = "none";
        computerImgScissors.style.display = "inline";

        outcomeLose1.textContent = "You lost!";
        outcome2.textContent = "Paper loses from scissors";
    }
}

scissorsLink.onclick = function(){
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomElement = options[randomIndex];

    playerImgRock.style.display = "none";
    playerImgPaper.style.display = "none";
    playerImgScissors.style.display = "inline";

    outcomeWin1.textContent = "";
    outcomeLose1.textContent = "";
    outcomeTie1.textContent = "";
    outcome2.textContent = "";


    if(randomElement === "Rock"){
        cCounter++;
        computerCounter.textContent = `COMPUTER: ${cCounter}`

        computerImgPaper.style.display = "none";
        computerImgScissors.style.display = "none";
        computerImgRock.style.display = "inline";

        outcomeLose1.textContent = "You lost!";
        outcome2.textContent = "Scissors loses from rock";

    }
    else if(randomElement === "Paper"){
        pCounter++;
        playerCounter.textContent = `PLAYER: ${pCounter}`

        computerImgScissors.style.display = "none";
        computerImgRock.style.display = "none";
        computerImgPaper.style.display = "inline";

        outcomeWin1.textContent = "You won!"
        outcome2.textContent = "Scissors wins from paper!";
    }
    else{
        computerImgPaper.style.display = "none";
        computerImgRock.style.display = "none";
        computerImgScissors.style.display = "inline";

        outcomeTie1.textContent = "It's a tie!";
        outcome2.textContent = "Scissors ties scissors";
    }
}