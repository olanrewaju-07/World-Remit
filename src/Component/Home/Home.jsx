import React from 'react'
import "./Home.css"
import { assets } from '../../assets/assets';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <h2>Fast, flexible and secure money transfers</h2>
        <p>Fast, flexible and secure international money transfers across the world. Save time and money when you send money internationally with us.</p>
        <button>Send money</button>
        <div className="home-left-down-content">
          <img src={assets.trust_logo} alt="" />
          <hr />
          <a href="">Great<br />82,565+ reviews</a>
        </div>
      </div>
      <div className="home-right">
        <div className="home-right-container">
          <CurrencyConverter />
        </div>
      </div>
    </div>
  );
}

export default Home