import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { PaymentFormContainer,FormContainer } from './payment-form.styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selectors';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { PaymentButton } from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);
  const [isProccesingPayment,setIsProccesingPayment] = useState(false);
  
  const paymentHandler = async (e) => {
    e.preventDefault();
    if(amount*100<100){
      alert('Amount to small!');
      return;
    }
    if(!stripe || !elements) return;
    setIsProccesingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({amount: amount*100})
    }).then(res => res.json())
    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: elements.getElement(CardElement),
        billing_details: {
          name: user? user.displayName: 'Guest'
        }
      }
    })

    setIsProccesingPayment(false);
    if(paymentResult.error){
      alert(paymentResult.error.message);
    }else{
      if(paymentResult.paymentIntent.status === 'succeeded'){
        alert('Payment Successful');
      }
    }
  }
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement/>
        <PaymentButton isLoading={isProccesingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm;