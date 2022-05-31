import { initializeApp } from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

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

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
}