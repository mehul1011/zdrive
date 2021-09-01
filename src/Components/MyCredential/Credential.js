import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Book from '../MyBooks/Book';
import Address from '../Address/Address';
import './Credential.css'
import app from '../FireBase_config/firebase';
import 'firebase/database';
import firebase from 'firebase/app';

function Credential(props){

    console.log("mov", props.enteredMobile)

    const [receivedNumber, setReceivedNumber] = useState(props.enteredMobile)
    const [enteredOtp, setEnteredOtp] = useState("");
    const [successful, setSuccessful] = useState(false);


   const configureRecaptcha = () => {
    
    // setTimeout(function() {
    // console.log("Hello")

    //         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //     'size': 'invisible',
    //     'callback': (response) => {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    //       submitHandler();
    //       console.log("Your are verified.")
    //     }, 
    //     defaultCountry: "IN"
    //   });
    // }, 30000);
    };


const submitHandler = (event) => {
        event.preventDefault();

        setSuccessful(true)

    //     configureRecaptcha();
    //     const phoneNumber = receivedNumber;
    //     const appVerifier = window.recaptchaVerifier;
        
    //     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    // .then((confirmationResult) => {
    //   // SMS sent. Prompt user to type the code from the message, then sign the
    //   // user in with confirmationResult.confirm(code).
    //   window.confirmationResult = confirmationResult;
    //   // ...
    // }).catch((error) => {
    //   // Error; SMS not sent
    //   console.log("Error");
    // });
        


//         const phoneNumber = props.enteredMobile;



//         let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha')
//         let number = props.enteredMobile;
//         firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function(e){
//             let code = enteredOtp;
//             if (code == null){
//                 return;
//             }
//             e.confirm(code).then(function(result){
//                 console.log(result.user, "user");
//             }).catch((error) => {
//                 console.log(error);
//             })
//         })
//             console.log("mov", number)
    }

    const otpOnChangeHandler = (event) => {
        console.log("hello")
        setEnteredOtp(event.target.value);
    }

    return (
      <div>
        {successful === false ? <form onSubmit={submitHandler}>
              <div className="sign-in-button"></div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{color: "white"}}>OTP</label>
          <input
            type="text"
            minLength="6"
            maxLength="6"
            value={enteredOtp}
            onChange={otpOnChangeHandler}
            required
          />
        </div>
        
      </div>
      <div className="new-expense__action-otp">
        <button type="submit">Submit</button>
      </div>
    </form> : 

      <Address successful={successful}/>

    }
      </div>
        
    );
}

export default Credential;