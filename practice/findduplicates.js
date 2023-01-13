//output only duplicates values

const numbers = [1,3,5,3,5,7,6,6,4,5,6,8,2,0];
const dupValues = numbers.filter((e, index)=> {
    return numbers.indexOf(e) !== index;
});
console.log(dupValues);