//anagram
//length
//IsAnagram(“arc”, “car”);



function IsAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let newStr1 = str1.split('').sort().join('');
    let newStr2 = str2.split('').sort().join('');
    
    if(newStr1 === newStr2){
        return true;
    }else {
        return false;
    }
}
console.log(IsAnagram('arc', 'car'));

// print the number from nums array after every 3secs
const nums = [5,-1,20,45,13];

for(let i=0; i<nums.length; i++){
      setTimeout(()=>{
      console.log(nums[i])
}, 3000*i)  
}

