//Given an array of integers, calculate the ratios of its elements 
//that are positive, negative, and zero. 
//Print the decimal value of each fraction on a new line with 6
//places after the decimal.

function plusMinus(arr) {
    // Write your code here
    let positive =0;
    let negative=0;
    let zeros =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]> 0){
            positive++;
        }
        if(arr[i] <0 ){
            negative++;
        }
        if(arr[i]===0){
            zeros++;
        }
    }
    positive = (positive/arr.length).toFixed(6);
    negative= (negative/arr.length).toFixed(6);
    zeros = (zeros/arr.length).toFixed(6);
    return {positive:positive ,negative:negative, zeros:zeros};
}
console.log(plusMinus([1,1,0,-1,-1]));
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));