function playGame() {
    var startingBet = document.forms['luckySevens']['startingBet'].value;
    console.log('starting bet', startingBet);
    if (startingBet <= 0) {
        alert('Error: Please enter a valid starting bet.')
    }
    return false;
}