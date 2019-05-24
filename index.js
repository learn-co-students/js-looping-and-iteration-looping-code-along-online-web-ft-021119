// Code your solutions in this file

const cardArray = [];
 
function writeCards(names, event) {
    
  for (let i = 0; i < names.length; i++) {
    cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 return names;
}
 
writeCards(names, event);