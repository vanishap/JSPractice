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


for(let i=0; i<=5; i++){
      setTimeout(()=>{
      console.log(i)
}, 3000*i)  
}


// closure is used to get brand new i every time the setTimeout is called
for (var i =0; i<=5;i++){
    function x(i){
        setTimeout(()=>{
        console.log(i);
    },3000*i);
    }
    x(i);
}