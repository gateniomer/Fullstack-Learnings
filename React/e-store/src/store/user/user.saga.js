import { takeLatest,put,all,call, take } from "redux-saga/effects";
import { USER_ACTION_TYPE } from "./user.types";
import { signInSuccess,signInFailed,signUpFailed, signUpSuccess } from "./user.action";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser } from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails){
  try{
    const userSnapshot = yield call(createUserDocumentFromAuth,userAuth,additionalDetails);
    yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data()}));
  }catch(error){
    yield put(signInFailed(error))
  }
}

export function* isUserAuthenticated(){
  try{
    const userAuth = yield call(getCurrentUser);
    if(!userAuth) return;
    yield call(getSnapshotFromUserAuth,userAuth);
  }catch(error){
    yield put(signInFailed(error))
  }
}

export function* signInWithGoogle(){
  try{
    const {user} = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth,user);
  }catch(error){
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({payload:{email,password}}){
  try{
    console.log(email,password);
    const {user} = yield call(signInAuthUserWithEmailAndPassword,email,password);
    yield call(getSnapshotFromUserAuth,user);
  }catch(error){
    yield put(signInFailed(error));
  }
}

export function* signUp({payload:{email,password,displayName}}){
  try{
    const {user} = yield call(createAuthUserWithEmailAndPassword,email,password);
    yield put(signUpSuccess(user,{displayName}));
  }catch(error){
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({payload: {user,additionalDetails}}){
  yield call(getSnapshotFromUserAuth,user,additionalDetails);
}

export function* onEmailSignInStart(){
  yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onGoogleSignInStart(){
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onCheckUserSession(){
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION,isUserAuthenticated);
}

export function* onSignUpStart(){
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START,signUp);
}

export function* onSignUpSuccess(){
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS,signInAfterSignUp);
}

export function* userSagas(){
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    ])
}