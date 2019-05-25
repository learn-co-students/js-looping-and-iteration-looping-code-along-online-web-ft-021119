function writeCards(names){
let newArr = [];
for(let i = 0; i < names.length; i++){
newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
return newArr;
}

function countdown(number) {

	for (let t = number; t >= 0; t--) {
  console.log(t);
}

}
countdown(3);


// Code your solutions in this file
