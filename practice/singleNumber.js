// Given a non-empty array of integers nums, 
// every element appears twice except for one. Find that single one.

var singleNumber = function(nums) {
    const sNum = nums.reduce((acc,ini)=>{
        if(acc[ini]){
            acc[ini]++;
        }else {
            acc[ini] = 1;
        }
        return acc;
    },{})
   
    for(const [key, value] of Object.entries(sNum)){
        if(value === 1){
            return key;
        }
    }    
};
console.log(singleNumber([4,1,2,1,2]));


//Closures example
function x(){
    const a = 10;
    function y(){
        console.log(a);
    }
    return y;
}

const z = x();
console.log(z);
console.log(z());
/////using arrow function
const m = ()=>{
    const p = 12;
    const n = ()=> {
        console.log(p)
    }
    return n;
}
const l = m();
console.log(l());


//factorial 6
const factorial = (n)=> {
    let prdt = 1
     for(let i= n; i>0;i--){
        prdt *= i;
     }
     return prdt;
}
console.log(factorial(5));


const items = ['apple','kiwi','banana','guava'];
const fruits= ()=>{
    const fruitBasket = [];
    items.forEach((fruit)=>{
        if(fruit.includes('a')){
            fruitBasket.push(fruit)
        }
     
    })
    return fruitBasket;
}
console.log('The fruit incliding a', fruits())