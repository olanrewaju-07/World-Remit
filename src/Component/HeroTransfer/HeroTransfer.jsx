import React, { useRef, useState } from 'react'
import "./HeroTransfer.css"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { assets } from '../../assets/assets';


const HeroTransfer = () => {

  const [arrowClick, setArrowClick] = useState();

   const handleArrowClick = (arrow) => {
     setArrowClick(arrow)
   }

  // fucntion to control the movement of the arrow icon
  const slider = useRef ();
  let tx = 0;

  const sliderForward = () =>{
    if (tx > -60) {
      tx -= 25; 
      handleArrowClick('forward');
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const sliderBackword = () => {
    if (tx < 0) {
      tx += 25;
      handleArrowClick('backward');
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  
    

  return (
    <div className="hero-transfer">
      <div className="hero-header-text">
        <h2 className="hero-header">Ways to send money internationally</h2>
        <p className="hero-text">
          The cost and speed of a money transfer depends on the receiving
          country, the receive method as well as how it is paid for. Currently,
          there are a maximum of four different receive methods available on
          WorldRemit.
        </p>
      </div>
      <div className="arrow-icon">
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
      <div className="hero-payment-container" ref={slider}>
        <div className="hero-payment-card">
          <div className="hero-payment-text">
            <h2>Airtime top up</h2>
            <p>
              Top up credit for a pre-paid mobile phone number or your family
              with no extra fee.
            </p>
          </div>
          <a href="">Learn more</a>
        </div>
        <div className="hero-payment-card">
          <div className="hero-payment-text">
            <h2>Bank transfer</h2>
            <p>
              Send money directly to a bank acoount. All you need are your
              reciver's details.
            </p>
          </div>
          <a href="">Learn more</a>
        </div>
        <div className="hero-payment-card">
          <div className="hero-payment-text">
            <h2>Cash pickup</h2>
            <p>
              Send money to be collected in cash by your receiver at any of our
              pickup location.
            </p>
          </div>
          <a href="">Learn more</a>
        </div>
        <div className="hero-payment-card">
          <div className="hero-payment-text">
            <h2>Mobile money</h2>
            <p>
              Instant transfer to your reciever's register mobile money account
              number.
            </p>
          </div>
          <a href="">Learn more</a>
        </div>
      </div>
      <div className="hero-transfer-section2">
        <div className="section2-text">
          <div className="section2-header">
            <h2>How to transfer money internationally?</h2>
          </div>
          <ol>
            <li>
              <strong>Create an account</strong>
              This is simple. Just sign up using your email address on our app
              or website. And keep things secure by choosing a strong password.
            </li>
            <li>
              <strong>We’ll verify your details</strong>
              For even better security, we’ll verify who you are. But this
              should only take a few minutes.
            </li>
            <li>
              <strong>Start your transfer</strong>
              Select the receive country and method, and enter the amount you
              want to send. Our fees and exchange rates are shown upfront.
            </li>
            <li>
              <strong>Enter your receiver's details</strong>
              Have your receiver’s details to hand. These may vary depending on
              how you’re sending them the money.
            </li>
            <li>
              <strong>Pay for your transfer</strong>
              Choose how you’d like to pay for your transfer: bank deposit,
              credit or debit card.
            </li>
          </ol>
        </div>
        <div className="section2-image">
          <img src={assets.howsend_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroTransfer