import React, { useState, useRef, useEffect } from 'react'
import "./HeroPayment.css"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { assets } from '../../assets/assets';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { country_list } from '../../assets/assets';

const HeroPayment = () => {
  const [arrowClick, setArrowClick] = useState();
  const [dropdownVisible, setDropdownVisible]= useState(false);
  const [countrySelect, setCountrySelect] = useState({name:'country', image: ""})

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  const handleArrowClick = (arrow) => {
    setArrowClick(arrow);
  };

  // setting the default country when the component is mount
   useEffect(() => {
     if (country_list.length > 0) {
       setCountrySelect(country_list[0]); // Set the first country as default
     }
   }, []);

  const handleCountrySelect = (country) => {
    setCountrySelect(country);
    setDropdownVisible(false)
  }

  // Function for the slider
    const slider = useRef();
     let tx = 0;
     const sliderForward = () => {
       if (tx > -60) {
         tx -= 25;
         handleArrowClick("forward");
       }
       slider.current.style.transform = `translateX(${tx}%)`;
     };
     const sliderBackword = () => {
       if (tx < 0) {
         tx += 25;
         handleArrowClick("backward");
       }
       slider.current.style.transform = `translateX(${tx}%)`;
     };
  
    

  return (
    <div className="hero-payment">
      <div className="section1-text">
        <h3>Payment methods for international transfer</h3>
        <p>
          {" "}
          We offer you a choice of ways to pay for your money transfers. But the
          choice will depend on where you're sending your money from. Please
          remember, that credit card payments may incur a fee from your credit
          card issuer, which may affect the received amount.
        </p>
      </div>
      <div className="arrow-icon arrows">
        <ArrowBackIcon
          onClick={sliderBackword}
          className={`wide-arrow ${
            arrowClick === "backward" ? "selected" : ""
          }`}
        />
        <ArrowForwardIcon
          onClick={sliderForward}
          className={`wide-arrow ${arrowClick === "forward" ? "selected" : ""}`}
        />
      </div>
      <div className="hero-payment-container container" ref={slider}>
        <div className="hero-payment-card">
          <div className="hero-payment-text">
            <h2>Bank deposit</h2>
            <p>You can pay for your transfer using bank transfer</p>
          </div>
          <a href="">Learn more</a>
        </div>
        <div className="hero-payment-card">
          <div className="hero-payment-text">
            <h2>Debit card</h2>
            <p>
              Paying with Debit Card is quick and easy.its also cheaper than a
              credit card.
            </p>
          </div>
          <a href="">Learn more</a>
        </div>
        <div className="hero-payment-card">
          <div className="hero-payment-text">
            <h2>Credit card</h2>
            <p>Credit card issuer may charge an advance payment fee.</p>
          </div>
          <a href="">Learn more</a>
        </div>
      </div>
      <div className="hero-payment-section2">
        <div className="section2-image">
          <img src={assets.howreceive_icon} alt="" />
        </div>
        <div className="section2-text">
          <div className="section2-text-header">
            <h2>How much does it cost to send money internationally?</h2>
            <p>
              We consistently look for ways to keep transfer costs low, so that
              you send as much of your hard-earned money as possible.
            </p>
          </div>
          <div className="list-text">
            <ul>
              <li>
                We're on average <strong>46% cheaper</strong> than most banks.
              </li>
              <li>
                There are<strong> no hidden fees.</strong> You'll see all our
                fees upfront.
              </li>
              <li>
                Our currency converter shows you the{" "}
                <strong>exchange rates,</strong> and once you select your
                receive method and delivery partner, you'll see the total amount
                your receiver will get.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="section3-left">
          <h2>Your money is safe our hands</h2>
          <p>
            We are licensed by government regulators around the world, so you
            can be sure we meet the highest possible security and compliance
            standards.
          </p>
          <div className="section3-left-dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <div className="img-name" countrySelect={countrySelect}>
                <img src={countrySelect.image} alt={countrySelect.name} />
                <h4>{countrySelect.name}</h4>
              </div>
              <ArrowDropDownIcon className="arrow-drop" />
            </div>
            {dropdownVisible && (
              <div className="country-image-select">
                {country_list.map(({ id, name, image }) => (
                  <div
                    className="section3-left-dropdown-content"
                    key={id}
                    onClick={() => handleCountrySelect({ name, image })}
                  >
                    <img src={image} alt="" />
                    <p>{name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="section3-right">
          <p>
            WorldRemit Ltd is Authorised and Regulated by the Financial Conduct
            Authority (FCA) under the Payment Service Regulations 2017 and
            Electronic Money Regulations 2011. Registration number: 900891.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroPayment