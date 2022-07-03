import {createContext,useState,useEffect,useReducer} from 'react';
import { onAuthStateChangedListiner,signOutUser} from '../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

export const USER_ACTION_TYPE = {
  SET_CURRENT_USER:'SET_CURRENT_USER'
}
export const userReducer = (state,action) => {
  console.log('dispached');
  console.log(action);
  const {type,payload} = action;

  switch(type){
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return{
        ...state,
        currentUser:payload
      }
    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }
}

const INITIAL_STATE = {
  currentUser:null
}
export const UserProvider = ({children}) => {
  // const [currentUser,setCurrentUser] = useState(null);
  const [state,dispatch] = useReducer(userReducer,INITIAL_STATE);
  const {currentUser} = state;

  const setCurrentUser = (user)=>{
    dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER,payload:user})
  }

  const value = {currentUser,setCurrentUser};
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListiner((user)=>{
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  },[]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}