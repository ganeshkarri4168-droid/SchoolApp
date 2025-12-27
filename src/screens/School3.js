import React from "react";
import "./School3.css";

export default function School3() {
  return (
    <div className="school3-container">
      {/* Floating Buttons (optional) */}
      {/* <div className="floating-call"><span>Call</span></div> */}
      {/* <div className="floating-whatsapp"><span>WhatsApp</span></div> */}
      {/* <div className="floating-arrow">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L2 12h3v8h14v-8h3L12 2z" />
        </svg>
      </div>
      <div className="floating-logo"><span>W</span></div> */}

      <div className="school3-content">
        <div className="text-side">
          <h1 className="highlight">
            Why Vidyalaya School Management System
          </h1>

          <h2 className="two">
            We have <br />
            <span className="highlight">Lot of Success Stories</span>
          </h2>

          <p>
            Vidyalaya school management system software has redefined the education system
            functionalities with help of the latest technologies and gained new heights with
            its extraordinary features! This successful school management system uses
            cutting-edge technology and makes it user-friendly yet affordable! The product
            from the team of ultimate and 22+ years of expertise offers all the mandatory and
            complementary functionalities required by an educational institute! Our esteem
            1600+ global client base tells our success stories! We believe in.
          </p>

          <button className="btn-get-started">Get Started</button>
        </div>

        <div className="image-side">
          <div className="image-card card-1">
            <img src="/assets/5.png" alt="Team" />
          </div>
          <div className="image-card card-2">
            <img src="/assets/6.png" alt="Students" />
          </div>
          <div className="image-card card-3">
            <img src="/assets/7.png" alt="Laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}
