const countCharacters = (param, string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] === param) {
            count++
        }   
    }
}
const output = countCharacters('s', 'strings');
console.log(output);
    


 


