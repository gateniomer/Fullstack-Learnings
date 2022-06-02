import { initializeApp } from 'firebase/app';
import {
  getAuth,signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwZCvZuBedFbD25zmdxu3rmXGj6CJXsoI",
  authDomain: "e-store-db-fc1b1.firebaseapp.com",
  projectId: "e-store-db-fc1b1",
  storageBucket: "e-store-db-fc1b1.appspot.com",
  messagingSenderId: "921710926045",
  appId: "1:921710926045:web:d16b91705a8690ea97a334"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation ={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db,'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    }catch(e){
      console.log('error creating user',e);
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}