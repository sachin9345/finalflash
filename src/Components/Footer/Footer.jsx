import React from "react";
import "./Footer.css";
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title">Flashy Finish</h2>
          <p className="footer-description">
          At Flashy Finish, we provide top-quality car care with premium products and advanced equipment, ensuring your vehicle gets the best treatment and good services.
          </p>
          <div className="social-icons">
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
           <Link to='/'><li>Home</li></Link> 
           <Link to='/services'><li>Services</li></Link> 
           <Link to='/'><li>Contact</li></Link> 
           <Link to='/'><li>Careers</li></Link> 
  
          </ul>
        </div>
        <div className="footer-subscribe">
          <h3>For Every Update</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter Email" />
            <button>SUBSCRIBE</button>
          </div>
          <div className="address">
          <p className="address-text">Unit 2, 216 Penarth road, CF11 8NN</p>
          <p className="address-text">CARDIFF , UNITED KINGDOM</p>
          </div>

          <div className="copyrights">
          <p >Copyrights @2025. All Rights Reserved.

</p>
          </div>
       

        </div>
      </div>
      <div className="footer-background-text">FLASHY FINISH</div>
    </footer>
  );
};
