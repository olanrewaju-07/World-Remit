import React from 'react'
import "./HeroHelp.css"
import { assets } from '../../assets/assets';
import HelpInfo from '../HelpInfo/HelpInfo';

const HeroHelp = () => {
  return (
    <div className="hero-help">
      <div className="hero-help-text">
        <h2>We will be there for you every step of the way 24/7!</h2>
        <p>
          Our app chat support is available 24/7 in 6 different languages to
          help you with anything you need.
        </p>
      </div>
      <div className="hero-help-img">
        <img src={assets.desktop_codtomer_icon} alt="" />
      </div>
      <div className="hero-help-info">
        <HelpInfo />
      </div>
      <div className="hero-help-link">
        <a href="#">Visits our FAQs</a>
      </div>
    </div>
  );
}

export default HeroHelp