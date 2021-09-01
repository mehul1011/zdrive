import { useState } from "react";
import firebase from "../FireBase_config/firebase";
import Vehicle from "../Vehicle/Vehicle";

const Address = (props) => {

    const [enteredPick, setEnteredPick] = useState("");
    const [enteredDrop, setEnteredDrop] = useState("");
    const [successful, setSuccessful] = useState(false);

    const pickHandler = (event) => {
        setEnteredPick(event.target.value);
    };

    const dropHandler = (event) => {
        setEnteredDrop(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault()
        const addressRef = firebase.database().ref("Address");
        const address = {
            enteredPick,
            enteredDrop,
        }
        addressRef.push(address);
        setSuccessful(true);
    };

    if (props.successful === true){
        return(
            <div>
                {successful === false ? <form onSubmit={submitHandler}>
              <div className="sign-in-button"></div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{color: "white"}}>Pick-up Address</label>
          <input
            type="text"
            minLength="20"
            maxLength="50"
            value={enteredPick}
            onChange={pickHandler}
            required
          />
          <label style={{color: "white", marginTop: '30px'}}>Drop Address</label>
          <input
            type="text"
            minLength="20"
            maxLength="50"
            value={enteredDrop}
            onChange={dropHandler}
            required
          />
        </div>
        
      </div>
      <div className="new-expense__action-otp">
        <button type="submit">Submit</button>
      </div>
    </form>
    
    
    :
            
            <Vehicle enteredDrop={enteredDrop} enteredPick={enteredPick}/>
    
    }
            </div>
        );
    }
};

export default Address;