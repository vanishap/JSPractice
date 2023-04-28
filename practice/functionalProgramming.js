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


