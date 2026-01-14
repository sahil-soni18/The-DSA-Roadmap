/* 
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
*/


let n = 4;

for ( let i = 0; i < n; i++ ) {
    let row = "";
    for (let j = 1; j <= n; j++ ) {
        row += j + " ";
    }
    
    console.log(row);
}