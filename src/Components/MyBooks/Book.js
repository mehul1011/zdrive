import React, { useState } from 'react';
import './Book.css'
import { Link } from 'react-router-dom'
import Credential from '../MyCredential/Credential'



function Book(props){

    const [enteredMobile, setEnteredMobile] = useState("")
    const [enteredName, setEnteredName] = useState("")
    const [enteredAddr, setEnteredAddr] = useState("")
    const [correctData, setCorrectData] = useState(false);



      const submitHandler = (event) => {
        event.preventDefault();
        console.log("loeee")
        const userData = {
      mobile: enteredMobile,
      name: +enteredName,
      address: enteredAddr,
    };
    setCorrectData(true);
      };

    const submitHandlerForOtp = (event) => {
      event.preventDefault();
      console.log("hellow")      
    }


      const mobileChangeHandler = (event) => {
        setEnteredMobile(event.target.value);
      }

      const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
      }

      const addrChangeHandler = (event) => {
        setEnteredAddr(event.target.value);
      }


    return (
      <>
      {correctData === false ? <div className="form-all">
        <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Mobile Number (Format: +911234567890)</label>
          <input
            type="tel"
            value={enteredMobile}
            onChange={mobileChangeHandler}
            pattern="([+][9][1][0-9]{10})"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Your Address</label>
          <input
            type="text"
            maxLength="50"
            minLength="15"
            value={enteredAddr}
            onChange={addrChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__action">
        
        <Link to="/">
                <button onClick={props.onCancel} type="button">
          Cancel
        </button>
            </Link>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    
    : 

      <Credential enteredMobile={enteredMobile}/>
    }
      </>
    );
}

export default Book;