// Code your solutions in this file


 
function writeCards(names, event) {
    const cardArray = [];

  for (let i = 0; i < names.length; i++) {
    cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 return cardArray;
}
 
writeCards(names, event);

function countdown(num) {
    let count = num;
    while (count > -1) {
        console.log(count--);
    }
}
    countdown(num);