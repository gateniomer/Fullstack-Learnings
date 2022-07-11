import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"

export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool);

const addCartItem = (cartItems,itemToAdd) => {
  const obj = cartItems.find( (item) => item.id === itemToAdd.id);
  if(obj){
    return cartItems.map(item=>{
      if(item.id===obj.id){
        return {...obj, quantity: obj.quantity + 1};
      }
      return item;
    })
  }
  return [...cartItems,{...itemToAdd,quantity: 1}];
}

const removeCartItem = (cartItems,itemToAdd) => {
  const obj = cartItems.find( (item) => item.id === itemToAdd.id);
  if(obj.quantity===1){
    return clearCartItem(cartItems,itemToAdd);
  }
  return cartItems.map(item=>{
    if(item.id===obj.id){
      return {...obj,quantity: obj.quantity - 1};
    }
    return item;
  }); 
}

const clearCartItem = (cartItems,itemToRemove)=>{
  return cartItems.filter(item=>item.id !== itemToRemove.id);
}



export const addItemToCart = (cartItems,item) => {
  const newCartItems = addCartItem(cartItems,item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

export const removeItemFromCart = (cartItems,item) =>{
  const newCartItems = removeCartItem(cartItems,item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}

export const clearItemFromCart = (cartItems,item) =>{
  const newCartItems = clearCartItem(cartItems,item);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems);
}