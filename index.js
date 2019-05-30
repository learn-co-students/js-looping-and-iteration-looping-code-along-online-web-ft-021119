function writeCards(array, event) {
    let events = [];
    for (let i = 0; i < array.length; i++) {
        events.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        // console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return events;
}

function countdown(number) {
    let i = number;
    while (i > -1) {
        console.log(i);
        i--
    }
}