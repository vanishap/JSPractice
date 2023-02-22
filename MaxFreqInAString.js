const str = "This is javascript code";
const reversing = (str) => {
  const words = str.split(" ").map((word) => {
    return word.split("").reverse().join("");
  });
  return words.join(" ");
};
console.log(reversing("This is javascript code"));

const string = "This is javascript code and you to find max char";
const maxOccur = string.split("").reduce((acc, ini) => {
  if (acc[ini]) {
    acc[ini]++;
  } else {
    acc[ini] = 1;
  }
  return acc;
}, {});
console.log(maxOccur);
let max = -Infinity;
for (const char in maxOccur) {
  if (char === " ") {
    continue;
  } else if (maxOccur[char] > max) {
    max = maxOccur[char];
  }
}
console.log(max);
