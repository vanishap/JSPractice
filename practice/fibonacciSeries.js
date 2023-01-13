const fibonacci = (n)=>{
    const series = [0,1];
    if(n<=2){
        return series;
    }
    let prev = series[0];
    let curr = series[1];
    for(let i=0;i<n;i++){
        let result = prev + curr;
        prev = curr;
        curr = result;
        series.push(result);
    }
    return (series);
};
const fibonacciSeries = fibonacci(10);
console.log(fibonacciSeries);


let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));