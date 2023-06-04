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