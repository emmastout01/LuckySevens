function playGame() {
    // Get starting bet from user input
    var startingBet = document.forms['luckySevens']['startingBet'].value;
    // Show an error if starting bet is 0 or a negative number
    if (startingBet <= 0) {
        alert('Error: Please enter a valid starting bet.')
    }

    var gameMoney = Number(startingBet);
    while (gameMoney > 0) {
        var sumOfDice = rollDice();
        if (sumOfDice === 7) {
            gameMoney += 4;
        }
        else {
            gameMoney -= 1;
        }
        console.log('game money: ', gameMoney );

    }
    //Game over

 


    function rollDice() {
        var die1 = Math.ceil(Math.random() * (1 + 6 - 1));
        var die2 = Math.ceil(Math.random() * (1 + 6 - 1));
        console.log('sum of dice: ', die1 + die2 );
        return die1 + die2;
    }

    return false;
}