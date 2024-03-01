const numx = [1, 3, 4, 5, [5, 6, 7, [11, 2, 3, 4]], 6];

//!  function flatArray(arr) {
//!  let newArr = [];
//! arr.forEach((item, index) => {
//!  if (Array.isArray(item)) {
//!       newArr = newArr.concat(flatArray(item));
// !    } else {
// !     newArr.push(item);
// !    }
// !  });
// !  return newArr;
//! }
//! const result = flatArray(numx);
//! console.log(result);

function flatArray(arr) {
  let newarr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      newarr = newarr.concat(flatArray(element));
    } else {
      newarr.push(element);
    }
  });
  return newarr;
}
const result = flatArray(numx);
console.log(result);
