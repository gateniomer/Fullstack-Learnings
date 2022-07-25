import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.action";
import { CartItem } from "./cart.types";

export type CART_STATE = {
  readonly isCartOpen: boolean,
  readonly cartItems:CartItem[],
  readonly cartItemCount: number,
  readonly total: number
}
const INITIAL_STATE: CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemCount: 0,
  total:0
}

export const cartReducer = (state = INITIAL_STATE,action: AnyAction):CART_STATE =>{

  if(setIsCartOpen.match(action)){
    return{
      ...state,
      isCartOpen: action.payload
    }
  }
  if(setCartItems.match(action)){
    return{
      ...state,
      cartItems: action.payload
    }
  }
  return state;

  // switch(type){
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return{
  //       ...state,
  //       cartItems: payload
  //     }
  //   case CART_ACTION_TYPES.SET_IS_CART_OPEN:
  //     return{
  //       ...state,
  //       isCartOpen:payload
  //     }
  //   default:
  //     return state;
  // }
}