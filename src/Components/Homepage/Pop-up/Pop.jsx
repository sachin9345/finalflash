import React, { useState } from "react";
import pop from "./Cross.svg";
import logo from "./Hiring.svg";
import "./Pop.css";

const Pop = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "6e8335c3-3323-4c60-9db8-435785a9d649");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="whole-popup">
        <img src={logo} className="hiringlogo" alt="logo" />
        <div className="top-pop">
          <img src={pop} alt="close" className="close-btn" onClick={onClose} />
        </div>
        <div className="bottom-pop">
          {submitted ? (
            <div className="thank-you-message">
              <h2>Thanks for your interest!</h2>
              <p>We will contact you soon.</p>
             
            </div>
          ) : (
            <>
              <h2 className="Head-pop">Are you passionate about cars?</h2>
              <form onSubmit={onSubmit} className="details-container">
                <div className="sub-details">
                  <h6>Join Our Team – Car Detailing Jobs Available!</h6>
                  <p>Details will be sent via mail</p>
                </div>
                <div className="mail">
                  <label htmlFor="email">Mail</label>
                  <input
                    type="email"
                    name="email"
                    className="Input-mail"
                    placeholder="Enter your mail here"
                    required
                  />
                </div>
                <div className="phone-container">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="Input-contact"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div className="send-button">
                  <button type="submit" className="Send-btn">
                    Send
                  </button>
                </div>
                <span className="form-result">{result}</span>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pop;
