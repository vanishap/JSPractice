// Write a function, intersection, that takes in two arrays, a,b, as arguments.
// The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

const intersection = (a,b)=>{
    const result = [];
    const items = new Set(a);
    for(let ele of b){
        if(items.has(ele)){
            result.push(ele)
        }
    }
    return result;
};
console.log(intersection([4,2,1,6], [3,6,9,2,10]));
console.log(intersection([2,4,6], [4,2]));
console.log(intersection([4,2,1], [1,2,4,6]));
