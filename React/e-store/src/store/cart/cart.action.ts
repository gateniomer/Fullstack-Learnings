import { CategoryItem } from "../categories/categories.types";
import { createAction,withMatcher,Action,ActionWithPayload } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES,CartItem } from "./cart.types"

const addCartItem = (cartItems:CartItem[],itemToAdd:CategoryItem):CartItem[] => {
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

const removeCartItem = (cartItems:CartItem[],itemToRemove:CartItem):CartItem[] => {
  const obj = cartItems.find( (item) => item.id === itemToRemove.id);
  if(obj && obj.quantity===1){
    return clearCartItem(cartItems,itemToRemove);
  }
  return cartItems.map(item=>
    (item.id=== itemToRemove.id) ? {...item,quantity: item.quantity - 1} : item
  ); 
}

const clearCartItem = (cartItems:CartItem[],itemToRemove:CartItem)=>{
  return cartItems.filter(item=>item.id !== itemToRemove.id);
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN,boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS,CartItem[]>;


export const setIsCartOpen = withMatcher((bool: boolean):SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,bool));

export const setCartItems = withMatcher((cartItems:CartItem[]):SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems));

export const addItemToCart = (cartItems:CartItem[],item:CategoryItem) => {
  const newCartItems = addCartItem(cartItems,item);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems:CartItem[],item:CartItem) =>{
  const newCartItems = removeCartItem(cartItems,item);
  return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems:CartItem[],item:CartItem) =>{
  const newCartItems = clearCartItem(cartItems,item);
  return setCartItems(newCartItems);
}