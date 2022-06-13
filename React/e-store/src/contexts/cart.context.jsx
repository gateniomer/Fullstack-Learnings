import { createContext, useState,useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=> {},
  cartItemCount: 0,
  setCartItemCount: ()=>{}
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


export const CartProvider = ({children})=>{
  const [isCartOpen,setIsCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([]);
  const [cartItemCount,setCartItemCount] = useState(0);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems,item));
  }

  useEffect(() => {
    const count = cartItems.reduce((total,item)=>total+=item.quantity,0);
    setCartItemCount(count);
},[cartItems]);
  const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartItemCount};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}