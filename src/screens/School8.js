// src/School8.js
import React from "react";
import "./School8.css";

export default function School8() {
  return (
    <div className="school8-container">
      {/* Top Text */}
      <div className="review-header">
        <p className="review-tag">Review</p>
        <h1 className="heading">School App, Parent App & Management App</h1>
        <p className="review-text">
          Our school management Software is applauded in the market by leading experts. 
          Our customers from worldwide, bank on us showing <strong>96% client retention</strong>! 
          The market experts like Gartner Peer Insights, Cepterra, Goodfirms, G2 Crow, 
          Software Suggest, Technologycounter, have given us the highest ratings for the 
          extraordinary features!
        </p>
      </div>

      {/* Review Cards */}
      <div className="reviews-grid">
        <div className="review-card">
          <div className="logo-circle ss">S</div>
          <h3>Software Suggest</h3>
          <p className="count">487 Reviews</p>
          <div className="stars">5.0 Rating</div>
        </div>

        <div className="review-card">
          <div className="logo-circle capterra">
            <img src="https://i.postimg.cc/wj9dJ0kY/capterra.png" alt="Capterra" />
          </div>
          <h3>Capterra</h3>
          <p className="count">38 Reviews</p>
          <div className="stars">4.9 Rating</div>
        </div>

        <div className="review-card">
          <div className="logo-circle goodfirms">G</div>
          <h3>Good Firms</h3>
          <p className="count">250 Reviews</p>
          <div className="stars">5.0 Rating</div>
        </div>
      </div>
    </div>
  );
}