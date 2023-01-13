// Given two strings s and t, return true if t is an anagram of s, 
// and false otherwise.

// An Anagram is a word or phrase formed by rearranging the 
// letters of a different word or phrase, typically using all 
// the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    };
    const map = {};
    for(const char of s){
        if(map[char]){
            map[char]++;
        }else {
            map[char]= 1;
        }
    };
    for(const char of t){
        if(!map[char]){
            return false
        };
        if(map[char]){
            map[char]--
        };
        if(map[char]===0){
            delete map[char];
        }
    };   
   if(Object.keys(map).length ===0){
    return true;
   }
};
console.log(isAnagram("anagram", "nagaram"));


