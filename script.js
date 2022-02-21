// let myAge = 36;
// console.log(myAge);

// let myAge = 36;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);


// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function number () {
//   console.log(42);
// }
// number();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapCounts () {
//   console.log(lap1 + lap2 + lap3)
// }
// lapCounts()

// let lapsCompleted = 0;

// // for (let i = 0; i < 3; i++){

// // }
// function lapCount () {
//   for (let i = 0; i < 3; i++){
//     lapsCompleted += 1
//   }
// }
// lapCount()
// console.log(lapsCompleted)
// document.getElementById('count-el').innerText = 5
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById('count-el')
let count = 0
function increment () {
  count += 1
 countEl.textContent = count
}

function save(){
  let countStr = count + '- '
  // saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

// let username = 'Per'
// let message = "You have three new notifications"
// let messageToUser = username + message + !
// console.log(messageToUser)

// let name = 'Lee'
// let greeting = 'Hello welcome to the web page, '
// let message = greeting + name
// let welcomeEl = document.getElementById('welcome-el')
// welcomeEl.innerText = message
// welcomeEl.innerText = welcomeEl.innerText + "U+1F643"
// let firstName = "Vanisha "
// let lastName = "Paidimarla"
// let fullName = firstName + lastName
// console.log(fullName)
// let name = "Linda"
// let greeting = "Hi there"
// // let wish = greeting + ', ' + name + '!'


// function greetingStr(){
//   console.log(greeting + ', ' + name + '!')
// }
// greetingStr()

let myPoints = 3
function add3Points(){
  myPoints += 3
}
function remove1Point(){
  myPoints -=1
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)
22
18
65
my points: 14
4
1114