// const loadEl = document.getElementById("load");
// localStorage.setItem('name' , 'Vanisha');
// loadEl.innerText = localStorage.getItem('name');

// sessionStorage.setItem('age', 30);
// const sessionValue = sessionStorage.getItem('age');
// console.log(sessionValue);


//find frequency
const arr = ['hello', 'world', 'java', 'hello', 'world'];
const frequenced = arr.reduce((acc,ini)=>{
    if(acc[ini]){
        acc[ini]++
    }else acc[ini] = 1;
     return acc;
},{})
console.log(frequenced);

const people = [
    { name:'xyz', age:21},
    { name:'abc', age:20},
    { name:'lmn', age:20},
];
const grouped = people.reduce((acc,ini)=>{
    if(acc[ini.age]){
        acc[ini.age].push(ini);
    }else{
        acc[ini.age] = [ini];
    }
     return acc;
},{})
console.log(grouped);

const ar = [1,2,3,4,5,6,7,8,9];

const twoSum = (ar,target)=>{
    let output= [];
    for(let i = 0; i<ar.length; i++){
        for(let j=i+1; j<ar.length; j++){
            if(ar[i] + ar[j] === target){
                output.push([ar[i], ar[j]])
            }
        }
    }
    return output;
}
console.log(twoSum(ar,9));
console.log(twoSum(ar,11));
console.log(twoSum(ar,15));

const array = [1,2,3,4,3,6,5,4];
const uniqueNum = array.filter((item, index)=>array.indexOf(item) === index)
console.log(uniqueNum);
const nums = [1,1,5,6,7,7,8,9,3,4,4];
const dups = nums.filter((item,index)=>nums.indexOf(item) !== index);
console.log(dups);

const friends = [
    {name:'anna',
    books:['bb','hp'],
    age:25},
    {name:'bob',
    books:['cc','hb'],
    age:26},
    {name:'jill',
    books:['bd','mp'],
    age:18}
];
const books = friends.map(friend=>friend.books).flat();
console.log(books);


const isPrime = (n) => {
  // todo
  if(n ===1)return false;
  let factors = 0;
  for(let i=2; i<n; i++){
    if(n%i===0){
      factors++;
    }
  }
  return factors===0;
};

console.log(isPrime(10));