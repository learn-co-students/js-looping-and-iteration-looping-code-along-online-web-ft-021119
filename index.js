// Code your solutions in this file
function writeCards(names, event) {
  let thankYous = []
  for (let i = 0; i < names.length; i++) {
    thankYous[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }
  return thankYous;
}

function countdown(startNumber) {
  while (startNumber >= 0) {
    console.log(startNumber--)
  }
}
