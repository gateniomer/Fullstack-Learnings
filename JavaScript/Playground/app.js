// const multiplyBy = function(multiplier){
//   return function(num){return num*multiplier};
// }
// const multiplyBy = (multiplier) => (num) => multiplier * num;

// console.log(multiplyBy(6)(4));

// const multiplyByTwo = multiplyBy(2);
// const multiplyByTen = multiplyBy(10);

// console.log(multiplyByTwo(10));
// console.log(multiplyByTen(10));

// const attackType = (type = 'melee') => (range = 1) => console.log(`${type} attack with range of ${range}`);

// const spearAttack = attackType();
// const magicBallAttack = attackType('magic');
// console.log(spearAttack());
// console.log(magicBallAttack(4));

// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const item = {
  name:'book',
  price: 32
}

function getItemWithTax(item,tax){
  const taxMulitplier = tax/100;
  item.price = item.price + item.price*taxMulitplier;
  return item;
}
function addItemToCart(user,item){
  user.cart.push(item);
}
function removeItemFromUserCart(user,id){
  const item = user.cart.splice(id,1);
  return item;
}
function buyItem(user,id){
  const boughtItem = removeItemFromUserCart(user,id);
  user.purchases.push(boughtItem);
}
function emptyCart(user){
  user.cart = [];
}

const itemToAdd = getItemWithTax(item,3);
addItemToCart(user,itemToAdd);
console.log(user);
// buyItem(user,0);
emptyCart(user);



//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.
