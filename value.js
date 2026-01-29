//কোন অবজেক্ট ডিক্লার করার পর অবজেক্ট এর ভ্যালু চেঞ্জ করা যায়।
const changeKorbo = {
  ashik: 'valo chele',
  niloy: 'dur giye mor',
  'masher beton':10000,
}
changeKorbo.ashik = 'kharap manush';
changeKorbo['masher beton'] = 30000;
console.log(changeKorbo.ashik);
console.log(changeKorbo['masher beton']);
// terminal output: 
// kharap manush
// 30000