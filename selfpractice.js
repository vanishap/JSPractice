// const buttons = document.getElementById("buttons");
// const sumDiv = document.getElementById("sum");

// let counter = 0;
// for (let i = 0; i < 5; i++) {
//     let button = document.createElement("button");
//     const random = Math.floor(Math.random() * 10);

//     button.innerHTML = "Button " + random;

//     button.setAttribute('t', random);
//     buttons.appendChild(button);

//     button.addEventListener("click", function (e) {
//         counter = Number(counter) + Number(e.target.getAttribute("t"))
//         sumDiv.innerHTML = 'The total count is : ' + counter;
//         //sumDiv.setAttribute('style', "color : green");
//         sumDiv.style.color = "green";

//     })

// }

// sumDiv.innerHTML = 'The total count is : ' + counter;


// function entranceCount(){
//     let entry = 0;
//     function doorKnock(){
//       entry += 1;
//       console.log(`The number of times the door was opened and closed was ${entry} times.`);
//     }
//     return doorKnock;
//   }
//   let finalCount = entranceCount();
//   finalCount();



// const buttonKey = document.getElementById("button-btn");
// buttonKey.addEventListener("click", function(){
//   let name = "Vanisha";
//   name = "Deeshu";
//   alert(`"Welcome to my page ${name}. Hope you will enjoy this!!"`)
// });


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

// let name = "vanisha";
// console.log( name[name.length-1] );

// let browserType = 'Mozilla';
// if (browserType.includes('zilla')){
//   console.log('Found zilla');
// } else { 
//   console.log('No zilla found');
// }


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
//         for (var key in game.suspects[i]) {
//             console.log('inner loop');
//             if (game.suspects[i][key] === 'vanisha') {
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


function xyz(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            console.log('my name is ', name);
        }
    }
}
var suspects = ['Mrs. Scaralet', 'Ms. Brown', 'Mr. White']
var suspectsList = [];

let suspectsName = _.map(suspects, function(name){
    return xyz(name);
})

// console.log( xyz(suspects[0]) );

for ( let i = 0; i < suspects.length; i++ ) {
    // suspect = xyz(suspects[i]);
    // console.log(suspect);
    // suspectsList.push(suspect);
    suspectsList.push(xyz(suspects[i]));
}
console.log(suspectsList);

const weapons = ['candlestick', 'knife', 'hammer'];
const makeBroken = function(name){
    return (`broken: ${name}`) ;
}
