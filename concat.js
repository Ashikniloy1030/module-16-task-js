const first = 'Ashik';
const last = 'Niloy';
// const fullName = first + last;
// terminal output: AshikNiloy

const fullName = first + ' ' + last;  //স্পেস ব্যবহার করা হয়েছে।
//terminal output: Ashik Niloy 
// console.log (fullName);
//----------------------
const fullName2 = first.concat(' ').concat(last);
//terminal output: Ashik Niloy
console.log(fullName2);
