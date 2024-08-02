import React, { useState, useEffect } from "react";
import "./HeroCountry.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { assets } from "../../assets/assets";

const HeroCountry = () => {
  const [countries, setCountries] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [numberOfCountries, setNumberOfCountries] = useState(45)  // Default number of countries to fetch

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countriesData = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.svg,
        }));
        setCountries(countriesData.slice(0, numberOfCountries));
      })

      .catch((error) => console.error("Error fetching country data:", error));
  }, [numberOfCountries]);

  const showMoreCountries = () => {
    setShowAll(true);
    setNumberOfCountries(countries.length); // Fetch all countries if needed
  };

  const showFewerCountries = () => {
    setShowAll(false);
    setNumberOfCountries(45); // Default number of countries
  };

   const visibleCountries = showAll ? countries : countries.slice(0, 6);


  return (
    <div className="hero-country">
      <div className="hero-country-content">
        <div className="hero-country-text">
          <h2>Where can you send money with WorldRemit?</h2>
          <p>Popular countries</p>
        </div>
        <div className="hero-country-list">
          {visibleCountries.map((country, index) => (
            <div className="country-item" key={index}>
              <div className="country-img-name">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="country-flag"
                />
                <span className="country-name">{country.name}</span>
              </div>
              <KeyboardArrowRightIcon className="arrows-icon" />
            </div>
          ))}
          <div className="button-container">
            {!showAll && (
              <button className="toggle-button" onClick={showMoreCountries}>
                View all countries
              </button>
            )}
            {showAll && (
              <button className="toggle-button" onClick={showFewerCountries}>
                View Less countries
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="hero-country-content2">
        <img src={assets.landing_page_icon} alt="landing page image"  className="landing-image"/>
        <div className="hero-country-content2-right">
          <div className="content-text">
            <h2>A fast and secure way to send money on the go</h2>
            <p>
              Download our app for free to send money online in minutes to over
              130 other countries. Track your payments and view your transfer
              history from anywhere.
            </p>
          </div>
          <div className="content-image">
            <img src={assets.app_store} alt="app-store" />
            <img src={assets.play_store} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCountry;
