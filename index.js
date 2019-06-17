function writeCards(names, event) {
    const completedCards = [];
    for (let i = 0; i < names.length; i++) {
        completedCards[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return completedCards;
}

function countdown(x) {
    while (x >= 0) {
        console.log(x--);
    }
}