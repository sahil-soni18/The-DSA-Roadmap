/*
 *
 * *
 * * *
 * * * *
 */

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  let space = "  ".repeat(n - (i + 1));
  row += space;
  for (let j = 0; j < i + 1; j++) {
    row += " *";
  }

  console.log(row);
}
