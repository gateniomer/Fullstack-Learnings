import { initializeApp } from 'firebase/app';
import { Category } from '../../store/categories/categories.types';
import {
  getAuth,signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot} from 'firebase/firestore'

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
export type ObjectToAdd = {
  title:string
}
export const addCollectionAndDocuments = async <T extends ObjectToAdd> (collectionKey: string, objectsToAdd: T[]):Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object =>{
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);
  });
  await batch.commit();
  console.log('done');
}

export const getCategoriesAndDocuments = async ():Promise<Category[]> =>{
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(docSnapShot => docSnapShot.data() as Category);
};

export type AdditionalInformation = {
  displayName?: string
}

export type UserData = {
  createdAt: Date,
  displayName: string,
  email: string
}

export const createUserDocumentFromAuth = async (userAuth:User,additionalInformation = {} as AdditionalInformation): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
  return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const createAuthUserWithEmailAndPassword = async (email:string,password:string) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email:string,password:string) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListiner = (callback:NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
}

export const getCurrentUser = ():Promise<User|null> =>{
  return new Promise((resolve,reject)=>{
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth)=>{
        unsubscribe();
        resolve(userAuth);
      },
      reject)
  });
}