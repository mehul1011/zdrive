import React, { useState } from "react";
import Payment from '../Payment/Payment';
import './Vehicle.css'

const Vehicle = (props) => {

    const [selectedValue, setSelectedValue] = useState("audi");
    const [successful, setSuccessful] = useState(false);
    const dropDownValue = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
        setSuccessful(true);
    }

    return (
        <div>
            {successful !== true ? 
            
            <div className="car-border">
            <h2>Your Pick Up Address is: <span>{props.enteredPick}</span></h2>
            <h2>Your Drop Address is: <span>{props.enteredDrop}</span></h2>

            <label htmlFor="cars">Choose a car: </label>

            <select className="dropdown-select" id="cars" onChange={dropDownValue}>
                <option value="volvo">Volvo</option>
                <option value="sedan">Sedan</option>
                <option value="micro cabs">Micro Cabs</option>
                <option value="pool cabs" defaultValue>Pool Cabs</option>
            </select>
        </div>
            
            :
                <Payment successful={successful} selectedValue={selectedValue}/>
            
            }
        </div>
    );
}

export default Vehicle;