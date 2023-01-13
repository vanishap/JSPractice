/* Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.*/
function isPalindrome(x){
    const y =  parseInt(x.toString().split('').reverse().join(''));
    if(x ===y ){
        return true;
    }else{
        return false;
    }
}

const ans = isPalindrome(1221);
console.log(ans);


