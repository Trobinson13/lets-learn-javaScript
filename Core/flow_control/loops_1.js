/**
 * Loops 1
 */

// For Loop

//print values from 0 to 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

for (let i = 9; i >= 0; i--) {
    console.log(i);
}
//9, 8, 7, 6, 5, 4, 3, 2, 1, 0

//While Loop

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

let wont_run = 10;

//this loop will never run becuase i = 10, and is not less than 10.
// would require a "less that or equal to" operator. Ex: wont_run <= 10
while (wont_run < 10) {
    console.log(wont_run);
    wont_run++;
}

// Do loop
let k = 10;
// Runs once because condition is checked at the end
do{
    console.log(k);
    k++;
}
while (k < 10);
