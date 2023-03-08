
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