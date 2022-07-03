import { createContext, useState,useEffect,useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=> {},
  removeItemFromCart: ()=> {},
  cartItemCount: 0,
  setCartItemCount: ()=>{},
  clearItemFromCart: ()=>{},
  total:0
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemCount: 0,
  total:0
}

const CART_ACTION_TYPES = {
  SET_CART_ITEMS:'SET_CART_ITEMS',
  SET_IS_CART_OPEN:'SET_IS_CART_OPEN'
}
export const cartReducer = (state,action)=>{
  const {type,payload} = action;

  switch(type){
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return{
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return{
        ...state,
        isCartOpen:payload
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
}

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

export const CartProvider = ({children})=>{
  const [{cartItems,isCartOpen,cartItemCount,total},dispatch] = useReducer(cartReducer,INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems)=>{
    const newCount = newCartItems.reduce((total,item)=>total+=item.quantity,0);
    const newTotal = newCartItems.reduce((total,{quantity,price})=>total+=quantity*price,0);
    dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS,payload:{
      cartItemCount: newCount,
      total: newTotal,
      cartItems: newCartItems
    }})
  }

  const addItemToCart = (item) => {
    const newCartItems = addCartItem(cartItems,item);
    updateCartItemsReducer(newCartItems);
  }
  
  const removeItemFromCart = (item) =>{
    const newCartItems = removeCartItem(cartItems,item);
    updateCartItemsReducer(newCartItems);
  }

  const clearItemFromCart = (item) =>{
    const newCartItems = clearCartItem(cartItems,item);
    updateCartItemsReducer(newCartItems);
  }

  const setIsCartOpen = (bool)=>{
    dispatch({type:CART_ACTION_TYPES.SET_IS_CART_OPEN,payload:bool});
  }
  

  const value = {isCartOpen,setIsCartOpen,addItemToCart,removeItemFromCart,clearItemFromCart,cartItems,cartItemCount,total};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}