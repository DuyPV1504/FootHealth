import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import "./Tips.css";

const Tips = () => {
  return (
    <section id="tips" className="tips-section">
      <div className="tips-header">
        <h2>DFU Prevention</h2>
      </div>
      <div className="tips-grid">
        <div className="tips-item">
          <img src={image1} alt="Daily Foot Care" />
          <p>Daily Foot Care</p>
        </div>
        <div className="tips-item">
          <img src={image2} alt="Blood Sugar Control" />
          <p>Blood Sugar Control</p>
        </div>
        <div className="tips-item">
          <img src={image3} alt="Routine Check-ups" />
          <p>Routine Check-ups</p>
        </div>
      </div>

      <div className="tips-header">
        <h2>DFU Treatment</h2>
      </div>
      <div className="tips-grid">
        <div className="tips-item">
          <img src={image4} alt="Antibiotics" />
          <p>Antibiotics</p>
        </div>
        <div className="tips-item">
          <img src={image5} alt="Offloading" />
          <p>Offloading</p>
        </div>
        <div className="tips-item">
          <img src={image6} alt="Surgical Intervention" />
          <p>Surgical Intervention</p>
        </div>
      </div>
    </section>
  );
};

export default Tips;
