const x = [3, 5, 6, 7, 8, 9, 5, 4, 2, 1, 2, 3, 5, 4];

for (var i = 0; i < x.length; i++) {
  for (var j = 0; j < x.length - 1; j++) {
    if (x[i] < x[j]) {
      var temp = x[i];
      x[i] = x[j];
      x[j] = temp;
    }
  }
}

console.log(x);
