import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [setLanguage, setSelectedLanguage] = useState('Language');

  const changeLanguage = (lng,label) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(label);
  };
  // const [hover, setHover] =useState(false)
  const [showContent, setShowContent] =useState(false)
   const toggleDropdown = () =>{
    setShowContent(!showContent);
   }
  return (
    <div className="dropdown">
      <div className="btn-icon">
        <button className="drop-btn" onClick={toggleDropdown}>{setLanguage}</button>
        <ArrowDropDownIcon className="icon" />
      </div>
{showContent &&(
      <div className="dropdown-content" onClick={()=>setShowContent(true)}>
        <a href="#" onClick={() => changeLanguage("en", "English")}>
          English
        </a>
        <a href="#" onClick={() => changeLanguage("es", "Español")}>
          Español
        </a>
        <a href="#" onClick={() => changeLanguage("fr", "Français")}>
          Français
        </a>
        <a href="#" onClick={() => changeLanguage("de", "Deutsch")}>
          Deutsch
        </a>
        <a href="#" onClick={() => changeLanguage("zh", "中文")}>
          中文
        </a>
      </div>
)}
    </div>
  );
};

export default LanguageSwitcher;
