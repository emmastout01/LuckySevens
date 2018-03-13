function playGame() {
    // Get starting bet from user input
    var startingBet = document.forms['luckySevens']['startingBet'].value;
    var gameMoney = 0;
    // Show an error if starting bet is 0 or a negative number
    if (startingBet <= 0) {
        alert('Error: Please enter a valid starting bet.')
    }
    gameMoney = startingBet;
    if (gameMoney > 0) {
        // Roll dice

    }
    //Game over



    function rollDice() {
        var die1 = Math.ceil(Math.random() * (1 + 6 - 1));
        var die2 = Math.ceil(Math.random() * (1 + 6 - 1));
        console.log('sum of dice: ', die1 + die2 );
        return die1 + die2;
    }

    rollDice();

    return false;
}