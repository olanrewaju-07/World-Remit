import React, { useState } from 'react'
import "./CurrencyConverter.css"
import CurrencySelect from '../CurrencySelect/CurrencySelect'
import PaymentMethod from '../PaymentMethod/PaymentMethod';

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("GBP")
  const [toCurrency, setToCurrency] = useState("PHP");
  return (
    <div className="currency-converter">
      <form className="form-container">
        <div className="form-text">
          <p className="form-title">Exchange Rate</p>
          <h3 className="form-result">1 SEK = 5.2971 PHP</h3>
        </div>
        <div className="form-input-select">
          <input type="text" placeholder="You send" required />
          <CurrencySelect selectedCurrency={fromCurrency} />
        </div>
        <div className="form-input-select">
          <input type="text" placeholder="They get" required />
          <CurrencySelect  selectedCurrency={toCurrency}/>
        </div>
        <div className="form-receive-method">
          <p className="form-receive-title">Receive method</p>
          <PaymentMethod />
        </div>
      </form>
    </div>
  );
}
export default CurrencyConverter