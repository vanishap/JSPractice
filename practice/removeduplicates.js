//remove duplicate values from an array

const nums = [1,3,5,3,5,7,5,6,8,2,0];
nums.forEach((e, index) => {
    console.log (`${e}- ${index}- ${nums.indexOf(e)}`)
})
// 1. using indexOf 
const filteredNums = nums.filter((e,index)=>{
    return nums.indexOf(e) === index;
});
console.log(filteredNums);

//2. using for loop
let filteredArr =[];
for(let i = 0; i<nums.length; i++){   
    if(!filteredArr.includes(nums[i])){
        filteredArr.push(nums[i]);
    }   
};
console.log('filtered array is ',filteredArr);

//using reduce
const filNums = nums.reduce((acc,ini)=>{
    if(!acc.includes(ini)){
        acc.push(ini)
    }
    return acc;
},[])
console.log(filNums);

//using set method
console.log([...new Set(nums)]);