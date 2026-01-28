const address = 'Bangladesh';
const part = address.slice(0,3);
console.log(part); //output: Ban
//----------------------------------
const sentence = 'I am a good person but I am lazy'
console.log(sentence.split(' ')); //মাঝখানে স্পেস আছে
// console.log(sentence.split('a')); এই কনসলে সবগুলো a থেকে শুরু করে পরের a পর্যন্ত একটি করে শব্দ দিবে এবং a গুলো উঠে যাবে।
/*
স্পেসগুলা কেটে দিয়েছে।
Terminal Output: [
  'I',      'am',
  'a',      'good',
  'person', 'but',
  'I',      'am',
  'lazy'
]
  */
 //---------------------------
 const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
 const friends = friendsStr.split(',');
 console.log(friends);

//Terminal Output:  [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ]

const realFriend = ['Ashik', 'niloy', 'sabbir'];
console.log(realFriend.join('|'));
// Terminal Output: Ashik|niloy|sabbir
// এভাবে আরো অনেক সিম্বল ব্যবহার করে জয়েন করা যায়।