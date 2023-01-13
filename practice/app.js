//[3,7,9,6,7]
console.log('hi');


const result = (input1,input2)=> {
    let output = [];
    const i = input1.length < input2.length ? input1.length : input2.length
    for(let j = 0; j < i; j++){
        output[j] = input1[j] +input2[j];     
    }
    const output1 = input1.slice(i);
    
    return output.concat(output1);
};
console.log(result([2,4,5,6,7],[1,3,4]));

let array = [1,2,3,4,5,6,7,8,9,'Js', 'startup'];
//1. using for loop
let revArray = [];
for(let i= array.length-1; i>=0; i--){
    revArray.push(array[i]);
}
console.log(revArray);

const duplicateChars = (string) => {
    const dup = string.split('').reduce((acc,ini)=>{
        if(acc[ini]){
            acc[ini]++;
        }else {
            acc[ini] =1;
        }
        return acc;
    },[])
    return dup;
}
console.log(duplicateChars('kolapala'));

const numbers = [1,3,5,3,5,7,6,6,4,5,6,8,2,0];
const dupNum = numbers.filter((e,i)=>{
    if(numbers.indexOf(e)!==i){
        return e;
    }
});
console.log(dupNum);

var isPalindrome = function(s) {
    const arr = s.toLowerCase().split('');
    const palin = [];
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    for(const i of arr){
        if(alphabets.includes(i)){
            palin.push(i)
        }
    }
    return palin.join('') === palin.reverse().join('')
}
console.log('The ans of palindrome is ',isPalindrome("A man, a plan, a canal: Panama"));

const arrayPrdt = (arr)=>{
    const result= [];
    for(let i = 0; i<arr.length; i++){
        let prdt = 1;
        for(let j=0; j<arr.length; j++){
            if(i!=j){
                prdt *= arr[j]
            }
        }
        result.push(prdt);   
    }
    return result;
}
console.log(arrayPrdt([1,2,3,4]));

const codeGenerator = ()=> {
    let code = '';
    const alphaNum = '1234567890!@#$%^&*()abcdefghijklmnopqrstuvwxyz';
    const length = alphaNum.length;
    for(let i = 0; i<6; i++){
        code += alphaNum.charAt(Math.floor(Math.random()*length +1));
    }
    console.log(code) ;
};
codeGenerator();

const twoSum = (nums, target) => {
    const ans = [];
    for(let i= 0; i<nums.length; i++){
        for(let j =i+1; j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                ans.push(i,j);
            }
        }
    }
    return ans;
}
console.log(twoSum([1,2,3,4], 5));


var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let map = {};
    for(const char of s){
        if(map[char]){
            map[char]++;
        }else{
            map[char]=1;
        }
    }
    for(const char of t){
        if(!map[char]){
            return false;
        };
        if(map[char]){
            map[char]--
        };
        if(map[char] ===0){
            delete map[char];
        }
    }
    if(Object.keys(map).length===0){
        return true;
    }
    
}
console.log(isAnagram("anagram", "nagaram"));



//                 0   1 . 2 . 3 . 4 . 5
const brackets = ['(',')','{','}','[',']'];
function isValidPair (str){
    const closingIndices =[]; 
    for(const char of str){
        const index = brackets.indexOf(char);
        if(index%2 ===0){ //
            closingIndices.push(index+1); // [] 
        }else{
            if(closingIndices.pop() !== index){
                return false;
            }
        }
    }
    return closingIndices.length ===0

};
console.log('the pair is', isValidPair('{[]({(}))}'));

     //          0  1    2 . 3 . 4 . 5
const bracks = ['(',')','{','}','[',']'];
function isValidPairs (str){
    const endIndecies = [];
    for(const char of str){
        const indexPosition = bracks.indexOf(char);
        if(indexPosition%2 ===0){
            endIndecies.push(indexPosition+1);
        }else {
            if(endIndecies.pop()!==indexPosition){
                return false;
            }
        }
    }
    return endIndecies.length ===0;
};
console.log('the validpair is', isValidPairs('{[]({(}))}'));



//Retrivng information from GET method XML 
// const getUrl = 'https://api.github.com/users';
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function url() {
//     if (this.readyState === 4 && this.status === 200) {
//         const results = JSON.parse(xhttp.response);
//        displayResults(results);
//     }
// }
// xhttp.open('GET', getUrl);
// xhttp.send();

// const displayResults = (results) => {
//     //  console.table(results);
//     for (const r of results) {
//         console.log(r);
//         document.getElementById('container').appendChild(createNode(r.login));
//         document.getElementById('container').appendChild(createNode(r.id));
//         document.getElementById('container').appendChild(createNode(r.type));
//         document.getElementById('container').appendChild(createAvatar(r.avatar_url));
//         document.getElementById('container').appendChild(createNode(r.starred_url));

var request = new XMLHttpRequest();
request.onreadystatechange= function(){
    if(request.readyState===4 && request.status===200){
        let results = JSON.parse(request.responseText);
        console.log(results.map((user)=>user.login));
    }
}
request.open('GET', 'https://api.github.com/users');
request.send();

const arr = [2,4,6,8]
const froArr = arr.forEach((e,i)=>{
     arr[i]= e+2;
})
console.log(arr);
let numbs = [
    [1,2],
    [3,4],
    [5,6,7,8,9],
    [10,11,12]
]
const flattened = [].concat(...numbs);
console.log(flattened)