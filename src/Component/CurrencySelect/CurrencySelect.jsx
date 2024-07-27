import React, { useState, useEffect }  from 'react'
import "./CurrencySelect.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { country_list } from '../../assets/assets';



const CurrencySelect = ({selectedCurrency, handlecurrency}) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedCode, setSelectedCode] = useState(selectedCurrency)
  const [searchTerm, setSearchTerm] = useState("")



    useEffect(() => {
      const defaultCurrency = country_list.find(
        (currency) => currency.code === selectedCurrency
      );
      if (defaultCurrency) {
        setSelectedImage(defaultCurrency.image);
        setSelectedCode(defaultCurrency.code);
      }
    }, [selectedCurrency]);
 

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const handleCurrencySelect = (image, code) => {
    setSelectedImage(image);
    setSelectedCode(code);
    setDropdownVisible(false);
    handlecurrency(code);
  }

     const handleSearchChange = (event) => {
       setSearchTerm(event.target.value.toLowerCase());
     };

     const filteredCountries = country_list.filter(({ name }) =>
       name.toLowerCase().includes(searchTerm)
     );

  return (
    <div className="currency-select">
      <div
        className="currency-select-header"
        value={selectedCurrency}
        onClick={toggleDropdown}
      >
        {selectedImage && <img src={selectedImage} alt={setSelectedCode} className='selected-image' />}
        <strong>{selectedCode}</strong>
        <ArrowDropDownIcon />
      </div>
      {dropdownVisible && (
        <div className="currency-select-dropdown">
          <div className="select-dropdown">
            <div className="currency-select-search" onChange={handleSearchChange}>
              <SearchIcon  className='search-icon'/>
              <input type="text" placeholder="Enter a country or currency" />
            </div>
            <div className="country-code-select" onChange={handlecurrency}>
              {filteredCountries.map(({ id, name, image, code }) => (
                <div className="currency-dropdown-content" key={id} onClick={() => handleCurrencySelect(image,code)}>
                  <div className="country-img-name">
                    <img src={image} alt={name} />
                    <p>{name}</p>
                  </div>
                  <strong>{code}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrencySelect