import React from 'react'
import "./App.css"
import Navbar from './Component/Navbar/Navbar'
import "./i18n"
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroTransfer from './Component/HeroTransfer/HeroTransfer'
import HeroPayment from './Component/HeroPayment/HeroPayment'
import HeroCountry from './Component/HeroCountry/HeroCountry'
import HeroHelp from './Component/HeroHelp/HeroHelp'
import Footer from './Component/Footer/Footer'



const App = () => {
  return (
    <div>
      <Router>
         <Navbar />
         <Home />
         <HeroTransfer />
         <HeroPayment />
         <HeroCountry />
         <HeroHelp />
         <Footer />
      </Router>
    </div>
  );
}

export default App