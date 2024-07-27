import React, { useState } from 'react'
import "./PaymentMethod.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PaymentMethod = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const toggleDown = () => {
    setIsOpen(!isOpen);
  }
    // Passing a dynamic class to each of dropdown option to give them border when clicked
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  } 


  return (
    <div className="payment-method">
      <div className="btn-icon" onClick={toggleDown}>
        <button className="payment-select-button">Bank Transfer</button>
        <ArrowDropDownIcon className='icon' />
      </div>
      {isOpen && (
        <div className="payment-options">
          <p className="payment-option-header">Receive Method</p>

          <div className={`payment-option ${selectedOption === 'Bank Transfer' ? 'selected' : ''}`} onClick={() => handleOptionClick('Bank Transfer')}>
            <h1>Bank Transfer</h1>
            <span>Send directly to a bank</span>
            <p>
              Transfer under 50k PHP should arrive on the same day. Anything
              above the day will take 1-2 working days.
            </p>
          </div>
          <div className={`payment-option ${selectedOption === 'Cash Pickup' ? 'selected': ''}`} onClick={() => handleOptionClick('Cash Pickup')}>
            <h1>Cash Pickup</h1>
            <span>Send money for cash pickup</span>
            <p>
              95% of WorldRemit cash pickup transfers are available to collect
              in 3 minutes.
            </p>
          </div>
          <div className={`payment-option ${selectedOption === 'Mobile Money'? 'selected': ''}`} onClick={() => handleOptionClick('Mobile Money')}>
            <h1>Mobile Money</h1>
            <span>Send money via mobile money</span>
            <p>
              90% of WorldRemit Mobile money transfers are received in less than
              10 minutes.
            </p>
          </div>
          <div className= {`payment-option ${selectedOption === 'Airtime Top up'? 'selected': ''}`} onClick={() => handleOptionClick('Airtime Top up')}>
            <h1>Airtime Top up</h1>
            <span>Send money for airtime top up</span>
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