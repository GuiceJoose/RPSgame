

function computerPlay(){
    let computerHand = Math.floor(Math.random()*3);
    if (computerHand == 1){
        return 'Rock';
    } else if (computerHand == 2){
        return 'Scissors';
    } else {
        return 'Paper';
    }
}


function playRound(playerSelection, computerSelection){
    
    
    if (playerSelection === 'rock'){
        if (computerSelection === 'Rock') {
            return 'It\'s a tie\!'
        } else if (computerSelection === 'Scissors') {
            return 'You win!'
        } else { 
            return 'You lose!';
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'Scissors') {
            return 'It\'s a tie\!'
        } else if (computerSelection === 'Paper') {
            return 'You win!'
        } else { 
            return 'You lose!';
        }
    } 
    if (playerSelection === 'paper'){
        if (computerSelection === 'Paper') {
            return 'It\'s a tie\!'
        } else if (computerSelection === 'Rock') {
            return 'You win!'
        } else { 
            return 'You lose!';
        }
    } else {
        return 'That\'s not rock, paper, or scissors!';
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        computerSelection = computerPlay();
        playerSelection = prompt('Rock, paper, or scissors?','').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) == 'You win!') {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection) == 'You lose!') {
            computerScore++;
        }
        console.log(playerScore, computerScore);
    }
    if (playerScore > computerScore) {
        console.log('You are big winner!')
    } else if (playerScore < computerScore) {
        console.log('You are big loser!')
    } else {
        console.log('The game was a tie')
    }
}
game();