//You are in charge of the cake for a child's birthday. 
//You have decided the cake will have one candle for each year of their total age. 
//They will only be able to blow out the tallest of the candles. 
//Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = Math.max(...candles);
    let count =0;
    for(let i=0; i<candles.length; i++){
        if(candles[i]=== tallest){
           count++;  
        }
    }
    return count;
}
console.log(birthdayCakeCandles([4,4,1,3]));