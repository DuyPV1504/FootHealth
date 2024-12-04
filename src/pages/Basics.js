import React from "react";
import footImage from "../assets/foot.png";
import "./Basics.css";

const Basics = () => {
  return (
    <section id="basic" className="basic-section">
      <div className="basic-content">
        <div className="basic-text">
          <h2>Basic</h2>
          <p>
            Diabetic Foot Ulcer (DFU) is an open sore or wound that commonly 
            forms on the foot of people with diabetes, often due to nerve 
            damage, neuropathy, and poor blood circulation. DFU can lead to 
            severe infections, delayed wound healing, and, in severe cases, 
            amputation if not managed properly and effectively.
          </p>
        </div>
        <div className="basic-image">
          <img src={footImage} alt="Diabetic Foot Ulcer" />
        </div>
      </div>
    </section>
  );
};

export default Basics;
