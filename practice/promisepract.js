
const numPromise = new Promise((resolve, reject)=>{
    let num = 2;
    if(num < 3){
        resolve('resolved the promise')
    }else{
      reject('rejected the promise')
    }
})
numPromise.then((res)=>{
  console.log(res)
}).catch(err=>console.log(err));
