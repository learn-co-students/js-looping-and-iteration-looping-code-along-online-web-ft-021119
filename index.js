// Code your solutions in this file
function writeCards(names, event) {
   let resultsArray = []
   for (let i = 0; i < names.length; i++) {
      resultsArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
   }
   return resultsArray
}

function countdown(arg) {
   while (arg >= 0) {
      console.log(arg)
      arg--
   }
}