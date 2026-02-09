/*
A B C
B C D
C D E
*/

let n = 3;
let ch = "A";

for (let i = 0; i < n; i++) {
  let row = "";
  let inc = i;
  for (let j = 0; j < n; j++) {
    let charCode = ch.charCodeAt(0) + inc;
    row += String.fromCharCode(charCode) + " ";
    inc++;
  }

  console.log(row);
}
