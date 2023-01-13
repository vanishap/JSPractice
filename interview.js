const input = [1, -4, 12, 0, -3, 29, -150];

const positiveNumSum = input.filter(n => n>0).reduce((acc,ini)=>{
   return acc += ini
},0)
console.log(positiveNumSum);

const input1 = "George Raymond Richard Martin";
const abbr = input1.split(' ').map(e=>e[0]).join('');
console.log(abbr);

const input2 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const grouped = input2.flat().reduce((acc,ini)=>{
    if(acc[ini]){
        acc[ini]++;
    }else {
        acc[ini]=1
    };
    return acc;
},{})
console.log(grouped);