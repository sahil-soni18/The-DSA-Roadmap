/*
A B C
D E F
G H I
*/

let n = 3;
let ch = "A";
let inc = 0;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    let charCode = ch.charCodeAt(0) + inc;
    row += String.fromCharCode(charCode) + " ";
    inc++;
  }

  console.log(row);
}
