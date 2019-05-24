// Code your solutions in this file


 
function writeCards(names, event) {
    let cardArray = [];

  for (let i = 0; i < names.length; i++) {
    cardArray << `Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 return cardArray;
}
 
writeCards(names, event);