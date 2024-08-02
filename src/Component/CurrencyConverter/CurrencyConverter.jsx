import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./CurrencyConverter.css"
import CurrencySelect from '../CurrencySelect/CurrencySelect'
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import CurrencyPartner from '../CurrencyPartner/CurrencyPartner';

const CurrencyConverter = () => {
    const [selectedCurrency1, setSelectedCurrency1] = useState("GBP");
    const [selectedCurrency2, setSelectedCurrency2] = useState("USD");
     const [amount, setAmount] = useState(""); // State for the amount to convert
     const [conversionRate, setConversionRate] = useState(1); // State for exchange rate
     const [convertedAmount, setConvertedAmount] = useState(""); 
     const [isFormSubmited, setIsFormSubmited] = useState(false);
     const [isCancelButtonVisible, setIsCancelButtonVisible] = useState(false);

    const handleCurrencyChange1 = (currencyCode) => {
      setSelectedCurrency1(currencyCode);
    };
     const handleCurrencyChange2 = (currencyCode) => {
       setSelectedCurrency2(currencyCode);
     };

       useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        // Example API call - replace with your own API and endpoint
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${selectedCurrency1}`);
        const rate = response.data.rates[selectedCurrency2];
        setConversionRate(rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [selectedCurrency1, selectedCurrency2]);

  useEffect(() => {
    if (amount !== "") {
      const converted = (amount * conversionRate).toFixed(2);
      setConvertedAmount(converted);
    }
  }, [amount, conversionRate]);

  const handleFormSubmited = (e) =>{
    e.preventDefault();
    setIsFormSubmited(true);
    setIsCancelButtonVisible(true); 
  }

  const resetForm = () => {
    setSelectedCurrency1("GBP");
    setSelectedCurrency2("USD");
    setAmount("");
    setConversionRate(1);
    setConvertedAmount("");
    setIsFormSubmited(false);
    setIsCancelButtonVisible(false);
  };



  return (
    <div className="currency-converter">
      <form className="form-container" onSubmit={handleFormSubmited}>
        <div className="form-text">
          <p className="form-title">Exchange Rate</p>
          <h3 className="form-result">
            1 {setSelectedCurrency1} = {conversionRate} {selectedCurrency2}{" "}
          </h3>
        </div>
        <div className="form-input-select">
          <input
            type="text"
            placeholder="You send"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <CurrencySelect
            selectedCurrency={selectedCurrency1}
            handlecurrency={handleCurrencyChange1}
          />
        </div>
        <div className="form-input-select">
          <input type="text" placeholder="They get" value={convertedAmount} />
          <CurrencySelect
            selectedCurrency={selectedCurrency2}
            handlecurrency={handleCurrencyChange2}
          />
        </div>
        <div className="form-receive-method">
          <p className="form-receive-title">Receive method</p>
          <PaymentMethod />
        </div>
        {isFormSubmited && (
          <div className="form-partner-select">
            <p className="form-partner-title">Bank transfer partner</p>
            <CurrencyPartner />
          </div>
        )}
        <button type="submit" className="btn-submit">
          Continue
        </button>
        {isCancelButtonVisible && (
          <button type="button" className="btn-cancel" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
export default CurrencyConverter