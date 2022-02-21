
//clicking button by invoking function in html//
// onclick="buttonClick()"
// function buttonClick(){
//     console.log( "button Clicked")
// }


// clicking button using event listener directly in JS//
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems +=  `<li><a target = '_blank' href ='#'>
         ${myLeads[i]}  
         </a></li>`
    }
    ulEl.innerHTML = listItems
}




// Practicing placing HTML tags in Js
// let container = document.getElementById("container")

// container.innerHTML = "<button>Buy!</button>"
// container.addEventListener("click", function(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// })

// const li = document.createElement("li")
//     li.textContent = myLeads[i]
//     ulEl.append(li)
// 

localStorage.setItem("myLeads", "www.orange.com")
