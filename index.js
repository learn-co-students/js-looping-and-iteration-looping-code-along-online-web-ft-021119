// Code your solutions in this file



function writeCards(people, occasion) {
  let cards = []
  for (let i = 0; i < people.length; i++) {
    cards.push( `Thank you, ${people[i]}, for the wonderful ${occasion} gift!`)
  }
  return cards
}



function countdown(start) {
  for (let i =start; i >= 0; i--) {
    console.log(i);
  }
}


 
