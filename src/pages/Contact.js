import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {useNavigate} from 'react-router-dom';
import ButtonBack from '../components/ButtonBack'
import ButtonSend from '../components/ButtonSend'

function ContactForm() {

    const Navigate = useNavigate();
    const NavigateHome = () => {
    //this is so the user returns back to the same page after clicking the send button
    Navigate('/pages/anslagstavlan');
  }; 


  const [state, handleSubmit] = useForm("xwkyylry");
  if (state.succeeded) {
      return (
          <div>
              <p>Tack för att du kontaktar oss. Vi hör av oss snarast!</p>
              <ButtonBack onClick={NavigateHome}></ButtonBack>
          </div>
      
      
      )
  }

  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <ButtonSend type="submit" disabled={state.submitting}>
        Submit
      </ButtonSend>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
