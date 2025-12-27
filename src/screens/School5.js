// src/School5.js
import React from "react";
import "./School5.css";

export default function School5() {
  return (
    <div className="school5-container">
      <div className="school5-content">
        {/* Left Text */}
        <div className="text-content">
          <p className="top-title">School App, Parent App & Management App</p>
          
  <h1 className="school5-heading">
  The Ultimate School ERP With <br />
  <span>Mobile App For Modern</span> <br />
  School System
</h1>



          <p className="description">
            Comprehensive, Easy To Use Web Based School ERP System Helps You To Move 
            Faster, Save Money, Integrate On-Premises Apps And Data Anytime Anywhere 
            Explore the online school ERP with built-in School App features and start 
            the new education administration journey with the new-edge technology! 
            Along with School App, We offer Management App - bringing the entire school 
            in the palm of your hand, making the whole school management experience 
            effortless.
          </p>
        </div>

        {/* Right Mobile Mockups */}
        <div className="mobile-mockups">
          <img 
            src="/assets/9.png" 
            alt="School App" 
            className="mobile-left" 
          />
          <img 
            src="/assets/8.png" 
            alt="Parent App" 
            className="mobile-right" 
          />
        </div>
      </div>

      {/* Bottom Dots */}
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}