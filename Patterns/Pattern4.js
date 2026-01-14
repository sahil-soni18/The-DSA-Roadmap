/* 
1 2 3
4 5 6
7 8 9
*/

let n = 3;

let i = 0;
let num = 1;

while (i < n) {
  let j = 0;
  while (j < n) {
    process.stdout.write(num + " ");
    j++;
    num++;
  }
  console.log();
  i++;
}
