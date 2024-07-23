import React, { useState } from 'react'
import "./PaymentMethod.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PaymentMethod = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="payment-method">
      <div className="btn-icon">
        <button onClick={toggleDown} className="payment-select-button">
          Bank transfer
        </button>
        <ArrowDropDownIcon />
      </div>
      {isOpen && (
        <div className="payment-options">
          <div className="payment-option">
            <h1>Bank Transfer</h1>
            <h2>Send directly to a bank</h2>
            <p>
              Transfer under 50k PHP should arrive on the same day. Anything
              above the day will take 1-2 working days.
            </p>
          </div>
          <div className="payment-option">
            <h1>Cash Pickup</h1>
            <h2>Send money for cash pickup</h2>
            <p>
              95% of WorldRemit cash pickup transfers are available to collect
              in 3 minutes.
            </p>
          </div>
          <div className="payment-option">
            <h1>Mobile Money</h1>
            <h2>Send money via mobile money</h2>
            <p>
              90% of WorldRemit Mobile money transfers are received in less than
              10 minutes.
            </p>
          </div>
          <div className="payment-option">
            <h1>Airtime Top up</h1>
            <h2>Send money for airtime top up</h2>
            <p>
              90% of WorldRemit airtime transfers are received in less than 10
              minutes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentMethod