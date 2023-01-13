/** 
  * Task description: Write a method that clears array from all unnecessary elements, 
  * like false, undefined, empty strings, zero, null 
  * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - An array of any elements 
  * @returns {Array} 
*/

const dataArr = [0, 1, false, 2, undefined, '', 3, null];
const compact = (array) => {
  const dataArray = dataArr.filter((e)=> e > 0);
  return dataArray;
}
console.log(compact(dataArr)) // [1, 2, 3];




