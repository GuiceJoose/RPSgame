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

console.log(computerPlay());