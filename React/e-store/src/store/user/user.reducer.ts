import { USER_ACTION_TYPE } from "./user.types";

import { signInFailed,signUpFailed,signOutFailed,signOutSuccess,signInSuccess } from "./user.action";

import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";

export type USER_STATE = {
  readonly currentUser: UserData | null,
  readonly isLoading: boolean,
  readonly error: Error | null
}

const INITIAL_STATE: USER_STATE = {
  currentUser:null,
  isLoading: false,
  error: null
}
export const userReducer = (state=INITIAL_STATE,action: AnyAction) => {

  if(signInSuccess.match(action)){
    return{
      ...state,
      currentUser:action.payload
    }
  }
  if(signOutSuccess.match(action)){
    return{
      ...state,
      currentUser: null
    }
  }
  if(signInFailed.match(action)||signOutFailed.match(action)||signUpFailed.match(action)){
    return{
      ...state,
      error: action.payload
    }
  }

  return state;
  // switch(type){
  //   case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
  //     return{
  //       ...state,
  //       currentUser:payload
  //     }
  //   case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
  //     return{
  //       ...state,
  //       currentUser: null
  //     }
  //   case USER_ACTION_TYPE.SIGN_IN_FAILED:
  //   case USER_ACTION_TYPE.SIGN_UP_FAILED:
  //   case USER_ACTION_TYPE.SIGN_OUT_FAILED:
  //     return{
  //       ...state,
  //       error: payload
  //     }
  //   default:
  //     return state;
  // }
}