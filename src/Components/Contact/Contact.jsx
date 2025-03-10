import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
    access_key: "6e8335c3-3323-4c60-9db8-435785a9d649", // Replace with your Web3Forms Access Key
  });

  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setPopupVisible(true); // Show success popup
      setFormData({ name: "", mobile: "", email: "", service: "", message: "", access_key: "YOUR_ACCESS_KEY" });
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h2>CONTACT US</h2>
          <p>Get in touch with FlashyFinish!</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" className="input-field" value={formData.name} onChange={handleChange} required />
            <input type="text" name="mobile" placeholder="Mobile Number" className="input-field" value={formData.mobile} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email" className="input-field full-width" value={formData.email} onChange={handleChange} required />
          <select name="service" className="input-field full-width" value={formData.service} onChange={handleChange} required>
            <option value="">Select Services</option>
            <option value="Car Waxing">Car Waxing</option>
            <option value="Odour Removal">Odour Removal</option>
            <option value="AC gas filling">AC gas filling</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="Others">Others</option>
          </select>
          <textarea name="message" placeholder="Message" className="input-field full-width message-box" value={formData.message} onChange={handleChange} ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* Success Popup */}
      {popupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setPopupVisible(false)}>&times;</span>
            <h3>Submitted Successfully!</h3>
            <p>We will contact you soon.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
