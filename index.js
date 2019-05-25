function writeCards(names){
let newArr = [];
for(let i = 0; i < names.length; i++){
newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
return newArr;
}

function countdown(number) {

	for (let i = number; i >= 0; i--) {
  console.log(i);
}

}
countdown(3);


// Code your solutions in this file
