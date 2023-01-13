const duplicateChars = (string) => {
    const dup = string.split('').reduce((acc,ini)=> {
        if(acc[ini]){
            acc[ini]++
        }else {
            acc[ini] =1;
        };
        return acc;
    },[])
   return dup;
}
console.log(duplicateChars('paidimarla'));

