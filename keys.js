const computer = {
  brand: 'lenovo',
  price: 40000,
  processor: 'intel',
  hdd: '512gb',
}
const keyDekhlam = Object.keys(computer);
console.log(keyDekhlam);
//terminal output: [ 'brand', 'price', 'processor', 'hdd' ]
const valueDekhbo = Object.values(computer);
console.log(valueDekhbo);
//terminal output: [ 'lenovo', 40000, 'intel', '512gb' ]
delete computer.brand;
console.log(computer);
//terminal output: { price: 40000, processor: 'intel', hdd: '512gb' }