// arrange the words by their length in a sentence

//str= 'react is a library'
//output: 'a is  react library'

const ascendingWords = (string)=>{
    let sentence = string.split(' ').sort((a,b)=>a.length-b.length).join(' ');
    return sentence;
}
console.log(ascendingWords('react is a library'));