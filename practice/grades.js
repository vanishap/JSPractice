//HackerLand University has the following grading policy:
//Every student receives a  grade in the inclusive range from 0 to 100.
//Any grade less than 40  is a failing grade.

function gradingStudents(grades) {
    // Write your code here
    let newGrades = [];
    for(let i =0; i<=100;i+5){
        for(let j =0; j<grades.length; j++){
            if(grades[j]-i < 3){
                grades[j] = i;
                newGrades.push(i);
            }
            if(grades[j]-i >=3){
                grades[j] = grades[j];
                newGrades.push(grades[j]);
            }
        }     
        }
        return newGrades;
}
console.log(gradingStudents([73,67,38,33]));