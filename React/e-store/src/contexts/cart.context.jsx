import { createContext, useState,useEffect } from "react";

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
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [cartItemCount,setCartItemCount] = useState(0);
  const [total,setTotal] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems,item));
  }
  
  const removeItemFromCart = (item) =>{
    setCartItems(removeCartItem(cartItems,item));
  }

  const clearItemFromCart = (item) =>{
    setCartItems(clearCartItem(cartItems,item));
  }

  useEffect(() => {
    const count = cartItems.reduce((total,item)=>total+=item.quantity,0);
    setCartItemCount(count);
  },[cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce((total,{quantity,price})=>total+=quantity*price,0);
    setTotal(newTotal);
  },[cartItems]);

  const value = {isCartOpen,setIsCartOpen,addItemToCart,removeItemFromCart,clearItemFromCart,cartItems,cartItemCount,total};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}