// calculate area of circle-- pi * radius *radius
// calculate circumference of a circle-- 2* pi* radius
// calculate Diameter of a circle-- 2* radius


const radius = [3,1,2,4];

const area = (radius) => Math.PI * radius * radius;
const diameter = (radius) => 2*radius;
const circumference = (radius)  =>2* Math.PI * radius;

const calculate = (radius, logic)=>{
    let output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumference));



//find max value in the array
const arr= [5,1,3,2,6];
const maxValue = arr.reduce((acc,ini)=>{
    if(ini > acc){
        acc = ini;
    }
    return acc;
},0)
console.log(maxValue);

const users = [
    {firstName: 'Vanisha', lastName:'Kolapala', age:38},
    {firstName: 'anisha', lastName:'olapala', age:8},
    {firstName: 'nisha', lastName:'lapala', age:3},
    {firstName: 'isha', lastName:'apala', age:3}
];
const fullName = users.map(user=>user.firstName + ' '+ user.lastName);
console.log(fullName);

const groupByAge = users.reduce((acc,ini)=>{
    if(acc[ini.age]){
        acc[ini.age]++
    }else {
        acc[ini.age] = 1;
    }
    return acc;
},{});
console.log(groupByAge);

//return the first names of age less than 8 using reduce
const firstName= users.reduce((acc,ini)=>{
    if(ini.age < 8){
        acc =  [...acc, ini.firstName];
    }
 return acc;
},[]);
console.log(firstName);