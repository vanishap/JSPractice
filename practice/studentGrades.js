

function gradingStudents(grades) {
    // Write your code here
    let newGrades = grades.map(grade=>{
        if(grade <38){
            return grade;
        }else if(grade%5 < 3){
            return grade;
        }else{
            let bonus = 5 - grade%5;
            return grade+ bonus;
        }
    })
        return newGrades;
}


console.log(gradingStudents([73,67,38,33]));


//Filter the nums from an array .
const indeces= [6,2,4,1];
//output= [10,40,60,80,90];

function filterNums(arr){
    let output = arr.filter(num=>{
        if(!indeces.includes(arr.indexOf(num))){
            return num;
        }
    })
    return output;
}
console.log(filterNums([10,20,30,40,50,60,70,80,90]));