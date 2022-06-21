import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from '../../contexts/cart.context'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles";

const Navigation = () =>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo'/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (<NavLink as='span' onClick={signOutUser}>
            Sign Out
            </NavLink>) : (<NavLink to='/auth'>
            Sign In
          </NavLink>)
          }
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropDown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;