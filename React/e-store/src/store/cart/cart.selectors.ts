import {createSelector} from 'reselect';
import { CART_STATE } from './cart.reducer';

const selectCartReducer = (state):CART_STATE => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total,item)=>total+=item.quantity,0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total,{quantity,price})=>total+=quantity*price,0)
)