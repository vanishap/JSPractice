//Product of Array Except Self
const numPrdts = (arr) => {
    const prdtsArr = [];
    for(let i =0; i < arr.length; i++){
        let prdt = 1;
        for(let j =0; j< arr.length; j++){
            if(i != j){
                prdt *= arr[j];
            }
        }
        prdtsArr.push(prdt);
    } 
    return prdtsArr;
}
console.log(numPrdts([1,2,3,4]));  //[24,12,8,6]


