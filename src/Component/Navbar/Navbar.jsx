import React, { useRef, useState } from "react";
import LanguageSwitcher from "../LanguageSwicher/LanguageSwitcher";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav", isOpenMenu);
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="navbar">
      <div className="nav">
        <div className="navbar-left">
          <img className="logo" src={assets.logo} alt="Logo" />
          <hr />
          <LanguageSwitcher />
        </div>
        <div
          className={`navbar-right ${isOpenMenu ? "responsive_nav" : ""}`}
          ref={navRef}
        >
          <button
            onClick={toggleNavbar}
            className={`nav-btn nav-close-btn ${!isOpenMenu ? "hidden" : ""}`}
          >
            <FaTimes />
          </button>
          <div className="dropdown-blog">
            <div
              className="btnIcon"
              onClick={toggleDropdown}
            >
              <button className="dropbtn">Blog</button>
              <ArrowDropDownIcon className="icon" />
            </div>
            {isOpen && (
              <div className="dropdown-blog-content">
                <a href="#">All</a>
                <a href="#">Community</a>
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
      <button
        onClick={toggleNavbar}
        className={`nav-btn  ${isOpenMenu ? "hidden" : ""}`}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
