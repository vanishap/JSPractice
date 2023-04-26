//binary to decimal conversion

const string = '1011';
let sum=0;
let counter =1;
for (const c of string.split('').reverse().join('')){
  sum +=counter* c;
  counter *=2;
}
console.log(sum);

