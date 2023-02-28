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


var majorityElement = function (nums) {
  const group = nums.reduce((acc, ini) => {
    if (acc[ini]) {
      acc[ini]++;
    } else {
      acc[ini] = 1;
    }
    return acc;
  }, {});
  console.log(group);
  let mostRepeated = -Infinity;
  for (const num in group) {
    if (group[num] > mostRepeated) {
      mostRepeated = group[num];
    }
  }
  return mostRepeated;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3,2,3]));
