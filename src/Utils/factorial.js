let x = 8;
// function

const fatorial = (num) => {
  let ans = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = 2; i <= num; i++) {
    ans = ans * i;
  }
  return ans;
};
const y = fatorial(x);
console.log(y);
