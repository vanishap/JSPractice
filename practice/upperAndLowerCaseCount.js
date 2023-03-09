//Count the lower case and upper case letters

function lowerAndUpperCount(str){
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let upperCount = 0;
    let lowerCount = 0;
    for(let i=0; i< str.length; i++){
        if(upper.includes(str[i])){
            upperCount++
        }else {
            lowerCount++
        }
    }
    console.log(`The upper count is ${upperCount}`);
    console.log(`The lower count is ${lowerCount}`);
   
}
lowerAndUpperCount('hellO My NamE iS VaniSHa');


//ASCII Uppercase A=65,..... Z=90
// lowercase a=97,....z=122
function caseCount(string){
 let lowerCount = 0;
 let upperCount =0;
    for(let i=0;i<string.length;i++){
       if (string[i].charCodeAt() >=65 && string[i].charCodeAt() <= 90){
        upperCount++
       }else{
        lowerCount++
       }
    }
    console.log(`upper count,  ${upperCount}`);
    console.log(`lowerCount, ${lowerCount}`)
}
caseCount('hellO My NamE iS VaniSHa');