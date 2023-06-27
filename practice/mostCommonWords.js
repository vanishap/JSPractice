const mostCommonWords = (text)=>{

    const words = text.toLowerCase().replace(/[",./';:?]/g, "").split(' ');
    const commonWords = words.reduce((acc,ini)=>{
        if(acc[ini]){
            acc[ini]++;
        }else{
            acc[ini] =1;
        }
        return acc;
    },{});
    
     let max = -Infinity;
     let newWords =[];
     let length = Object.keys(commonWords).length;
    for(const [key,value] of Object.entries(commonWords)){
       if(value>=max){
        max = value;
        newWords.push(`${key}: ${value}`);
       }else{
        newWords[length-1]= `${key}: ${value}`;
        length = length-1;
       }
       
    }
  return newWords;
};
console.log(mostCommonWords('It was the best of times, it was the worst of times.'))