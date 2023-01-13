/** 
  * Task description: Write a method that returns an object composed of key-value pairs. 
  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
  * Task Complexity: 2 of 5 
  * @param {Array} array - a deep array of pairs 
  * @returns {Array} 
*/
const fromPairs = (array) => {
 const pairs = array.reduce((acc,ini)=>{
    if(Array.isArray(ini)){
        acc[ini[0]] = ini[1];
    }
    return acc;
 },{});
 return pairs;
}
const data = [['a', 1], ['b', 2]];
console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }


