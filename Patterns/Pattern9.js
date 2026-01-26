/*
1
2 1
3 2 1
4 3 2 1
*/

const n = 4;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = i; j > 0; j--) {
    row += j + " ";
  }
  console.log(row);
}
