// src/School7.js
import React from "react";
import "./School7.css";

export default function School7() {
  const cases = [
    {
      logo: "https://i.postimg.cc/3wQ7bYkY/navrachna-logo.png",
      name: "Navrachna School, Vadodara",
      tagline: "Navrachana is an independent, co-educational, Residential English medium school. & one of the premier...",
      link: "Read Case Studies →"
    },
    {
      logo: "https://i.postimg.cc/9fX8YJ8K/nirma-logo.png",
      name: "Nirma Vidyavihar, Ahmedabad",
      tagline: "Nirma vidyavihar one of the prestigious school of Ahmedabad were using their own offline software to...",
      link: "Read Case Studies →"
    },
    {
      logo: "https://i.postimg.cc/3x2n7k0P/lp-savani-logo.png",
      name: "L.P Savani Group Of Schools, Surat",
      tagline: "L P Savani Group of School has a proud tradition of being a supportive and caring community that delivers...",
      link: "Read Case Studies →"
    }
  ];

  return (
    <div className="school7-container">
      <div className="cases-grid">
        {cases.map((school, index) => (
          <div key={index} className="case-card">
            <div className="quote-top">“</div>
            
            <div className="logo-section">
              <img src={school.logo} alt={school.name} className="school-logo" />
            </div>

            <h3 className="school-name">{school.name}</h3>
            <p className="description">{school.tagline}</p>
            
            <button className="link-btn">Read More</button>

              {school.link}
          </div>
        ))}
      </div>
    </div>
  );
}