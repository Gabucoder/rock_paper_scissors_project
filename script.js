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


//function to take user choice
function getHumanChoice(){
    let user_choice = prompt("Type your selection: rock, paper or scissors")
   
    return user_choice

}




//function for playing rounds
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase()
    computerChoice = computerChoice.toUpperCase()
    console.log(computerChoice)

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

//function to play game
function playGame(){
    //intializing the scores
    let humanScore = 0 
    let computerScore = 0

    for (let round = 1; round <=5; round++) {

        const humanSelection = getHumanChoice()
        const computerSelection = getComputerchoice()
        const results = playRound(humanSelection, computerSelection)
        
        if (results === "user wins!"){
            humanScore++
        } else if (results==="computer wins!"){
            computerScore ++
        }

    }
    if (humanScore > computerScore){
        console.log("Congratulations you won!")
    }else if(humanScore<computerScore){
        console.log("computer won!")
    } else{
        console.log("its a draw!")
    }
    
}
playGame()





 // switch (user_choice){
    //     case 1:
    //         user_choice ="Rock";
    //         break;
    //     case 2:
    //         user_choice = "Paper"
    //         break;
    //     default:
    //         user_choice ="Scissors"
    // }