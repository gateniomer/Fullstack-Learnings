// The key thing here is that we learned a new pattern with you state.
// We learned about setting an object, but only when that object is always going to be tied together to some specific logic.

import { ChangeEvent, FormEvent, useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";
import {useDispatch} from 'react-redux';
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {displayName,email,password,confirmPassword} = formFields;
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
    if(password !== confirmPassword){
      alert('Password does not match!');
      return;
    }
    try{
      dispatch(signUpStart(email,password,displayName));
      resetFormFields();
    }catch(e){
      console.log('error creating user',e);
    }
    

  }

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, eum?</span>
      <form onSubmit={handleSubmit}>
        {/* <label>Display Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName}/> */}
        <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>

        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>

        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>

        <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;