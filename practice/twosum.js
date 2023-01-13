const twoSum = (nums, target) => {
    let reqOut=[];
   for(let i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                reqOut.push(i,j);
            }
        }
   }
   return reqOut;    
}
// nums [3, 7, 11, 15]
console.log(twoSum([3, 7, 11, 15], 18));
console.log(twoSum([3,2,4,1], 5));
console.log(twoSum([3,3], 6));
/* i = 0index, value = 3
        j= 1 index, value = 7
        j= 2 index, value = 11
        j = 3     , v= 15  ----> pushed
    i = 1 index, value = 7
        j= 2 in, vale= 11---> pushed
        j = 3,    v= 15
    i = 2 in, v= 11
        j= 3in, v= 11
    i = 3 in, v= 15                  
*/


function isPalindrrome(string){
    let pString = string.split(' ').reverse().join();
    if (pString === string){
        return true;
    } else {
        return false;
    }  
}
const palin = isPalindrrome('leave');
console.log(palin);

