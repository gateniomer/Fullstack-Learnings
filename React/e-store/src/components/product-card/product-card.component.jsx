import './product-card.styles.scss';

import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selectors';
import { useDispatch, useSelector } from 'react-redux';


const ProductCard = ({product}) => {
  const {name,price,imageUrl} = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCard = () => dispatch(addItemToCart(cartItems,product));
  

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`}/>
      <div className='footer'>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add To Cart</Button>
    </div>
  )
}
export default ProductCard;