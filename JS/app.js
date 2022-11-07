// console.log("Hello World!");
// window.prompt("Enter your choice");
let computerSelection, playerSelection,playerScore=0,computerScore=0;
function getComputerChoice(){
    computerSelection=Math.floor(Math.random()* 100)+1;
    if(computerSelection<=33)
    return ("rock") ;
    else if(computerSelection<=66)
    return ("paper") ;
    else
    return ("scissors") ;
}
// getPlayerChoice();
// getComputerChoice();
function playRound(){
    while(playerScore<5&& computerScore<5){
        computerSelection=getComputerChoice();
        playerSelection=getPlayerChoice();
        if((playerSelection==="rock"&&computerSelection==="scissors")|| (playerSelection==="paper"&&computerSelection==="rock")|| (playerSelection==="scissors"&&computerSelection==="paper")){
            playerScore++;
            console.log("Your score = "+playerScore);
        }
        else if((computerSelection==="rock"&&playerSelection==="scissors")|| (computerSelection==="paper"&&playerSelection==="rock")|| (computerSelection==="scissors"&&playerSelection==="paper")){
            computerScore++;
            console.log("Computer score = "+computerScore);

        }
    }
}
function displayWinner(){
    if(playerScore==5)
    console.log("You won");
    else
    console.log("Computer won");
}
function getPlayerChoice(){
    playerSelection=prompt("Enter rock,paper or scissors");
    playerSelection=playerSelection.trim();
    return (playerSelection.toLowerCase()) ;
}

playRound();
displayWinner();