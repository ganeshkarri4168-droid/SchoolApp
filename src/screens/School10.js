// src/School10.js
import React, { useState, useEffect } from "react";
import "./School10.css";

export default function School10() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto open modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setIsModalOpen(false);
  };

  return (
    <div className="school10-container">
      {/* ====== Popup Modal ====== */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>Contact With Our Experts</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Email Address *" required />

              <div className="phone-input">
                <span>IN</span>
                <input type="tel" placeholder="81234 56789" required />
              </div>

              <select required>
                <option value="">Please Select Your Interest *</option>
                <option>School ERP</option>
                <option>College ERP</option>
                <option>Mobile App</option>
              </select>

              <div className="row">
                <input type="text" placeholder="Institute Name *" required />
                <input type="text" placeholder="Location *" required />
              </div>

              <div className="success-msg">
                <span>Success!</span>
                <img
                  src="https://i.postimg.cc/3xV2dK3r/cloudflare.png"
                  alt="Cloudflare"
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
