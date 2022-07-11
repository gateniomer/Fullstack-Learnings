import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selectors';
import { CartIconContainer,ShoppingIcon,ItemCount } from './cart-icon.styles';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { useDispatch,useSelector } from 'react-redux';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = ()=>{
    dispatch(setIsCartOpen(!isCartOpen));
  }
  return(
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon/>
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;