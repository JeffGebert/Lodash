const _ = require('./lodash.js')
let ages = [650,30,30,31,32,50,50]
let unique = _.uniq(ages)
let sum = _.sum(unique)
let sort = _.sortBy(unique)

console.log('unique', unique)
console.log('sum',sum)
console.log('sort',sort)


//1.Create a collection of products
//2.order products by price
//3.extract unique products by code
//4.add 10% tax to each products
//5.calculate total price of all products


products = [
  {
    name:"shoes",
    price:105,
		barcode:0001
  },
	{
    name:"sweater",
    price: 55,
		barcode:0002
  },
  {
    name:"sweater",
    price: 55,
		barcode:0002
  },
	{
    name:"sunscreen",
    price:15,
		barcode:0004
  },
  {
    name:"shorts",
    price:45,
		barcode:0003
  },
  {
    name:"sunscreen",
    price:15,
		barcode:0004
  },
  {
    name:"flipflops",
    price:65,
		barcode:0005
  },
  {
    name:"jeans",
    price:85,
		barcode:0006
  },
	{
    name:"tshirt",
    price:25,
		barcode:0008
  },
  {
    name:"sunglasses",
    price:250,
		barcode:0007
  },
  {
    name:"tshirt",
    price:25,
		barcode:0008
  },
	{
    name:"shoes",
    price:105,
		barcode:0001
  },
  {
    name:"hat",
    price: 45,
		barcode:0009
  },
  {
    name:"jersey",
    price:150,
		barcode:0010
  },
	{
    name:"shoes",
    price:105,
		barcode:0001
  },
	{
    name:"jersey",
    price:150,
		barcode:0010
  }
]

let sort2 = _.sortBy(products, [function(o) { return o.price; }]);
let unique2 = _.uniqBy(products, 'barcode');
console.log(sort2)
console.log("break")
console.log(unique2)

let tax =_.map(products, (p) =>{
	return{
		name:p.name,
		price:p.price*1.1,
		barcode:p.barcode
	}
})

console.log(tax)

let total_sum = _.sumBy(tax,'price')
console.log("total sum",total_sum)
