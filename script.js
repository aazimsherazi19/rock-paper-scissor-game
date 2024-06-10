let compScore = 0;
let userScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let msgBox = document.querySelector(".msg-container");
let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#comp_score");

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
        
    })
});

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const rndm = Math.floor(Math.random() * 3);
    return options[rndm];
}

const gameDraw = () =>{
    console.log("game is drawn")
    msg.innerText = "Oops! Game is Drawn";
    msg.style.backgroundColor = "blue"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
       msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
       userScore = userScore + 1;
       userScorePara.innerText = userScore;
       console.log(`You Win!.Your ${userChoice} beats ${compChoice}`);
    } else {
        msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red" ;
        compScore = compScore + 1;
        compScorePara.innerText = compScore; 
        console.log(`You lost!.${compChoice} beats Your ${userChoice}`)
    }
}


const  playGame = (userChoice) =>{
     let compChoice = genCompChoice();
     console.log(userChoice , "= user choice");
     console.log(compChoice , "= comp choice");
     
    if(userChoice === compChoice){
        gameDraw();
    } else {
     let userWin = true;
    if(userChoice === "rock"){
       userWin = compChoice === "paper" ? false : true;
    } 
     else if(userChoice === "paper"){
        userWin = compChoice === "scissor" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
} 
}

