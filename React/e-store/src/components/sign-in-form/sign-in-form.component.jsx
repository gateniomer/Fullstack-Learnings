// The key thing here is that we learned a new pattern with you state.
// We learned about setting an object, but only when that object is always going to be tied together to some specific logic.

import { 
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  email: '',
  password: ''
}
const SignInForm = () => {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {email,password} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const {user} = await signInAuthUserWithEmailAndPassword(email,password);
      resetFormFields();
    }catch(e){
      switch(e.code){
        case 'auth/user-not-found':
          alert('auth/user-not-found');
          break;
        case 'auth/wrong-password':
          alert('auth/wrong-password');
          break;
        default:
          console.log(e);
      }
    }
    
  }

  const signInWithGoogle = async () =>{
    await signInWithGooglePopup();
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
        <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;