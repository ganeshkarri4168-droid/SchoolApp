import React from "react";
import "./School6.css";

export default function School6() {
  return (
    <div className="school6-container">
      {/* WhatsApp Floating Icons */}
      <div className="whatsapp-float whatsapp-1">
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="WhatsApp"
        />
      </div>
      <div className="whatsapp-float whatsapp-2">
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="WhatsApp"
        />
      </div>
      <div className="whatsapp-float whatsapp-3">
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="WhatsApp"
        />
      </div>

      <div className="school6-content">
        {/* Left Illustration */}
        <div className="illustration">
          <img
            src="https://i.postimg.cc/3rB1hX8k/whatsapp-illustration.png"
            alt="WhatsApp for School"
            className="main-image"
          />
        </div>

        {/* Right Text */}
        <div className="text-content">
          <h2>
            Student’s Education? Let the power of social media application
            contribute to your success journey. We, the Vidyalaya, the leading
            school management system provider, introducing the new venture of
            WhatsApp for Education.
          </h2>

          <p>
            The intervention of technology in the education industry is a
            must-to-have thing. Accomplish a 360 degrees makeover for your
            educational institute by joining hands with Apps of the next generation.
            Let the digitalization make you fit for a digital era transforming
            your existing chalk and talk school management system. Establish
            the new round of communication with the parents by integrating the
            social media Apps like WhatsApp messenger for school!
          </p>

          <button className="explore-btn">Explore Now</button>
        </div>
      </div>
    </div>
  );
}
