// using set method -->
let arr = [1, 2, 3, 3, 4, 5, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

//using filter
const uniqArrayfilter = arr.filter((item, index, org_array) => {
  return org_array.indexOf(item) === index;
});
console.log("uniqArrayfilter->", uniqArrayfilter);

// Using ForEach
let uniqArrayforEach = [];
arr.forEach((item, index) => {
  if (!uniqArrayforEach.includes(item)) {
    uniqArrayforEach.push(item);
  }
});
console.log("uniqArrayforEach-->", uniqArrayforEach);
