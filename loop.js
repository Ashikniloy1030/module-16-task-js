const mobile ={
  brand: 'oppo',
  price: 25000,
  camera: '15mp',
  isNew: true,
}
// for of= array এ্যাড়ের জন্য ফর অফ লুপ
// for in= Object অবজেক্ট এর জন্য ফর ইন লুপ

// console.log(mobile);
for(const details in mobile){
  console.log(details);
  console.log(mobile[details]);
}
/*
প্রথম কনসোল থেকে মোবাইল এর প্রথম ভেরিয়েবলের নাম নিয়ে আসে ডিটেইল এ। 
প্রথম কনসোলে ডিটেইলস এর মান প্রিন্ট করে brand, পরের কনসোলে ব্রান্ডের মান তো জানা আছে তাই পরের কনসোলে ব্রান্ডের মান oppo প্রিন্ট হয়। এখানে for in loop ব্যবহার করা হয়েছে।
*/