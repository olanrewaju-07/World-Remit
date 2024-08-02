import React, { useState } from 'react'
import "./CurrencyPartner.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const CurrencyPartner = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [selectedOption, setSelectedOption] = useState(null)

   const toggleDown = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
   }

   const handleOptionClick = (option) => {
    setSelectedOption(option)
   }

  return (
    <div className="currency-partner">
      <div className="btn-icon" onClick={toggleDown}>
        <button className="partner-select-button">Select partner</button>
        <ArrowDropDownIcon className="icon" />
      </div>
      {isOpen && (
        <div className="partner-options">
          <div className="partner-option-header">
            <h2>Bank Transfer partner</h2>
          </div>
          <div
            className={`partner-option ${
              selectedOption === "PNB PHP accounts" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("PNB PHP accounts")}
          >
            <span>PNB PHP accounts</span>
          </div>
          <div
            className={`partner-option ${
              selectedOption === "BDO Unibank PHP accounts" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("BDO Unibank PHP accounts")}
          >
            <span>BDO Unibank PHP accounts</span>
          </div>
          <div
            className={`partner-option ${
              selectedOption === "Metrobank PHP accounts" ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("Metrobank PHP accounts")}
          >
            <span>Metrobank PHP accounts</span>
          </div>
          <div
            className={`partner-option ${
              selectedOption === "PBI and PBI Family Savings PHP accounts"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleOptionClick("PBI and PBI Family Savings PHP accounts ")
            }
          >
            <span>PBI and PBI Family Savings PHP accounts</span>
          </div>
          <div
            className={`partner-option ${
              selectedOption ===
              "Landbank, Overseas Filipino Bank and former UCPB PHP accounts"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleOptionClick(
                "Landbank, Overseas Filipino Bank and former UCPB PHP accounts"
              )
            }
          >
            <span>
              Landbank, Overseas Filipino Bank and former UCPB PHP accounts
            </span>
          </div>
          <div
            className={`partner-option ${
              selectedOption === "Any PHP accounts at any other bank"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              handleOptionClick("Any PHP accounts at any other bank")
            }
          >
            <span>Any PHP accounts at any other bank</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrencyPartner