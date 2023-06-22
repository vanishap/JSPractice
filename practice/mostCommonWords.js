const mostCommonWords = (text)=>{

    const words = text.toLowerCase().replace(/[",./';:?]/g, "").split(' ').sort();
    const commonWords = words.reduce((acc,ini)=>{
        if(acc[ini]){
            acc[ini]++;
        }else{
            acc[ini] =1;
        }
        return acc;
    },[]);
    
    return commonWords;
   
};
console.log(mostCommonWords('It was the best of times, it was the worst of times.'))