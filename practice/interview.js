
//2.  fibonacci series
//3. reverse a string
var string = 'DEMO';
let abc = string.split('').reverse().join('')
console.log(abc);
//OR
function reverseString(string){
    let st = '';
for(let i= string.length-1; i>= 0; i--){
    st += string[i];
}
    return st;
}

console.log(reverseString('DEMO'));


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

        area: 190,
        category: "City",
        name: "Khammam",
        state: "Telangana"
    }
];
const area = jsObj.map(e => {
    return {area: e.area,
            state: e.state}
})
console.log(area);

const obj = {
        area: 190,
        category: "City",
        name: "Khammam",
        state: "Telangana"
    }
console.log(Object.entries(obj))

console.log('new array is', Object.keys(obj).map((key) => [key, obj[key]]));
