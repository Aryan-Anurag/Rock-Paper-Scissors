let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () => {
    let options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "Game draw, play again";
    msg.style.backgroundColor = "darkblue"
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGames = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompchoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        console.log("it's a tie");
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "scissors"){
                userWin = false
            }
            else{
                userWin = true;
            }
        }
        else{
            if(compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGames(userChoice);
    });
});