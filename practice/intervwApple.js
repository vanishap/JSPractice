// Input :

 const arr = ["Polland", "Japan", "United States", "United Kingdom", "France", "India", "Peru", "Africa", "Brazil","China","Germany"]



// Output below map object :

// {

  // 4: ['Peru']

  // 5: ['Japan', 'India', 'China']

  // 6: ['France', 'Africa', 'Brazil']

  // 7: ['Polland', 'Germany']

  // 13: ['United States']

  // 14: ['United Kingdom’] 

// }

const array = arr.reduce((acc,ini)=>{
     if(acc[ini.length]){
        acc[ini.length].push(ini);
     }else {
        acc[ini.length] =[ini];
    }
    return acc;
}, {})
console.log(array);

const final ={};
for(const s of arr){
    if(s.length in final){
        final[s.length].push(s)
    }else{
        final[s.length]= [s];
    }
 
}
console.log('using for loop is', final);