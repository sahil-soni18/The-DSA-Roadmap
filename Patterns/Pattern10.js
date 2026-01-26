/*
A A A
B B B
C C C
*/

let n = 4;
let ch = "A";

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    char = ch.charCodeAt(0) + i;
    row += String.fromCharCode(char) + " ";
  }
  console.log(row);
}

/*
char.charCodeAt(0)   // char → number
String.fromCharCode(num) // number → char

'A'.charCodeAt(0)        // 65
String.fromCharCode(66) // 'B'
*/
