// The key thing here is that we learned a new pattern with you state.
// We learned about setting an object, but only when that object is always going to be tied together to some specific logic.

import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields,setFormFields] = useState(defaultFormFields);
  const {displayName,email,password,confirmPassword} = formFields;

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name,value);
    setFormFields({...formFields, [name]: value});
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      alert('Password does not match!');
      return;
    }
    try{
      const {user} = await createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user,{displayName})
      resetFormFields();
    }catch(e){
      console.log('error creating user',e);
    }
    

  }

  return(
    <div>
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, eum?</h1>
      <form onSubmit={handleSubmit}>
        {/* <label>Display Name</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName}/> */}
        <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>

        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>

        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>

        <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm;