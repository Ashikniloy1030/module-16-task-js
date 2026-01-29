//অবজেক্ট এই ভাবে ডিক্লার করতে হয়। 
//শেষে কমা ব্যবহার করতেই হবে।

// const man = {
//     name: 'Ashik',
//     height: '5 feet 8 inch',
//     weight: '83kg',
//     age: 30,
//     address: 'dhaka, Bangladesh',
// }
// console.log(man.age); সরাসরি এই ভাবে দেখা যায়।
// const boyos = man.age;
// console.log(boyos); // কোন variable এর মধ্যে রেখে সেই variable কে দেখা যায়।
const person = {
    'Ashik Niloy': 'he is a good person',
    'he : hello': 'ei khane clone use kore variable declare kora jay',
    'fav place':['bandarban', 'cox-bazar', 'sajek'],
}
// console.log(person['Ashik Niloy']);
const ghurteJabo = person['fav place'];
console.log(ghurteJabo);

