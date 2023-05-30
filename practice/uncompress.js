const uncompress = (s) => {
    const result =[];
    const numbers = '0123456789';
    let i =0;
    let j=0;
    while(j< s.length){
        if(numbers.includes(s[j])){
            j++;
        }else{
            const num = Number(s.slice(i,j));
            for(let count=0; count< num; count++){
                result.push(s[j]);
            }
            j++;
            i=j;
        }
    }
    return result.join('');
};

console.log(uncompress("2c3a1t"));
console.log(uncompress("4s2b"));
console.log(uncompress('2p1o5p'));
console.log(uncompress('127y'));