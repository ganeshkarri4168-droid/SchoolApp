// src/School9.js
import React from "react";
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="school9-footer">
      <div className="footer-content">
        {/* Logo + Description */}
        <div className="footer-logo">
          <h2>Vidyalaya®</h2>
          <p>Digitizing Schools</p>
          <p className="desc">
            Vidyalaya is one of the leading ERP solutions for educational institutions across the world. 
            It is a fully customizable solution with major features such as SMS, Online Payment, Vehicle Tracking, 
            Online Exam, Mobile App, Biometric, Barcode, etc.
          </p>
        </div>

        {/* About */}
        <div className="footer-col">
          <h3>About</h3>
          <ul>
            <li>About Vidyalaya</li>
            <li>Why Vidyalaya?</li>
            <li>Benefits To You</li>
            <li>Our Approach</li>
            <li>History</li>
          </ul>
        </div>

        {/* Product & Services */}
        <div className="footer-col">
          <h3>Product & Services</h3>
          <ul>
            <li>Features</li>
            <li>School Software</li>
            <li>College Software</li>
            <li>Integration</li>
            <li>Services</li>
            <li>Mobile App</li>
            <li>Partner</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li>Brochures</li>
            <li>Presentation</li>
            <li>Case Study</li>
            <li>Refund Policy</li>
            <li>Blog</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>C/102-103, Ganesh Meridian, Opp. Kargil Petrol Pump, S.G. Highway, Ahmedabad - 380060, Gujarat, INDIA</p>
          <p>+91-942-644-2424</p>
          <p>+91-972-674-8800</p>
          <p>sales.vidyalaya@sapphiresolutions.net</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="social-icons">
          <span>f</span><span>s</span><span>in</span><span>ig</span><span>yt</span>
        </div>
        <p>© Vidyalaya 2025. All rights reserved.</p>
        <p>Terms Of Use | Privacy Policy</p>
      </div>

      {/* UP ARROW BUTTON */}
      <div className="up-arrow" onClick={scrollToTop}>
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
        </svg>
      </div>
    </footer>
  );
}