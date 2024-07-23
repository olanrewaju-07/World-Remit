// src/components/Navbar.js
import React, { useState } from "react";
import LanguageSwitcher from "../LanguageSwicher/LanguageSwitcher";
import { assets } from "../../assets/assets";
import "./Navbar.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {

  const [hover, setHover] = useState(false);
  const [isOpen,setIsOpen] = useState(false);
  const toggleDropdown = () =>{
    setIsOpen(!isOpen);
  }

    //  const dynamicClassname = "hover-style";

  return (
    <div className="navbar">
      <div
        className="navbar-left">
        <img className="logo" src={assets.logo} alt="" />
        <hr />
        <LanguageSwitcher />
      </div>
      <div className="navbar-right">
        <div className="dropdown-blog">
          <div className="btnIcon">
            <button
              className="dropbtn"
              onClick={toggleDropdown}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Blog
            </button>
            <ArrowDropDownIcon className="icon" />
          </div>
          {isOpen && (
          <div className="dropdown-blog-content">
            <a href="#">All</a>
            <a href="#">Comunity</a>
            <a href="#">Finance</a>
            <a href="#">Life Abroad</a>
            <a href="#">Education</a>
            <a href="#">Product</a>
          </div>
          )}
        </div>
        <a
          className="link"
          href=""
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Help
        </a>
        <a
          className="link"
          href=""
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Currency Converter
        </a>
        <button
          className="download-btn"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Download App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
