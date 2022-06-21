import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () =>{
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = ()=>{
    navigate('/checkout');
  }
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
      </div>
      <Button onClick={goToCheckoutHandler} href='test'>Checkout</Button>
    </div>
  )
}
export default CartDropDown;