import React, { useState } from "react";
import { supabase } from "../../../spabaseClient";
import pop from "./Cross.svg";
import logo from "./Hiring.svg";
import "./Apply.css";

const Apply = ({ onClose }) => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resumeName, setResumeName] = useState(""); // Store selected file name

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Uploading resume...");
    setIsLoading(true);
    setIsSuccess(false);

    const file = event.target.resume.files[0];

    if (!file) {
      setResult("Please upload a resume.");
      setIsLoading(false);
      return;
    }

    try {
      // Upload file to Supabase Storage
      const filePath = `uploads/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage.from("resumes").upload(filePath, file);

      if (error) throw error;

      // Get public file URL
      const { data: urlData } = supabase.storage.from("resumes").getPublicUrl(filePath);
      const fileURL = urlData.publicUrl;

      if (!fileURL) throw new Error("Failed to get file URL.");

      // Create form data object
      const formData = new FormData();
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      formData.append("email", event.target.email.value);
      formData.append("phone", event.target.phone.value);
      formData.append("resume", fileURL);

      // Send form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setResult("Your application has been submitted successfully!");
        setIsSuccess(true);
        setResumeName(""); // Clear resume name
        event.target.reset();
      } else {
        setResult(responseData.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please check your internet connection.");
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
                {/* Email Input */}
                <div className="mail">
                  <label htmlFor="email">E-Mail</label>
                  <input type="email" name="email" className="Input-mail" placeholder="Enter Your Mail Here" required />
                </div>
                {/* Phone Input */}
                <div className="phone-container">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" name="phone" className="Input-contact" placeholder="Enter Your Number Here" required />
                </div>
                {/* Resume Upload Field */}
                <div className="resume-container">
                  <label htmlFor="resume">Upload Resume</label>
                  <label className="upload-label">
                    <input
                      type="file"
                      name="resume"
                      className="Input-resume"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={(e) => setResumeName(e.target.files[0]?.name || "")}
                    />
                    Choose File
                  </label>
                  {resumeName && <p className="file-name">{resumeName}</p>}
                </div>
                {/* Submit Button */}
                <div className="send-button">
                  <button type="submit" className="Send-btn" disabled={isLoading}>
                    {isLoading ? "Submiting" : "Submit"}
                  </button>
                </div>
                {/* Form Result Message */}
                <span className={`form-result ${isSuccess ? "success" : "error"}`}>{result}</span>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apply;
