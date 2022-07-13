import { Fragment,useContext } from "react";
import { Outlet} from "react-router-dom"
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import { signOutUser } from "../../utils/firebase/firebase.utils";


import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { selectIsCartOpen } from "../../store/cart/cart.selectors";
import { signOutStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const Navigation = () =>{
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signOutStart());
  }

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
            currentUser ? (<NavLink as='span' onClick={signOutHandler}>
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