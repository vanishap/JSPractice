function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for(let r=0; r < arr.length; r++)
    for (let c=0; c<arr.length;c++){
        if(arr[r][c] === arr[c][r]){
               leftDiagonalSum += arr[r][c];
        }
        if((r + c) === (arr.length-1)){
            rightDiagonalSum += arr[r][c];
        }
    }
    // console.log(rightDiagonalSum);
    // console.log(leftDiagonalSum);
    const difference = Math.abs(rightDiagonalSum - leftDiagonalSum);
            
    return difference;
}
console.log(diagonalDifference([[1,2,3],[4,5,6],[7,8,9]]));
console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));

console.log(diagonalDifference([[6, 6, 7], [-10, 9, -3], [8, 9, -1]]));

