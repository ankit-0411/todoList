//! reverse string :- given a sting revrse each word of sentance

const x = "hey ram how are you";
var reverseOutput = x.split(" ").map((e) => e.split("").reverse().join(" "));

console.log(reverseOutput.join(" "));

//! how to check if provided object is an array or not
function checkArray(input) {
  if (Array.isArray(input)) {
    console.log(true);
  } else console.log(false);
}
checkArray([]);
checkArray({});

//! how to  empty an array but without reseting
let y = [1, 2, 3, 4, 5];
y.length = 0;
console.log(x);

//! how to find interger without isIntiger() method

const B = 12;
if (B % 1 === 0) {
  console.log("INTIGER!!!");
} else console.log("NOT AN INTIGER !!");

//! CHECK THE OCCURANCED OF THE WORD
let a = "apple";
//a:1
//p:2
//l:1
//e:1

function CheckOccurances(el) {
  const occurances = {};
  el.split("").forEach((item) => {
    if (occurances.hasOwnProperty(item) === false) {
      occurances[item] = 1;
    } else {
      occurances[item]++;
    }
  });
  return occurances;
}
console.log(CheckOccurances(a));

//! Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
function longestString(str) {
  let new_str = "";
  str.split(" ").forEach((item) => {
    if (new_str.length < item.length) {
      new_str = item;
    }
  });
  return new_str;
}

//! Counts the number of vowels within a string
const word = "The quick brown fox";

function vowelCount(str) {
  let vowel = "aeiou";
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
const op = vowelCount(word);
console.log(op);
