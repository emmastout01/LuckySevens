function playGame() {
    // Get starting bet from user input
    var startingBet = document.forms['luckySevens']['startingBet'].value;
    // Show an error if starting bet is 0 or a negative number
    if (startingBet <= 0) {
        alert('Error: Please enter a valid starting bet.')
    }

    var gameMoney = Number(startingBet);
    var numberOfRolls = 0;
    var highestAmountWon = 0;
    var rollsAtHighest = 0;
    while (gameMoney > 0) {
        numberOfRolls ++;
        var sumOfDice = rollDice();
        if (sumOfDice === 7) {
            gameMoney += 4;
            if (gameMoney > highestAmountWon) {
                highestAmountWon = gameMoney;
                rollsAtHighest = numberOfRolls;
            }
        }
        else {
            gameMoney -= 1;
        }
       
        console.log('game money: ', gameMoney );
        console.log('highest: ', highestAmountWon );
        console.log('rolls at highest: ', rollsAtHighest);
        

    }
    //Game over
    return false;
}
 


    function rollDice() {
        var die1 = Math.ceil(Math.random() * (1 + 6 - 1));
        var die2 = Math.ceil(Math.random() * (1 + 6 - 1));
        return die1 + die2;
    }

  
