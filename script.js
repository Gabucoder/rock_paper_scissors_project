//function to take computer choice
function getComputerchoice(){
    let choice = Math.floor(Math.random() *3)
    switch (choice) {
        case 0:
            choice = "Rock"
            break;
        case 1:
            choice = "Paper"
            break;
        default:
            choice = "scissors"
    }
    return choice;

}


//function for playing rounds
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()

    if ((humanChoice == "SCISSORS" && computerChoice == "PAPER") 
             || (humanChoice == "PAPER" && computerChoice =="ROCK")
            ||(humanChoice=="ROCK" && computerChoice == "SCISSORS")){
                return "user wins!"
    }else if ((humanChoice == "PAPER" && computerChoice =="SCISSORS")
        || (humanChoice == "SCISSORS" && computerChoice =="ROCK")
        ||(humanChoice == "ROCK" && computerChoice =="PAPER")){
        return "computer wins!"

    }
    else {
       return "it`s a draw!"
    }


}


const rockBtn = document.querySelector(".rockBtn")
const paperBtn = document.querySelector(".paperBtn")
const scissorsBtn = document.querySelector(".scissorsBtn")
const displayResults = document.querySelector(".displayResults")
let roundCount = 0
let maxRound = 5



rockBtn.addEventListener("click", () =>  {

    playerSelection = "rock"
    playGame(playerSelection)
})
    
paperBtn.addEventListener("click", () =>  {
    playerSelection = "paper"
    playGame(playerSelection)
        
})
        
        
scissorsBtn.addEventListener("click", () =>  {
        
    playerSelection = "scissors"
    playGame(playerSelection)
            
})

let humanScore = 0;
let computerScore = 0

function playGame(playerSelection) {
   
   
    if(roundCount < maxRound) {
        const computerSelection = getComputerchoice()
        let results = playRound(playerSelection, computerSelection)
        roundCount++

        if (results === "user wins!") {
            humanScore++
        }else if (results === "computer wins!") {
            computerScore ++
        }

    }
    if(roundCount === maxRound) {
       declareWinner()
       disableBtns()

    }
  
}

function declareWinner() {
    if (humanScore > computerScore){
        displayResults.textContent = "Congratulations you won!"
    }else if(humanScore < computerScore){
        displayResults.textContent = "Computer won!"
    } else{
        displayResults.textContent = "its a draw!"
    }       
    
}


function disableBtns() {
    rockBtn.disabled = true
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}














