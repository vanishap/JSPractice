
  


// units converter function
function milesToKmConverter(x){
  return `${x}miles is equal to ${x * 1.6}kms.`;
  }
console.log(milesToKmConverter(2));

//Calculate the sum of numbers within an array
const addition = [7,89,-56,456,-90,234];
const addingNums = addition.reduce((acc,ini) => {
  return acc + ini;
},0)
console.log(addingNums);

//Create a function that reverses an array
const fruits = ['apple', 'banana', 'custard apple', 'dragon fruit', 'fig'];
const reversedFruits = fruits.reverse();
console.log(reversedFruits);

//Sort an array from lowest to highest
const numericals = [56.23,78,-1, 45,23.98,15,0,2,-99, 56.45];
const sorted = numericals.sort((a,b) => {
  return a-b;
});
console.log(sorted);

//Create a function that filters out negative numbers
const mixedNums = [5, 7, -2, 45, 90, -12, 54];
const negNums = mixedNums.filter((e)=> {
  return e > 0 ;
})
console.log(negNums);

//Return a Boolean if a number is divisible by 10
let divisibleBy10 = 201;
function divBy10 (){
  if(divisibleBy10 % 10 ===0){
    return true;
  }else {
    return false;
  } 
}
console.log(divBy10());

// Return the number of vowels in a string
const findVowels = (string) => {
  let vowelCount = string.match(/[aeiou]/gi).length
  return vowelCount;
}
const voeCount = findVowels('vanisha');
console.log(voeCount);
// OR
function vowelCount(string){
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for(let char of string){
    if(vowels.includes(char)){
       count++
    }
  }
  return count;
}
console.log(vowelCount('Deekshitha'));

// contains duplicate
var containsDuplicate = function(nums) {
  let numbs = nums.sort();
  for(let i= 0; i < numbs.length; i++){
    if (numbs[i] === numbs[i+1]){
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([1,2,3,4]));

//longest common prefix
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i= 1; i< strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length -1)
        } 
    }
    return prefix;
};
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

//Sqrt(x)
var mySqrt = function(x) {
    let sqrt = Math.floor(Math.sqrt(x));
    return sqrt;
};
console.log(mySqrt(8));







//Running Sum of 1d Array
var runningSum = function(nums) {
    let result = [];
    let sum = nums.reduce((acc, ini) => {
        acc += ini;
        result.push(acc);
        return acc;
    },0)
    return result;
};
const answer = runningSum([1,1,1,1,1]);
console.log(answer);