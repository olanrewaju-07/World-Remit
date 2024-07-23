import React from 'react'
import "./App.css"
import Navbar from './Component/Navbar/Navbar'
import "./i18n"
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Router>
         <Navbar />
         <Home />
      </Router>
    </div>
  );
}

export default App