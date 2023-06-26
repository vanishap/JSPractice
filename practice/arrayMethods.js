var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
const hasVoted = voters.filter((e) => e.voted);
console.log(hasVoted.length);

const arr = [1,2,3];
let str = '';
for (let a of arr) {
    str= str.concat(a);
}
console.log(str);

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const estmdPrice = wishlist.reduce((acc, initial) => {
    return acc + initial.price
},0)
console.log(estmdPrice);

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log( arrays.flat() );

const numbers = [1, 3, 5, 2, 90, 20];
const leastToHighest = numbers.sort((a, b) => a - b );
console.log(leastToHighest);
const highestToLeast = numbers.sort((a, b) => b - a );
console.log(highestToLeast);

const words = ["dog", "wolf", "by", "family", "eaten"];
console.log( words.sort() );
const wordsLength = words.sort((a,b) => {
    return a.length - b.length;
})
console.log(wordsLength);

const ageArray = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]
const ageSeperated = ageArray.sort((a,b) => a.age -b.age);
console.log(ageSeperated);

// setTimeout(); clearTimeout(); setInterval(); clearInterval();
const hello = () => {
    console.log('Hello!')
}
const erase = setTimeout(hello, 5000);
console.log('Welcome to my test page!')
clearTimeout(erase);

let countdown = 0;
const remind = () => {
 console.log(countdown++) ;
}
// const stopRemind = setInterval(remind, 1000);
// clearInterval(stopRemind);
// const buttonEl = document.querySelector('#button-btn')

// closures
/* closure uses
1. Used in Module design pattern
2. currying
3. enables powerful pro-level functions like 'once' and 'memoize' 
4. maintainin state in an asynchronous world
5. setTimeouts
6. builds Iterators, handle partial application.
*/
function closure() {
    let name = 'Ashley';
    function closure1() {
        console.log(name);
    }
    closure1();
}
closure();
// Returning functions
function closure2() {
    let name = 'Ashley';
    function closure3() {
        console.log(name);
    }
    return closure3;
}
let z = closure2();
console.log(z);

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
const increasing = items.sort((a,b) => a.value-b.value);
console.log(increasing);
z();  
//   z is called from the above line 131 to check closures 
//  and its execution context. It returns the same value of the name.
// It still maintains its lexical scope.

// Generalizing functions or higher order functions
function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for(let i =0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}
function multiplyBy2(input) {
    return input * 2;
}

function divideBy2(input) {
    return input/2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
const result1 = copyArrayAndManipulate([1, 2, 3], divideBy2);
console.log(result);
console.log(result1);

function outer(){
    let counter = 0;
    function incrementCounter() {
        return counter += 1 ;
    }
    return incrementCounter;
}
const myNewFunction = outer();
console.log(myNewFunction());
console.log(myNewFunction());

const secondNewFunc = outer();
console.log(secondNewFunc());
console.log(secondNewFunc());

function printHello() {
    console.log('Hello');
}
const removeTimer = setTimeout(printHello, 0);
console.log('Print me first');
// clearTimeout(removeTimer);
console.log('Print me first');
console.log('Print me first');

const array = [3, 6, 8, 2];
const fiveAndGreaterOnly = array.filter((e) => e >= 5);
console.log(fiveAndGreaterOnly);

const array1 = [3, 6, 8, 2];
const evensOnly = array1.filter((e) => e % 2 == 0   );
console.log(evensOnly);

const array2 = ["dog", "wolf", "by", "family", "eaten", "camping"];
const greaterThan5 = array2.filter((e) => e.length <= 5).sort((a, b) => a.length- b.length);
console.log(greaterThan5);

const array3 = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const peopleWhoBelongToTheIlluminati = array3.filter((e) => {
  return e.member;
})
console.log(peopleWhoBelongToTheIlluminati);

const array4 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const ofAge = array4.filter((e) => {
    return e.age > 18;
})
console.log(ofAge);

// AJAX steps
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         document.getElementById('load').innerHTML = xhr.responseText;
//     }
// }
// xhr.open('GET', 'index.html');
// xhr.send();

const maxNos = [1, 100];
const maxNo = maxNos.reduce((a,b) => {
    return Math.max(a,b)
}, 50);
console.log(maxNo);

let counter = 1;
do {
    console.log(counter);
    counter++;
} while (counter < 5);

// slice() and splice()
const names = ['Deekshitha', 'Laasya', 'Karthik', 'Suhanth', 'Vyshnavi'];
const newNames = names.slice(2,4);
console.log(newNames);
console.log(names);
const fruits = ['mango', 'apple', 'custard apple', 'guava', 'pear', 'orange'];
const newfruits = fruits.splice(2, 1);
console.log(newfruits);
fruits.splice(2, 0, 'kiwi','banana');
console.log(fruits);
// findIndex()
const arr1 = ['apple', 'ball', 'cat', 'telephone', 'microphone'];
const isLargeLength = (element) => element.length > 5;
console.log(arr1.findIndex(isLargeLength));

/* Hello {{name}}, How are you doing?
 Make sure that your name is correctly - {{name}}
Replace name with : Vanisha - Hello Vanisha, How are you doing?Make sure that your name is correctly - Vanisha
Replace name with : Madhan - Hello Madhan, How are you doing?Make sure that your name is correctly - Madhan */
const namesReplace = {
    self: "Vanisha",
    spouse:"Madhan"
}
const Replace = (obj) => {
    let greeting = 'Hello {{self}}, How are you doing? Your spouse name is  - {{spouse}}'
    const str = greeting.split(' ');
    let newGreeting = greeting.replace('{{self}}', obj.self );
    let spouseGreeting = newGreeting.replace('{{spouse}}', obj.spouse)
    return spouseGreeting;
}
console.log(Replace(namesReplace));

// call() and apply() --- are used to change the value of 'this' to 
// change the context of a function.
// call() and apply() are similar, only difference is apply() accepts an array of arugements.
let car = {
    carId : 123,
    getId : function() {
       return this.carId ; 
    }
};
let newCar = {carId : 456};
console.log(car.getId.call(newCar));

const twoSum = (nums, target) => {
    let reqOut=[];
   for(let i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                reqOut.push([i,j]);
            }
        }
   }
   return reqOut;
     
}
// nums [3, 7, 11, 15]

console.log(twoSum([3, 7, 11, 15], 18));
console.log(twoSum([3,2,4,1], 5));
console.log(twoSum([3,3], 6));

// error handling
try {
    let name = newName;
}
catch(error){
    console.log('error: ', error);
}
console.log('hey, welcome to the new world of js');



// extracting same characters using reduce and for loop
const duplicateChars = (string) => {
    let obj = {};
    let ans = string.split('').reduce((acc, ini) => {
        if(acc[ini]){
            acc[ini]++
        }else {
            acc[ini] = 1;
        }
        return acc;
    }, {})
    console.log(ans);
}
duplicateChars('strings');
/////OR//////
const countCharacters = (param, string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === param) {
            count++
        }   
    }
    return count;
}
const output1 = countCharacters('s', 'strings');
console.log(output1);

const arrayNum = [1,2,6,7,4,9,5,7,9,8,10,2,6];
const dupNum = arrayNum.reduce((acc, ini) =>{
    let obj = {};
    if (acc[ini]) {
         acc[ini]++
    } else {
         acc[ini] = 1;
    }
    return acc;
},{})
console.log(dupNum);

let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
myArray.pop();
myArray.push('Dee', 'Lee');
function addingIndex(){
  let array = [];
  let items = '';
  for(let i=0; i<myArray.length; i++){
    items =  myArray[i] + ' ' +  '('+ myArray.indexOf(myArray[i]) + ')' ;
    array.push(items);
} 
 return array;
}
const myString = addingIndex();
console.log(myString.join('- '));

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
birds.indexOf('Eagles');
 birds.splice(2, 1);
const eBirds = birds.join(', ');
    for (let i =0; i< birds.length; i++){
        if(birds[i].startsWith('E')) {
            console.log(birds[i]);
        };       
        }
    
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum =0;
     s.split('').forEach((a, index)=> {
        if(mapVar[a]<mapVar[s[index+1]]){
         sum -=mapVar[a];
        }
        else {
         sum +=mapVar[a];
        }
    })
   return sum; 
};
const mapVar ={
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C : 100,
    D :500,
    M :1000
}
console.log(romanToInt('MCMXCIV'));

// built-in js object that creates empty object; any value passed
//into the parenthesis still prints empty object.
const user = Object.create(null);
console.log(user);
// creating object using constructor function
class Person {
    constructor(fName, lName, age){
        this.fName = fName,
        this.lName = lName,
        this.age = age
    }
}
let vanisha = new Person('vanisha', 'kolapala', 25);
let person2 = new Person('Deeshu', 'Paidi', 12) 
console.log(vanisha);
console.log(person2);

const addition = (arr) => {
    let sum = 0;
 for (let i= 0; i< arr.length; i++){
    sum += arr[i];
 }
 return sum;
}
console.log(addition([1, 2, 3, 4, 5, 6]));

                            
//class with properties and methods
class Car {
    constructor(year, model){
        this.year = year,
        this.model = model
    }
    start(){
        console.log(`The ${this.model} was made in the year ${this.year}. `)
    }
}
merc = new Car(2022, 'GLC350');
merc.start();

// function fetchData(url) {
//     return fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
// }
// fetchData('https://dog.ceo/api/breeds/image/random');
// fetchData('https://api.github.com/users');

// fetch('URL', {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify(
//         {
//             'name' : 'jim',
//             'job': 'dancer'
//         }
//     )
// })
    
//Bujji explained fetching data from url and creating table.
// fetch('https://randomuser.me/api/?results=50')
//     .then(res => res.json())
//     .then(data => {
//         const meta = data.results;
//         const table = createTable();
//         document.getElementById('random-user').appendChild(table);
//         meta.map((m)=>{
//            const  tr = createRow(m);
//         table.insertAdjacentHTML('beforeend', tr);
//         });       
//     });
//     /*
//     1. gender
//    2. name
//    3. location
//    4. email
//    5. login
//     */ 
//    sortName=(a,b)=> a-b;
//    createRow=(m)=>{
//     const {gender, name, location, email, login} = m;
//     const tr = `<tr>
//     <td>${gender}</td>
//     <td>${name.first + name.last}</td>
//      <td>${email}</td>
//     <td>${login.username}</td>
//     <td>${location.city}</td>
//     </tr>`
//     return tr;
//    }
// createTable=()=>{
//     const table = document.createElement('table');
//     const thGender = document.createElement('th');
//     thGender.innerHTML ='Gender';
//     const thName = document.createElement('th');
//     thName.innerHTML ='Name';
//     thName.addEventListener('click', sortName);
//     const thEmail = document.createElement('th');
//     thEmail.innerHTML ='Email'
//     const thLogin = document.createElement('th');
//     thLogin.innerHTML ='Login';
//     const thLocation = document.createElement('th');
//     thLocation.innerHTML ='Location';
//     const tr = document.createElement('tr');
//     tr.appendChild(thGender);
//     tr.appendChild(thName);
//     tr.appendChild(thLocation);
//     tr.appendChild(thLogin);
//     tr.appendChild(thEmail);
//     table.setAttribute('style', 'border: 1px solid black');
//     table.appendChild(tr);
//     return table;
// }

fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => {
            const report = data.results;
         
            const table = createTable();
            document.getElementById('random-user').appendChild(table);
            report.map((e) =>{
                const tr = createRow(e);
                table.insertAdjacentHTML('beforeend', tr);
            })
        })

const createTable = ()=> {
    const table = document.createElement('table');
    const thName = document.createElement('th');
    thName.innerHTML = 'Name';
    const thGender = document.createElement('th');
    thGender.innerHTML = 'Gender';
    const thLogin = document.createElement('th');
    thLogin.innerHTML = 'Login';
    const thEmail = document.createElement('th');
    thEmail.innerHTML = 'Email';
    const thLocation = document.createElement('th');
    thLocation.innerHTML = 'Location';
    table.setAttribute('style', 'border: 1px solid red')
    const tr = document.createElement('tr');
    tr.appendChild(thName);
    tr.appendChild(thGender);
    tr.appendChild(thLogin);
    tr.appendChild(thEmail);
    tr.appendChild(thLocation);
    table.appendChild(tr);
    return table;
}
const createRow = (e) => {
    const{name, gender, login, email, location} = e;
    const tr = `<tr>
    <td>${name.first + name.last}</td>
    <td>${gender}</td>
    <td>${login.username}</td>
    <td>${email}</td>
    <td>${location.city}</td>
    </tr>`
    return tr;
}

function factorial(n){
    if(n ==0){
        return 1;
    } else {
        return n * factorial(n-1);
    }   
}
console.log(factorial(10));



const blocks = [
    {school: true,
     office: false,
     store: true,
     pharmaacy: true
    },
    {school: false,
     office: true,
     store: true,
     pharmaacy: false
    },
    {school: true,
     office: false,
     store: false,
     pharmaacy: true
    },
    {school: false,
     office: false,
     store: false,
     pharmaacy: false
    }
]
for(const a in blocks){
    console.log(blocks[a].pharmaacy)
}
for(const a of blocks){
    console.log(a.store)
}
   
// Interview question
//print the numbers fro 0 to n-1 in order, if there is missing number
// print -1 in place of missing number 
const input = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
let newArr=[];
let index=0;
for(const a of input){
    newArr[index] = input.find((f)=> f === index) || -1;
    index++;
}
console.log('new arre is', newArr)
let newAr=[];
for(let i=0;i<input.length;i++){
  newAr[i]= input.find((f)=> f ===i) || -1;
}
console.log(newAr)




