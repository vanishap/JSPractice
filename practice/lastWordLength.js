//Length of Last Word

var lengthOfLastWord = function(s) {
   return s.split(' ').pop().length
}

const wordLength = lengthOfLastWord("Hello World");
console.log(wordLength);