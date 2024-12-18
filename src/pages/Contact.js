import React from "react";
import personImage from "../assets/person.png"; 
import logoImage from "../assets/logo.png"; 
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>If you need help, please let us know your problem so we can give you the best support and advice!</p>
      <div className="contact-container">
        <div className="contact-left">
          <img src={personImage} alt="Contact Illustration" />
        </div>
        <div className="contact-right">
          <form>
            <div className="form-group">
              <label>Name & Last Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Telephone</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Write your message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="contact-info">
  <div className="contact-info-container">
    <div className="logo">
      <img src={logoImage} alt="DiabEase Logo" />
    </div>
    <div className="info">
      <h3>Contact</h3>
      <p>DiabEase@gmail.com</p>
      <p>+33-0756429821</p>
    </div>
  </div>
  <div className="divider"></div>
  <div className="working-hours">
    <p>Weekdays : 08h00–20h00</p>
    <p><span>*</span> Saturday : 08h00–14h00 <span>*</span></p>
    <p>Sunday : 09h00–13h00</p>
  </div>
  <div className="website">
    <a href="http://www.DiabEase.com">www.DiabEase.com</a>
  </div>
</div>

    </section>
  );
};

export default Contact;
