import { CartDropDownContainer,CartItems, EmptyMessage } from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selectors';

const CartDropDown = () =>{
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = ()=>{
    navigate('/checkout');
  }
  return(
    <CartDropDownContainer>
      <CartItems>
        
        {cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>):<EmptyMessage>Cart Is Empty</EmptyMessage>}
      </CartItems>
      <Button onClick={goToCheckoutHandler} href='test'>Checkout</Button>
    </CartDropDownContainer>
  )
}
export default CartDropDown;