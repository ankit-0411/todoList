const num = [4, 5, 6, 544, 3, 4, 5, 1, 6665, 54, 3, 3, 3, 45];

function maxNumb() {
  let maxNum = -Infinity;

  for (var i = 0; i < num.length; i++) {
    if (maxNum < num[i]) {
      maxNum = num[i];
    }
  }
  return maxNum;
}
const output = maxNumb(num);
console.log(output);
