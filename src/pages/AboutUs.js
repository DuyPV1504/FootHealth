import React from "react";
import logo from "../assets/logo.png"; // Import logo
import missionIcon from "../assets/mission.png"; // Import biểu tượng bàn chân mission
import "./AboutUs.css"; // Import CSS cho trang About Us

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="DiabEase Logo" className="logo" />
      </div>

      {/* Các hộp thông tin */}
      <div className="info-boxes">
        {/* Our Mission */}
        <div className="info-box">
          <img src={missionIcon} alt="Mission Icon" className="info-icon" />
          <h3>Our Mission</h3>
          <p>Enabling our users to walk confidently and live healthier lives every day.</p>
        </div>

        {/* What We Offer */}
        <div className="info-box">
          <h3>What We Offer</h3>
          <p>DiabEase offers innovative tools to detect early signs of diabetic foot ulcers and provides daily care tips.</p>
        </div>

        {/* Community */}
        <div className="info-box">
          <h3>Community</h3>
          <p>We offer a safe space to learn, share, and support one another.</p>
        </div>
      </div>

      {/* About Us Section Title */}
      <h2 className="section-title">About Us</h2>
    </section>
  );
};

export default AboutUs;
