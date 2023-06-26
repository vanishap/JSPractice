// Write a JavaScript program to display the 
//current day and time in the following format.  
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
const printTimeAndDate= ()=>{
  const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
  const date = new Date();
  const time = date.getHours() +':'+ date.getMinutes() +':'+date.getSeconds();
  const day = date.getDay();
  return `The current time is ${time} and day is ${days[day]}.`
}
console.log(printTimeAndDate());


//Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const currentDate=()=>{
    const fullDate= new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth()+1;
    const date= fullDate.getDate();
    console.log(month+'-'+date+'-'+year);
    console.log(month+'/'+date+'/'+year);
    console.log(date+'-'+month+'-'+year);
    console.log(date+'/'+month+'/'+year);
}
currentDate();