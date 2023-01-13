// Main Question: Get the passengers' names using the data provided 
// Bonus Part (a)- Return vegetarians/vegans
// Bonus Part (b)- Sort passengers by the number of connected flights in descending order

const passengers = [
  {
    id: 1,
    passengerName: "Freddie Mercury",
    isVegetarianOrVegan: false,
    connectedFlights: 2,
  },
  {
    id: 2,
    passengerName: "Amy Winehouse",
    isVegetarianOrVegan: true,
    connectedFlights: 4,
  },
    {
    id: 3,
    passengerName: "Kurt Cobain",
    isVegetarianOrVegan: true,
    connectedFlights: 3,
  },
     {
    id: 3,
    passengerName: "Michael Jackson",
    isVegetarianOrVegan: true,
    connectedFlights: 1,
  },
];

const names= passengers.map((passenger)=>passenger.passengerName);
console.log(names);
const veg = passengers.forEach((p)=>{
    if(p.isVegetarianOrVegan){
        console.log(p)
    }
});
const connectedF = passengers.sort((a,b)=>{
    return b.connectedFlights-a.connectedFlights;
})
console.log('connected list is', connectedF);


// // converting the string to camelCase
// function camelCase(str) {
//   return str.split(' ').map((ele, index)=>{
//     if(index === 0){
//       return ele.toLowerCase();
//     }
//     return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()}).join('');  
// }
// console.log(camelCase('How now brown cow'));


function camelCase(str) {
//first letters of each word should be capitilized
// if first letter is capitilized, it should be converted to lowercase
// have to remove punctuations at the ending by using length-1
  const words = str.split(' ');
  const finalStr = [];
  for(let i =0; i<words.length; i++){
    if(i === 0){
      const firstWord = words[0].toLowerCase();
      finalStr.push(firstWord);
    }
    else if (i === words.length-1){
      const lastWord = words[i][0].toUpperCase()
      const lastWordRemaining = words[i].slice(1,words.length-1).toLowerCase(); 
      const word = lastWord + lastWordRemaining
      finalStr.push(word)
    }
    else {
      const remaining = words[i][0].toUpperCase()
      const remainWords= words[i].slice(1).toLowerCase();
      finalStr.push(remaining + remainWords);
    }
  }
  return finalStr.join('');
}
console.log(camelCase('How now brown cow'));


function inventory(arr) {
  const newArr = [];
  let str = ''
  for(let i = 0; i < arr.length; i++){
    const nArr= arr[i];
      str = `The ${nArr[1][0]} ${nArr[0]} is ${nArr[1][1]} dollars.`
      newArr.push(str);
  }
   return newArr;
}
console.log(inventory([
      ['dresser', ['heavy', 200]],
      ['computer', ['small', 500]],
    ]));

function indAndVal(arr) {
  return arr.map((ele, index)=>{
    return {index: index, value: ele}
  })
}
console.log(indAndVal(['turtle', 'rabbit', 'dog']
))

function capitalize(s){
  let str = s.split('');
  const even = str.map((e ,i)=> i%2===0 ? e.toUpperCase() : e).join('');
  const odd = str.map((e ,i)=> i%2!==0 ? e.toUpperCase() : e).join('');
  return [even,odd]
};
console.log(capitalize("abcdef"));

const romanNums = {
  I    :      1,
  V    :      5,
  X    :      10,
  L    :     50,
  C    :    100,
  D    :   500,
  M    :  1000
}
function solution (roman) {
  for(const [key, value] of Object.entries(romanNums)){
   for(let i = 0; i<roman.length; i++){
     let total =0;
     if(key[roman[i]]){
      total += value;
     }
     return total;
   }
  }
}
console.log(solution('XXI'))