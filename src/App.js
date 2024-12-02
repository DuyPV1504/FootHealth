import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Basics from "./pages/Basics";
import Tips from "./pages/Tips";
import Predict from "./pages/Predict";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="basics">
        <Basics />
      </div>
      <div id="tips">
        <Tips />
      </div>
      <div id="predict">
        <Predict />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
