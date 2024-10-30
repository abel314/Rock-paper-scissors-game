const rolled = document.getElementById("rolledElement");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const outcomeWin = document.getElementById("outcomeWin");
const outcomeTie = document.getElementById("outcomeTie");
const outcomeLose = document.getElementById("outcomeLose");
const replayBtn = document.getElementById("replayBtn");
const submitBtn = document.getElementById("submitBtn");
const rockImg = document.getElementById("rockImg");
const paperImg = document.getElementById("paperImg");
const scissorsImg = document.getElementById("scissorsImg");
const rockInTheAirImg = document.getElementById("rock-intheair");
const rocklyingImg = document.getElementById("rock-lying");
const paperlyingImg = document.getElementById("paper-lying");
const scissorslyingImg = document.getElementById("scissors-lying");
const radioBtns = document.getElementById("radioBtns");

function roll(){
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomElement = options[randomIndex];

    function displayComputerChoice(){

        rockInTheAirImg.style.display = "block";

        setTimeout(() => {
            rockInTheAirImg.style.display = "none";
            rocklyingImg.style.display = "block";
        }, 250);

        setTimeout(() => {
            rocklyingImg.style.display = "none";
            setTimeout(() => {
                rockInTheAirImg.style.display = "block";
            }, 100);
        }, 500);

        setTimeout(() => {
            rockInTheAirImg.style.display = "none";
            rocklyingImg.style.display = "block";
        }, 750);

        setTimeout(() => {
            if(randomElement === "Scissors"){
                rocklyingImg.style.display = "none";
                setTimeout(() => {
                    scissorslyingImg.style.display = "block";
                }, 100);
                setTimeout(() => {
                    scissorslyingImg.style.display = "none";
                }, 999);
            }
            else if(randomElement === "Rock"){
                rocklyingImg.style.display = "none";
                setTimeout(() => {
                    rocklyingImg.style.display = "block";
                }, 100);
                setTimeout(() => {
                    rocklyingImg.style.display = "none";
                }, 999);
            }
            else{
                rocklyingImg.style.display = "none";
                setTimeout(() => {
                    paperlyingImg.style.display = "block";
                }, 100);
                setTimeout(() => {
                    paperlyingImg.style.display = "none";
                }, 999);
            }
        }, 1000);
    
        setTimeout(() => {
            rolled.textContent = randomElement;
        }, 1250);
    }

    function playAgain(){
        submitBtn.hidden = true;
        replayBtn.hidden = false;
        replayBtn.textContent = "Play Again";
    }
    function tie(){
        setTimeout(() => {
            outcomeTie.textContent = "TIE!";
            playAgain();
        }, 2000);
    }
    function won(){
        setTimeout(() => {
            outcomeWin.textContent = "YOU WON! 🎉";
            playAgain();
        }, 2000);
    }
    function lost(){
        setTimeout(() => {
            outcomeLose.textContent = "YOU LOST! ☹";
            playAgain();
        }, 2000);
    }


    if(rock.checked){
        displayComputerChoice()
        if(randomElement === "Rock"){
            tie();
        }
        else if(randomElement === "Paper"){
            lost();
        }
        else{
            won()
        }
    }
    else if(paper.checked){
        displayComputerChoice()
        if(randomElement === "Paper"){
            tie();
        }
        else if(randomElement === "Scissors"){
            lost();
        }
        else{
            won()
        }
    }
    else if(scissors.checked){
        displayComputerChoice()
        if(randomElement === "Scissors"){
            tie();
        }
        else if(randomElement === "Rock"){
            lost();
        }
        else{
            won()
        }
    }
    else{
        rolled.textContent = "Please pick your choice"
    }
}
