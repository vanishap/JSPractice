function miniMaxSum(arr) {
    // Write your code here
    const sorted = arr.sort((a,b)=>a-b);
    let minSum = 0;
    let maxSum =0;
    for(let i =0; i<sorted.length-1; i++){
        minSum += sorted[i];
    }
    for(let i=1; i<sorted.length; i++){
        maxSum += sorted[i];
    }
    return [minSum,maxSum];
}
console.log(miniMaxSum([1,3,5,7,9]));
console.log(miniMaxSum([1,2,3,4,5]));