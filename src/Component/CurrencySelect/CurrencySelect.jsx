import React, { useState } from 'react'
import "./CurrencySelect.css"
import SearchIcon from "@mui/icons-material/Search";

const ConverterSelect = ({selectedCurrency="",handleCurrency}) => {
   const [searchInput, setSearchInput] = useState("")

 // Array of currency codes
const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
];

//Extract the country cody from the selected currency code
 const countryCode = selectedCurrency.substring(0,2);

  // Filtered currency codes based on search input
  const filteredCurrencyCodes = currencyCodes.filter(currency =>
    currency.toLowerCase().includes(searchInput.toLowerCase())
  );


  return (
    <div>
      <div className="currency-select">
        {countryCode && (
          <img
            src={`https://flagsapi.com/${countryCode}/flat/64.png`}
            alt="Flag"
          />
        )}
        <div className="input-search-icon">
          <SearchIcon />
          <input
            type="text"
            placeholder="Enter a country or currency"
            className="currency-search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <select
          className="currency-dropdown"
          value={selectedCurrency}
          onChange={handleCurrency}
        >
          {filteredCurrencyCodes.map((currency) => (
            <option key={currency} value={currency} selected>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ConverterSelect