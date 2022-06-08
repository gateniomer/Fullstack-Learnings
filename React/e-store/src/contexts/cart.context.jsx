import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItems: [],
  addItemToCart: ()=> {}
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

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems,item));
  }
  const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems};
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}