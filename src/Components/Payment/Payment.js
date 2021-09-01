import React from 'react';

const Payment = (props) => {
    if (props.successful){
        return (
            <div>
                <p>Your have landed on the payment page.</p>
                <p>{props.selectedValue}</p>
            </div>
        );
    }
}

export default Payment;