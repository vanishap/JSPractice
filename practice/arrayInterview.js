const arr = [1,4,1,2,5, 2,5,2,3];
// Then the sorted array should be like below
// const output = [4,3,1,1,5,5,2,2,2];

const output = arr.reduce((acc,ini)=>{
    if(acc[ini]){
        acc[ini] += 1;
    }else {
        acc[ini] = 1;
    }
    return acc;
}, {})
console.log(output);


var string = "Welcome to this Javascript Guide!";

let reverseStr = '';
for(let i= string.length-1; i >=0; i--){
  reverseStr += string[i];
}
console.log(reverseStr.split(' ').reverse().join(' '));


const info = fetch('http://localhost:3001/getreservations')
.then(res=> res.json())
.then(data=>console.log(data));