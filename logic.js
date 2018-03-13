function playGame() {
    // Get starting bet from user input
    var startingBet = document.forms['luckySevens']['startingBet'].value;
    // Show an error if starting bet is 0 or a negative number
    if (startingBet <= 0) {
        alert('Error: Please enter a valid starting bet.')
    }
    // Set variables
    var gameMoney = Number(startingBet);
    var numberOfRolls = 0;
    var highestAmountWon = 0;
    var rollsAtHighest = 0;
    // As long as there is game money, play the game
    while (gameMoney > 0) {
        // Roll the dice
        var sumOfDice = rollDice();
         // Increase number of rolls each time dice are rolled
         numberOfRolls ++;
        //  Increase game money if sum of dice = 7
        if (sumOfDice === 7) {
            gameMoney += 4;
            // If game money goes higher than previous highest amount, change highestAmountWon and rollsAtHighest
            if (gameMoney > highestAmountWon) {
                highestAmountWon = gameMoney;
                rollsAtHighest = numberOfRolls;
            }
        }
        else {
            gameMoney -= 1;
        }
    }
    //Game over
    return false;
}
 

// Function for rolling dice. Returns sum of two randomly rolled 6-sided dice.
    function rollDice() {
        var die1 = Math.ceil(Math.random() * (1 + 6 - 1));
        var die2 = Math.ceil(Math.random() * (1 + 6 - 1));
        return die1 + die2;
    }

  
