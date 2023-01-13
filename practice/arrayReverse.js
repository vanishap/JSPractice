//reverse an array 
let array = [1,2,3,4,5,6,7,8,9,'Js', 'startup'];
//1. using for loop
let revArray = [];
for(let i= array.length-1; i>0; i--){
    revArray.push(array[i]);
}
console.log(revArray)

//2. using reduceRight()
const arrayReverse = array.reduceRight((acc,ini)=>{
    acc.push(ini);
    return acc;
},[]);
console.log(arrayReverse);

//3.built-in reverse() method
console.log(array.reverse());

