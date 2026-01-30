// Task-1:
// Count how many times a string has the letter a
// let str = 'Banana';

// for (let letter of str.toLowerCase()) {
//     if (letter === 'a') {
//         str++

//     }
//     console.log(letter);

// }
let str = 'Banana';
let counter = 0;
for (let count of str.toLowerCase()) {
    if (count === 'a') {
        counter++
    }


}
console.log(counter);