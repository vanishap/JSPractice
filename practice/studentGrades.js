

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


