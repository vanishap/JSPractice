// INVOICE CREATOR - SCRIMBA PROJECT
let services = [
    { "key": "WashCar", value: 10 },
    { "key": "MowLawn", value: 20 },
    { "key": "PullWeeds", value: 30 }
]
let cart = [];

for (let i = 0; i < services.length; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = `${services[i].key}: $${services[i].value}`;
    btn.setAttribute('key', services[i].key);
    btn.addEventListener('click', (e) => {
        const key = e.target.getAttribute('key');
        const alreadyExists = cart.find((el) => el.key === key);
        if (!alreadyExists) {
            cart.push({ key: services[i].key, value: services[i].value });
        }
        updateCart();
    });
    document.body.appendChild(btn)
    btn.style.margin = "20px"
    btn.style.borderRadius = "7px"
    btn.style.padding = "10px"
}

const updateCart = () => {
    let content = '';
    for (const i of cart) {
        const value = services.find((x) => {
            return x.key === i.key;
        })
        const container = document.getElementById('container');
        content += `<div>  ${i.key}<button key = ${i.key} onclick = remove(this)>Remove</button>......$${value.value}</div>`
    }
    container.innerHTML = content;
    const finalBill = cart.reduce((acc, curr) => {
        return acc + curr.value;
    }, 0)
    const container1 = document.getElementById('total');
    container1.innerHTML = `Total Amount $${finalBill}`;
}

const remove = (e) => {
    const container1 = document.getElementById('total');
    const key = e.getAttribute('key');
    cart = cart.filter((obj) => {
        return obj.key != key;
    });
    updateCart();
}

const btn1 = document.createElement("button");
btn1.innerHTML = `Send Invoice   ✉`;
document.body.appendChild(btn1);
btn1.addEventListener("click", () => {
    const container = document.getElementById('container');
    const container1 = document.getElementById('total');
    cart = [];
    container.innerHTML = '';
    container1.innerHTML = '';
})

//Practice
const arr = [
    {name: 'vanisha',
    age: 10,
    place: 'India',
    value: 10
    },
    {name: 'Deeshu',
    age: 6,
    place: 'USA',
    value: 67
    },
    {name: 'Madhan',
    age: 30,
    place: 'zimbambe',
    value: 35
    }
]

let sum = 0;
 arr.forEach((x) =>{
     sum += x.value;
 });
 console.log(sum);
 
const ans = arr.reduce((acc, curr)=>{
    return acc += Number.parseInt(curr.value); 
}, 0);
console.log(ans);

const result = arr.filter(x => x.place.length > 5);
console.log(result);




const bttn = document.createElement("button");
bttn.innerHTML = "Hello";
document.body.appendChild(bttn);
bttn.addEventListener('click', ()=> {
    console.log('clicked');
});

