import React, { useState } from "react";
import pop from "./Cross.svg";
import logo from "./Hiring.svg";
import "./Apply.css";

const Apply = ({ onClose }) => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsLoading(true);
    setIsSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "6e8335c3-3323-4c60-9db8-435785a9d649");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        setIsSuccess(true);
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="whole-popup">
        <img src={logo} className="logose" alt="logo" />
        <div className="top-pop">
          <img src={pop} alt="close" className="close-btn" onClick={onClose} />
        </div>
        <div className="bottom-pop">
          {isSuccess ? (
            <div className="thank-you-message">
              <h2>Thanks for your interest!</h2>
              <p>We will contact you soon.</p>
            </div>
          ) : (
            <>
              <h2 className="Head-pops">Are you passionate about cars?</h2>
              <form onSubmit={onSubmit} className="details-container">
                <div className="sub-detailss">
                  <h6>Join Our Team – Car Detailing Jobs Available!</h6>
                  <p>Details will be sent via mail</p>
                </div>
                <div className="mail">
                  <label htmlFor="email">Mail</label>
                  <input
                    type="email"
                    name="email"
                    className="Input-mail"
                    placeholder="mail@example.com"
                    required
                  />
                </div>
                <div className="phone-container">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="Input-contact"
                    placeholder="1111111111"
                    required
                  />
                </div>
                <div className="job-type-container">
                  <label htmlFor="jobType">Job Type</label>
                  <select name="jobType" className="Input-jobtype" required>
                    <option value="">Select</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                  </select>
                </div>
                <div className="send-button">
                  <button type="submit" className="Send-btn" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send"}
                  </button>
                </div>
                <span className={`form-result ${isSuccess ? "success" : "error"}`}>
                  {result}
                </span>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;
