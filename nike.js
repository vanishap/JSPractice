// let message = "Something went wrong, please try again"
// let errorParagraph = document.getElementById("error")

// function purchase(){
//   console.log("button clicked")
//   errorParagraph.textContent = message
// }

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2
// let sumEl = document.getElementById("sum-el")
// function addition(){
//     add = num1 + num2
//    sumEl.textContent = "Sum:" + add
// }
// function subtraction(){
//     subtract = num1 - num2
//     sumEl.textContent = "Sum:" + subtract
// }
    
// function multiplication(){
//     multiply = (num1 * num2)
//    sumEl.textContent = "Sum:" + multiply
// }
// function division(){
//     divide = (num1 / num2)
//     sumEl.textContent = "Sum:" + divide
// // }
// let firstCard =  Math.floor(Math.random() * 10);
// let secondCard =  Math.floor(Math.random() * 10);
// let sum = firstCard+secondCard;
// let hasBlackJack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.querySelector("#cards-el")

// let count =1;

// function startGame(){
//     renderGame(firstCard, secondCard)
// }

// function renderGame(first, second ){
//     console.log('count is', ++count);
//     console.log('first is', first);
//     console.log('second is ', second);
//      sum = first + second

//     cardsEl.innerHTML = "Cards: "+ first + " " + second
//     if (sum <= 20){
//         message = "Do you want to draw a new card?";
//     } else if (sum === 21) {
//         message = "You won the game!"
//         hasBlackJack = true
//     } else {
//         message = "Sorry you are eliminated!"
//         isAlive = false
//     }
//     messageEl.textContent = message  
//     sumEl.textContent = "Sum: " + sum
// }

// function newCard(){
//     // console.log("Drawing a new card from the deck")
//     let card = Math.floor(Math.random() * 10);
//     cardsEl.innerHTML += " "+ card
//     //sumEl.textContent = "Sum: " + Number(sum + card)
//     // sum += card
//    renderGame(Number(sum+card), card )
// }



// let age = 21
// if (age <= 20){
//     console.log("You cannot enter the club")
// } else {
//     console.log("Welcome!")
// }
// let age = 101
// if (age < 100){
//     console.log("Not eligible")
// } else if (age === 100){
//     console.log("Here is your birthday card from the king!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }    

// let myProfile = [
//     "I taught pharmaceutical analysis for 2 years",
//     "Have a certificate in teacher training course",
//     "Good parenting practices",
//     "Volunteered in elemantary school for more than 3 years"
// ]
// const aboutMe = [
//     "vanisha",
//     36,
//     true
// ]
// console.log( aboutMe[1] )
// let newMessage = "same here!"
// myProfile.push(newMessage)
// console.log(myProfile)
// myProfile.pop()
// console.log(myProfile)

// let cards=[
//     firstCard, secondCard
// ]
// cardsEl.innerHTML = "Cards:" + " " + cards[0] + " " + cards[1]
// cards.push(6)

// for (let count = 10; count <= 100; count += 10) {
//     console.log(count)
// }

// let cards = [7, 3, 9]               
// for (let i = 0; i <= cards.length; i += 1) {
//     console.log( cards[i])
// }

// let sentence = ["hello", "my", "name", "is", "Vanisha"]
// let greetingEl = document.querySelector("#greeting-el")
// for (let i= 0; i < sentence.length; i++) {
//     greetingEl.innerHTML += sentence[i] + " "
// }
 
// let player1Time = 102
// let player2Time = 107

 
// function totalRaceTime (){
//    return player1Time + player2Time

// }
// let totalTime = totalRaceTime()
// console.log(totalTime)

// function getRandomCard (){
//     let number = Math.floor( Math.random() * 13) + 1
//     return number
// }
// console.log( getRandomCard() )
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let randomNumber = Math.floor( Math.random() * 6 ) + 1
// console.log(randomNumber)

// function rollDice(){
//     let number = Math.floor( Math.random() * 6 ) + 1
// }
// console.log( rollDice() )

// let likesDocumentaries = true
// let likesStartups = false
// if (likesDocumentaries || likesStartups){
//      recommendMovie()
// }

// function recommendMovie (){
//     console.log("Ok no problem, start as you wish!")
// }

// if (Alive === true || hasBlackJack === false) {
//     newCard()
// }

// let airbnbCastle = {
//     name: "Juniper Hotel",
//     guests: 3,
//     food: ["breakfast", "lunch", "dinner"],
//     laundry: true,
//     valletParking: false,
//     drinks: 5
// }
// console.log( airbnbCastle.guests)
// console.log( airbnbCastle["name"])

// let player = {
//     name: "Vanisha",
//     chips: 150
// }
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

// let person = {
//     name: "Vanisha",
//     age: 36,
//     county: "Santa Clara"
// }
// function logData(){
//     person.name +" " + "is" + person.age + " years old and lives in" + " " + person.county
// }
// console.log( logData() )

// let age = 15
// message = ""

// if (age < 6){
//    message = "free"
// } else if (age >= 6 && age <= 17){
//     message = "child discount"
// } else if ( age >= 18 && age <= 26){
//     message = "student discount"
// } else if (age >= 27 && age <= 66){
//     message = "full price"
// }else {
//     message = "senior citizen discount"
// }

// let largeCountries = ["Tulavu", "India", "USA", "Indonesia", "Monaco"]
// console.log("The 5 largest countries in the world:" )
// for (let i = 0; i < largeCountries.length; i++){
//     console.log( "- "+ largeCountries[i])
// }

// let hands = ["rock", "paper", "scissors"]
// function randomItem(){
//     console.log(hands[ Math.floor( Math.random() * hands.length ) ] )
// }

// function appleshelf(){
//     for (let i = 0; i < fruit.length; i++){
//          fruit[i]
// }


// }

// if (red === "apple"){

// }