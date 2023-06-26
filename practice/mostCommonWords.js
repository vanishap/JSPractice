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
    for(const [key,value] of Object.entries(commonWords)){
        // let ans = value.sort((a,b)=>b-a);
        return Object.values(commonWords).sort((a,b)=>b-a);
    }
  
};
console.log(mostCommonWords('It was the best of times, it was the worst of times.'))