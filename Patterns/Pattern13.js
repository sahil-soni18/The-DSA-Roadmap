/*
A
B C
C D E
D E F G
*/

let n = 4;
let ch = "A";

for (let i = 0; i < n; i++) {
  let row = "";
  let inc = i;
  for (let j = 0; j < i + 1; j++) {
    let charCode = ch.charCodeAt(0) + inc;
    row += String.fromCharCode(charCode) + " ";
    inc++;
  }

  console.log(row);
}
