// Write a function named first_non_repeating_letter that takes a string input,
//  and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', 
// since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered 
// the same character, but the function should return the correct
//  case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters,
//  it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  const nonRepeated = s.split('').reduce((acc,ini)=>{
    if(acc[ini]){
      acc[ini]++
    }else {
      acc[ini] = 1;
    }
    return acc;
  },{})
  for (const[key, value] of Object.entries(nonRepeated)){
   if(value ===1){
    return key.toLowerCase() || key.toUpperCase();
   }
  }return '';
}

console.log(firstNonRepeatingLetter('sTress'));


function firstNonRepeatingLetter(s) {
  const result = {};
  for (let c of s) {
    c = c.toLowerCase();
    if (c in result) {
      result[c] += 1;
    } else {
      result[c] = 1;
    }
  }
  console.log(result);
  let t;
  for (const i in result) {
    if (result[i] === 1) {
      t = i;
      break;
    }
  }
  for(const c of s){
    if (c.toLowerCase() === t){
      return c;
    }
  }
  return "";
}

const countEl = document.getElementById("count-el");
const btnEl = document.getElementById("btn-el");
const buttnEl = document.getElementById('buttn2-el');

// let count = 0;

// function increment(){
//   count += 1;
//   countEl.innerText = count
// }
// btnEl.style.backgroundColor= 'pink';

// buttnEl.addEventListener('mouseover', ()=>{
//   if(buttnEl.innerHTML === 'Button2'){
//     buttnEl.innerHTML = 'Button';
//   }else {
//     buttnEl.innerHTML = 'Button2';
//   }
// })


function increase1 (e){
  e.innerHTML = Number(e.innerHTML)+1;
}