// find the most occured num in the array-- checking the frequency

const nums = [2,3,2,1,4,2,3,5,6];
const mostOccured = (arr)=>{
    const grouped = nums.reduce((acc,ini)=>{
        if(!acc[ini]){
            acc[ini] = 1;
        }else {
            acc[ini]++;
        }
    return acc;
    },{})
    let maxRepeated = -Infinity;
    for(const char in grouped){
        if(grouped[char] > maxRepeated){
            maxRepeated = char;
        }
    }
    return maxRepeated
}
console.log(mostOccured(nums));