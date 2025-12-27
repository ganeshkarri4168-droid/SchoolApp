import React from "react";
import "./School1.css";

export default function School1() {
  return (
    <div className="school-container">
      {/* LEFT SIDE - TEXT CONTENT */}
      <div className="text-section">
        <div className="edu-badge">
          <span>Education Is Our Priority</span>
        </div>

        <h1>
          School Management <br />
          System With <span>Secure Cloud</span> <br />
          <span>Storage</span>
        </h1>

        <p>
          From Student Admission to accounting, <br />
          <span>we ensure that your works gets done quickly.</span>
        </p>

        <div className="button-group">
          <button className="btn-start">Get Started</button>

          <button className="btn-video">
            <svg className="video-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Video
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE AND STATS */}
      <div className="image-section">
        <img
          src="/assets/4.png"
          alt="Happy Student"
        />

        {/* <div className="stats-box stats-years">
          <img src="/assets/1.png" alt="years" />
          <div>
            <div className="number">23+</div>
            <div className="label">Years Legacy</div>
          </div>
        </div>

        <div className="stats-box stats-clients">
          <img
            src="/assets/2.png"
            alt="clients"
          />
          <div>
            <div className="number">1800+</div>
            <div className="label">Satisfied Clients</div>
          </div>
        </div>

        <div className="stats-box stats-retention">
          <div className="icon-circle">
            <img
              src="/assets/3.png"
              alt="retention"
            />
          </div>
          <div>
            <div className="number">96%</div>
            <div className="label">Client Retention</div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
