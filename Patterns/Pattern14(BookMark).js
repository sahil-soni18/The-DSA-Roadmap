/*
D
C D
B C D
A B C D
*/

let n = 4;
let ch = "A";

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    let charCode = ch.charCodeAt(0) + (n - 1 - i + j);
    let character = String.fromCharCode(charCode);
    row += character + " ";
  }

  console.log(row);
}
