// console.log("Hello World!");
// window.prompt("Enter your choice");
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()* 100)+1;
    if(randomNumber<=33)
    return "rock";
    else if(randomNumber<=66)
    return "paper";
    else
    return "scissors";
}