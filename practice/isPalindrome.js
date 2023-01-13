
/* A phrase is a palindrome if, after converting all uppercase letters 
into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters 
and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphanumeric = '1234567890!@#$%^&*,.;:/"\' \'';
    const palin = [];
   let str = s.split('').filter((e)=>{
    if(!alphanumeric.includes(e)){
        palin.push(e);
    }
   })
   if(palin.join('').toLowerCase() === palin.reverse().join('').toLowerCase()){
    return true;
   }
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

          //OR

var isPalindrome = function(s) {
    let arr = s.split('');
    let result = [];
    let alphaNumeric = '0123456789abcdefghijklmnopqrstuvwxyz';
    for( let i of arr){
        if(alphaNumeric.includes(i.toLowerCase())){
            result.push(i.toLowerCase())
        }
    }
   return (result.join('') == result.reverse().join('') ); 
};
console.log('The result for valid palindrome is ',isPalindrome("A man, a plan, a canal: Panama"));