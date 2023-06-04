const compress = (s) => {
  let result= [];
  let i=0;
  let j=0;
 while(j <= s.length){
  if(s[i]===s[j]){
    j++;
  }else{
    const num = j-i;
    if(num ===1){
      result.push(s[i]);
    }else{
      result.push(String(num), s[i]);
    }
    i=j;
  }
 }
  return result.join('');
};

console.log(compress('ccaaatsss'));
console.log(compress('ssssbbz'));
console.log(compress('ppoppppp'));