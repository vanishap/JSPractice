// find the minimum and maximum value in the given array

const array = [2,4,1,5,7,8,9,45];

let min = Infinity;
let max = -Infinity;
for(let i = 0; i<array.length; i++){
    if(array[i] < min){
        min = array[i];
    }else if (array[i] > max){
        max = array[i];
    }
}
console.log(min);
console.log(max);