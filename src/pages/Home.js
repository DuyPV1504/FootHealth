import React from "react";
import footIcon from "../assets/icon.png";  
import "./Home.css";  

const Home = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h1>
          STEP AHEAD WITH CONFIDENCE,<br />
          PROTECT YOUR FEET DAILY!
        </h1>
        <p>
          Welcome to DiabEase – your trusted partner in protecting diabetic foot health. 
          With tools to detect early signs of diabetic foot ulcers (DFU) and personalized 
          daily care tips, DiabEase helps you walk confidently and stay secure every day.
        </p>
        <button className="get-started">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={footIcon} alt="Foot Icon" />
      </div>
    </section>
  );
};

export default Home;
