//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.


const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const history1 = [];
const compose = (f, g) => (...args) => f(g(...args))
const pipe = (f, g) => (...args) => g(f(...args))
const purchaseItem  = (...fns) => fns.reduce(compose);
const purchaseItem2  = (...fns) => fns.reduce(pipe);
purchaseItem2(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart,
)(user, {name: 'laptop', price: 60})
// purchaseItem(
//   emptyUserCart,
//   buyItem,
//   applyTaxToItems,
//   addItemToCart
// )(user, {name: 'laptop', price: 50})
function addItemToCart(user, item) {
  history1.push(user)
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, {cart: updatedCart});
}

function applyTaxToItems(user) {
  history1.push(user)
  const {cart} = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history1.push(user)
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}
function emptyUserCart(user) {
  history1.push(user)
  return Object.assign({}, user, { cart: [] });
}

function refundItem() {

}

function getUserState() {

}

function goBack() {

}

function goForward() {

}

//My BAD code
// const user = {
//   name: 'Kim',
//   active: true,
//   cart: [],
//   purchases: []
// }

// const item = {
//   name:'book',
//   price: 32
// }

// function getItemWithTax(item,tax){
//   const taxMulitplier = tax/100;
//   item.price = item.price + item.price*taxMulitplier;
//   return item;
// }
// function addItemToCart(user,item){
//   user.cart.push(item);
// }
// function removeItemFromUserCart(user,id){
//   const item = user.cart.splice(id,1);
//   return item;
// }
// function buyItem(user,id){
//   const boughtItem = removeItemFromUserCart(user,id);
//   user.purchases.push(boughtItem);
// }
// function emptyCart(user){
//   user.cart = [];
// }

// const itemToAdd = getItemWithTax(item,3);
// addItemToCart(user,itemToAdd);
// console.log(user);
// // buyItem(user,0);
// emptyCart(user);