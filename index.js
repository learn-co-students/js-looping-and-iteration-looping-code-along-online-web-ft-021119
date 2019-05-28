// Code your solutions in this file
function writeCards(names, event) {
  const thankYous = [];
  for (let i = 0; i < names.length; i++) {
    thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return thankYous;
}

function countdown(int) {
  while (int >= 0) {
    console.log(int--);
  }
}
