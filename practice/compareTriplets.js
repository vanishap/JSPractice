//compare 2 arrays with its corresponding array elements 
//a[0] with b[0]
//a[1] with b[1]
//c[2] with b[2]

function compareTriplets(a, b) {
    const finalArray = [];
    let aCount = 0;
    let bCount =0;
    for(let i=0; i<3; i++){
        if(a[i]>b[i]){
            aCount++;
        }
        if(a[i]<b[i]){
            bCount++;
        }
        
    }
   finalArray.push(aCount,bCount);
   return finalArray;
}

console.log(compareTriplets([1, 2, 3],[3, 2, 1]));