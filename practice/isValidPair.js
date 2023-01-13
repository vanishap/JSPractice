
              //   0   1   2   3   4   5
// const brackets = ['(',')','{','}','[',']'];
// const isValidPair =(str)=>{
//     const closingIndeces =[];
//     for(const char of str){
//         const index = brackets.indexOf(char);
//         if(index%2 === 0){
//             closingIndeces.push(index+1)
//         }else{
//             if(closingIndeces.pop() !== index){
//                 return false;
//             }
//         }
//     }
//     return closingIndeces.length ===0;
// }

// console.log(isValidPair('{[]({(}))}'))


const brackets = ['(',')','{','}','[',']'];
const isValidPair =(str)=>{
    const closingIndeces =[];
    for(const char of str){
        const index = brackets.indexOf(char);
        if(index%2 ===0){
            closingIndeces.push(index+1)
        }else{
            if(closingIndeces.pop()!== index){
                return false;
            }
        }
    }
    return closingIndeces.length ===0
}

console.log(isValidPair('{[]({(}))}'))
