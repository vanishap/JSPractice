// let newImage = document.querySelector("img");
// console.log(newImage);
// newImage.onclick = function(){
//   let myImage = newImage.getAttribute("src");
//     if (myImage === 'images/img1.jpeg'){
//     newImage.setAttribute('src', 'images/img2.jpg');
//   } else newImage.setAttribute('src', 'images/img1.jpeg')
// }

// const myButton = document.getElementById("change-btn");
// const myHeading = document.querySelector('h1')
// function setUserName(){
//   let myName = prompt('Please enter your name');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'Mozilla is cool ' + myName;
// }
// setUserName();





// let cityName = 'GopAlaPuraM';
// console.log(cityName);
// let altCity = cityName.toLowerCase();
// altCity = altCity.replace('g', 'G');
// console.log(altCity);
// const doSomeThing=()=>{
//   console.log('1 second passed!');
// }
//  let timeoutId = setTimeout(doSomeThing(), 3000);
// console.log(timeoutId);
// clearTimeout(timeoutId);
// let timeoutId2 = setTimeout(doSomeThing(), 3000);
// console.log(timeoutId2);
// clearTimeout(timeoutId2);

// let timer1 = setTimeout(() => {console.log("this is the first message")}, 5000);
// let timer2 = setTimeout(() => {console.log("this is the second message")}, 3000);
// let timer3 = setTimeout(() => {console.log("this is the third message")}, 1000);

// const game = {
//     suspects: [
//         {
//             name: 'vanisha',
//             color: 'red'
//         },
//         {
//             name: 'madhan',
//             color: 'blue'
//         },

//     ]
// }
// var gameLoop = function () {
//     for (var i = 0; i < game.suspects.length; i++) {
//         console.log('outer loop');
//         for (var category in game.suspects[i]) {
//             console.log('inner loop');
//             if (game.suspects[i][category] === 'vanisha') {
//                 console.log('Found you');
//             } else {
//                 console.log('Try next time')
//             }
//         }
//     }
// }
// gameLoop();


// var suspects = [
//         {
//             name: 'vanisha',
//             color: 'red'
//         },
//         {
//             name: 'madhan',
//             color: 'blue'
//         }

// ]
// let color1 = suspects[0].color;
// console.log(color1);
// let [colour1, color2] = [suspects[0].color, suspects[1].color];
// console.log(colour1,color2);
// var {color22, color33} = {color22: suspects[0].color, color33: suspects[1].color};
// console.log(color22, color33);


// function xyz(name) {
//     return {
//         name: name,
//         color: name.split(' ')[1],
//         speak(){
//             console.log('my name is ', name);
//         }
//     }
// }
// var suspects = ['Mrs. Scaralet', 'Ms. Brown', 'Mr. White']
// var suspectsList = [];

// let suspectsName = _.map(suspects, function(name){
//     return xyz(name);
// })

// // console.log( xyz(suspects[0]) );

// for ( let i = 0; i < suspects.length; i++ ) {
//     // suspect = xyz(suspects[i]);
//     // console.log(suspect);
//     // suspectsList.push(suspect);
//     suspectsList.push(xyz(suspects[i]));
// }
// console.log(suspectsList);

// const weapons = ['candlestick', 'knife', 'hammer'];
// const makeBroken = function(name){
//     return (`broken: ${name}`) ;
// }

// const createTuple = (a, b, c, d) => {
//     console.log(arguments);
//     return [a, c], [b, d];
// }
// createTuple('It', 'be', 'could', 'anyone', 'no one');

// const add = function (a, b = 2 ){
//     // console.log(arguments);
//     // before ES6  b = b || 2;
//     return a + b ;
// }
// add(3);
// add(1);

// const constructArr = function (){
//     let arr = Array.prototype.slice.call(arguments);
//     arr.push('the billiards room?');
//     console.log(arr);
//    console.log( arr.join(' ') );

// };
// constructArr('was', 'it', 'in');

// const ifElse = (condition, isTrue, isFalse) => {
//    let result = condition ? isTrue : isFalse;
//    return result ;
// };
// ifElse(true, 
//     () => {console.log(true);},
//     () => {console.log(false);}
// );


// const newDevelopment = [
//     {
//         name: 'Miss Scarlet',
//         present: true,
//         rooms: [
//             { kitchen: false },
//             { ballroom: false },
//             { conservatory: true },
//             { 'dining room': true },
//             { 'billiard room': false },
//             { library: true }
//         ]
//     },
//     {
//         name: 'Reverend Green',
//         present: true,
//         rooms: [
//             { kitchen: true },
//             { ballroom: false },
//             { conservatory: false },
//             { 'dining room': false },
//             { 'billiard room': true },
//             { library: false }
//         ]
//     },
//     {
//         name: 'Colonel Mustard',
//         present: true,
//         rooms: [
//             { kitchen: false },
//             { ballroom: false },
//             { conservatory: true },
//             { 'dining room': false },
//             { 'billiard room': true },
//             { library: false }
//         ]
//     },
//     {
//         name: 'Professor Plum',
//         present: true,
//         rooms: [
//             { kitchen: true },
//             { ballroom: false },
//             { conservatory: false },
//             { 'dining room': true },
//             { 'billiard room': false },
//             { library: false }
//         ]
//     }
// ];

// // const notInRoom = (suspect, memo) => {
// //     const emptyRooms = reduce(suspect, rooms, (room,memo) => {
// //         if (room === false) memo.push(room);
// //         return memo;
// //     }, []);
// //     return emptyRooms;
// // };
// // notInRooms = _.map(newDevelopment, notInRoom);
// // _.intersection(notInRooms);


// const myAlert = () => {
//     const x = 'Help, I think I found a clue!';
//     let count = 0;
//     const alerter = () => {
//         alert(`${x} ${++count}`);
//     };
//     return alerter;
// };
// const functAlert = myAlert();
// const functAlert2 = myAlert();

// functAlert();
// functAlert();
// functAlert2();
// functAlert();
// functAlert();

// async function addByX(x) {
//     function instruction(X) {
//         return X + x;
//     }
//     if (x === 3) {
//         const restUrl = "https://api.github.com/users";
//         const results = await fetch(restUrl);
//         if (results) {
//             console.log(results.json());
//         }
//     }


//     return instruction;
// }

// // /*** Uncomment these to check your work! ***/
// // const addByTwo = addByX(2);
// // console.log(addByTwo(1)); // => should return 3
// // addByTwo(2); // => should return 4
// // addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// console.log(addByThree(1)); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// console.log(addByFour(4)); // => should return 8
// console.log(addByFour(5)); // => should return 9


//Retrivng information from GET method XML 
// const getUrl = 'https://api.github.com/users';
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function url() {
//     if (this.readyState === 4 && this.status === 200) {
//         const results = JSON.parse(xhttp.response);
//        displayResults(results);
//     }
// }
// xhttp.open('GET', getUrl);
// xhttp.send();

// const displayResults = (results) => {
//     //  console.table(results);
//     for (const r of results) {
//         console.log(r);
//         document.getElementById('container').appendChild(createNode(r.login));
//         document.getElementById('container').appendChild(createNode(r.id));
//         document.getElementById('container').appendChild(createNode(r.type));
//         document.getElementById('container').appendChild(createAvatar(r.avatar_url));
//         document.getElementById('container').appendChild(createNode(r.starred_url));


//     }
// }
// const createNode = (prop) => {
//     const parent = document.createElement('div');
//     const node = document.createTextNode(prop);
//     parent.appendChild(node);
//     return parent;
// }
// const createAvatar = (prop) => {
//     const parent = document.createElement('img');
//     parent.setAttribute('src', prop)

//     return parent;
// }


// /* practicing GET XML*/ 
// const exUrl = 'https://randomuser.me/api/?results=50';
// var xmlHttp = new XMLHttpRequest();
// xmlHttp.onreadystatechange = function(){
//     if (this.readyState ===4 && this.status === 200){
//         const responses = this.responseText;
//         displayResponses(JSON.parse(responses));
//     }
// }
// xmlHttp.open('GET', exUrl);
// xmlHttp.send();

// const displayResponses = (responses) => {
//     for(let i of responses.results){
//         // console.log(i.email);
//         // console.log(i.location);
//         console.table(i);
//     }
// }

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         var rooms = JSON.parse(xhr.responseText);
//         var statusHTML = '<ul class="rooms">';
//         for (var i = 0; i < rooms.length; i += 1) {
//             if (rooms[i].available === true) {
//                 statusHTML += '<li class="empty">';
//             } else {
//                 statusHTML += '<li class="full">';
//             }
//             statusHTML += rooms[i].room;
//             statusHTML += '</li>';
//         }
//         statusHTML += '</ul>';
//         document.getElementById('roomList').innerHTML = statusHTML;
//     }
// };
// xhr.open('GET', '../data/rooms.json');
// xhr.send();

// const astrosUrl = 'http://api.open-notify.org/astros.json';
// const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
// const peopleList = document.getElementById('people');
// const btn = document.querySelector('button');

// // Make an AJAX request
// function getJSON(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             let data = JSON.parse(xhr.responseText);
//             return callback(data);
//         }
//     };
//     xhr.send();
// }

// // Generate the markup for each profile
// function generateHTML(data) {
//     const section = document.createElement('section');
//     peopleList.appendChild(section);
//     // Check if request returns a 'standard' page from Wiki
//     if (data.type === 'standard') {
//         section.innerHTML = `
//       <img src=${data.thumbnail.source}>
//       <h2>${data.title}</h2>
//       <p>${data.description}</p>
//       <p>${data.extract}</p>
//     `;
//     } else {
//         section.innerHTML = `
//       <img src="img/profile.jpg" alt="ocean clouds seen from space">
//       <h2>${data.title}</h2>
//       <p>Results unavailable for ${data.title}</p>
//       ${data.extract_html}
//     `;
//     }
// }

// btn.addEventListener('click', (event) => {
//     getJSON(astrosUrl, (json) => {
//         json.people.map(person => {
//             getJSON(wikiUrl + person.name, generateHTML);
//         });
//     });
//     event.target.remove();
// });

// practice //
// const palindrome = (str) => {
//     let checker = '';
//     str = str.toLowerCase();
//     checker = str;
//     console.log(checker);
//     checker = str.split('');
//     console.log(str === str.split('').reverse().join(''));
// }
// palindrome('joHN');

// function name(){
//     return {
//         bar: 'hello'
//     }
// }
// function name2() {
//     return 
//     { bar: 'hello';
//     }
// }
// console.log(name());
// console.log(name2());
// const printNumber = (n) => {
//     for (i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('fizzbuzz');
//         }
//         else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// printNumber(30);


// Array methods practice 1.find()
// let model = [
//     {
//         color: "red",
//         type: "hatchback",
//         registration: new Date('2012-02-03'),
//         capacity: 5
//     }, {
//         color: "purple",
//         type: "minivan",
//         registration: new Date('2012-02-03'),
//         capacity: 7
//     },
//     {
//         color: "orange",
//         type: "sedan",
//         registration: new Date('2012-02-03'),
//         capacity: 5
//     }]

// const target = "minivan"
// const findOut = model.find((x) => {
//     if (x.type === target) {
//         return x
//     }
// })
// console.log(findOut)

// 2. isArray()
// function is_array(x) {
//     if (Array.isArray(x)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// console.log(is_array({1: "hi", 2: "ik"}));

// 3. reduce()
// let nums = [1, 18, 5, 11, 25, 67, 22, 10]
// let highestNum = nums.reduce((a, b)=> a > b ? a:b
// , 1)
// console.log(highestNum)

// let lowestNum = nums.reduce((a, b) => a < b ? a: b, 1)
// console.log(lowestNum)

// // 4. filter()
// let even = nums.filter(num => num%2 ===0)
// console.log(even)

// 5.

// let arr = [1,3,5,7]
// let total = arr.reduce(x => x+x, 1)
// console.log(total)

// const dates = [
//     '2019/06/01',
//     '2018/06/01',
//     '2019/09/01', // This is the most recent date, but how to find it?
//     '2018/09/01'
// ]
// let cDate = dates.reduce(x => new Date(x))
// console.log(cDate)
// const euros = [29.76, 41.85, 46.5];
// const sum = euros.reduce(x => x+x%euros.length)
// console.log(sum)


const jsObj = [
    {
        area: 100,
        category: "smartCity",
        name: "Vizag",
        state: "Andhra Pradesh"
    },
    {
        area: 100,
        category: "City",
        name: "Rajahmundry",
        state: "Andhra Pradesh"
    },
    {
        area: 110,
        category: "smartCity",
        name: "Hyderabad",
        state: "Telangana"
    },
    {
        area: 90,
        category: "City",
        name: "Warangal",
        state: "Telangana"
    },
    {
        area: 120,
        category: "smartCity",
        name: "Vijayawada",
        state: "Andhra Pradesh"
    },
    {
        area: 300,
        category: "City",
        name: "Nellore",
        state: "Andhra Pradesh"
    },
    {
        area: 200,
        category: "City",
        name: "Nellore",
        state: "Andhra Pradesh"
    },
    {

        area: 190,

        category: "City",
        name: "Khammam",
        state: "Telangana"
    }
];
const groupBy = (arr, key) => {
    const result = {};
    for (const a of arr) {
        if (result[a[key]]) {
            console.log(result[a[key]]);
        } else {
            result[a[key]] = result[a[key]] || [];
            result[a[key]].push(a);

        }

    }
}
// const seperate = (arr, key) => {
//     const final = arr.reduce((acc, cur) => {
//         acc[cur[key]] = acc[cur[key]] || [];
//         acc[cur[key]].push(cur);
//         return acc;
//     }, {})
//     return final;
// }
// console.log( (seperate(jsObj, "state")) );




// const groupBy = (arr, key) => {
//     const result = {};
//     let named = arr.reduce((acc, cur) => {

//         if (Object.keys(result).includes(cur[key])) {
//             // result[key] = [];
//             result[cur[key]].push(cur);
//         } else {
//             result[cur[key]] = [];
//             result[cur[key]].push(cur);
//         }
//         return result;
//     }, {})
//     return named;
// }
alert(JSON.stringify(groupBy(jsObj, 'category')));



// const k = [12, 15, 2, 5, 6, 9].reduce((acc, cur) => {
//     return acc + cur;
// }, 0);

// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
// );
// console.log(sumWithInitial);

// const init = 500;
// const arr = [20, 30, 60, 120, 25];  // sum all array numbers and subtract from acc;
// const final = arr.reduce((accu, current) => {
//     return accu - current;
// }, init)
// console.log(final)

// const input = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 67,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ];

// const ages = input.map(person => person.age);

// let n = Math.max(...ages)
// console.log(n)
// const array = [15, 16, 17, 18, 19];

// const  reducer =(previous, current, index, array) =>{
//     const returns = previous + current;
//         console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
//         return returns;
//     }

// array.reduce(reducer);


// const button = document.createElement("button")
// button.innerHTML = "Click Me"
// // button.innerHTML = "Welcome"
// button.addEventListener("click", ()=>{
//     console.log("CLICKED!")
// })
// document.body.appendChild(button)

const types = ['button', 'div', 'span'];

// creating multiple buttons on DOM
const btnNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < 10; i++) {
    const random = Math.round(Math.random(3));
    const buttons = document.createElement(types[random])
    buttons.innerHTML = btnNum[i]
    buttons.id = 'btn-el'
    buttons.addEventListener("click", () => {
        buttons.style.background = 'blue'
        buttons.style.color = 'black'
        console.log('CLICKED!')
    })
    document.body.appendChild(buttons)
    buttons.style.background = 'green'
    buttons.style.color = 'white'
}
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

