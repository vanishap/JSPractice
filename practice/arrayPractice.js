const reverseString = (someString) => {
    let string = '';
    for(let i =someString.length-1; i>=0;i--){
         string+= someString[i];
    }
    return string;
}
console.log(reverseString("I am a string")) // gnirts a ma I

const isPalindrome = (someString) => {
    const newString = someString.split('').reverse().join('');
   if(someString === newString){
    return true;
   }else {
    return false;
   }
}
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("apple")) // false

const removeCharacters = (someString, charactersToRemove) => {
    let string = '';
   string = someString.split('').filter(((f)=> !charactersToRemove.includes(f))).join('');

//    OR
    for(let i= 0; i< someString.length; i++){
        if(!charactersToRemove.includes(someString[i])){  
          string += someString[i];          
        }
    }
    return string;  
}
console.log(removeCharacters("I am an example string", ["a", "x"]))
// I m n emple string

// const mostCommonCharacter = (someString) => {
//     // for(let i =0;i<someString.length;i++){
//     //    if(someString.indexOf(someString[i]) !== i ) {
//     //     return someString[i];
//     //    }
//     // } 
//     let s= someString.split('').filter((e,index)=>{
//         if(someString.indexOf(e)!== index){
//             return e;  
//         }
//     }) 
//    let newStr= someString.split('').reduce((a, c)=>{
//     if(a[c]){
//         a[c]++;
//     }else{
//         a[c]=1;
//     }
//     return a;
//     }, {});
//     const os= [...Object.entries(newStr)];
//     const q= os.sort((c,d)=> c[1]=== d[1]? d[0].localeCompare(c[0]) :d[1]-c[1])
    
//     return q;
// }

// //console.log(mostCommonCharacter("abcddefg")) // d
// console.log(mostCommonCharacter("heggbdeff")) // f

const sortString = (someString, reverseOrder) => {
    // your code
}

console.log(sortString("bacd", false)) // "abcd"
console.log(sortString("axedzpq", true)) // "zxqpeda"
