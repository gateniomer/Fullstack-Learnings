// The key thing here is that we learned a new pattern with you state.
// We learned about setting an object, but only when that object is always going to be tied together to some specific logic.

import { 
  signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import {useDispatch} from 'react-redux';
import {googleSignInStart,emailSignInStart} from '../../store/user/user.action'

const defaultFormFields = {
  email: '',
  password: ''
}
const SignInForm = () => {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {email,password} = formFields;
  const dispatch = useDispatch();

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try{
      dispatch(emailSignInStart(email,password));
      resetFormFields();
    }catch(e){
      console.log('test');
      switch(e){
        case 'auth/user-not-found':
          alert('auth/user-not-found');
          break;
        case 'auth/wrong-password':
          alert('auth/wrong-password');
          break;
        default:
          console.log('test',e);
      }
    }
    
  }

  const signInWithGoogle = async () =>{
    dispatch(googleSignInStart());
  }

  return(
    <div className='sign-in-container'>
      <h2>Sign In</h2>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, eum?</span>
      <form onSubmit={handleSubmit}>
        {/* <label>Display Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName}/> */}

        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>

        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>

        <div className='buttons-container'>
        <Button type='submit'>Sign In</Button>
        <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;