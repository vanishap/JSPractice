const fruitss = ['kiwi', 'orange','apple','kiwi','banana','apple','kiwi','banana'];
const groups = fruitss.reduce((acc, ini)=> {
    if(acc[ini]){
      acc[ini]++
    } else {
        acc[ini] = 1
    }
    return acc;
}, {})
console.log('grouped by fruitss are ', groups);

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
const measureGrp = (arr, key) => {
    let objs = []
   for(let i = 0; i < arr.length; i++)
   if (arr[i][key] > 100){
       objs.push(arr[i][key])
   }  
    return objs       
 }
const ans = measureGrp(jsObj, 'area')
console.log( (ans) );

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num > 1;
}
const result = array.filter(isPrime)
console.log(result);