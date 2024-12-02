import React from "react";
import "./Home.css";
import footIcon from "../assets/icon.png";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>STEP AHEAD WITH CONFIDENCE,<br />PROTECT YOUR FEET DAILY!</h1>
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
