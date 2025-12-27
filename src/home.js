// src/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import School1 from "./screens/School1";
import School2 from "./screens/School2";
import School3 from "./screens/School3";
import School4 from "./screens/School4";
import School5 from "./screens/School5";
import School6 from "./screens/School6";
import School7 from "./screens/School7";
import School8 from "./screens/School8";
import School9 from "./screens/School9";
import School10 from "./screens/School10";
import Footer from "./components/Footer";
import "./Home.css";

const heroSlides = [School1, School2, School3];
const allSections = [
  ...heroSlides,
  School4, School5, School6, School7, School8, School9, School10, Footer
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const HeroSlide = heroSlides[currentSlide];

  return (
    <div className="home-container">
      {/* HERO SLIDER - FIRST 3 SECTIONS */}
      <div
        className="hero-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="hero-slide"
          >
            <HeroSlide />
          </motion.div>
        </AnimatePresence>

        {/* Dots for Hero */}
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* REST OF THE SECTIONS - SMOOTH SCROLL */}
      <div className="sections-container">
        {allSections.slice(3).map((Section, index) => (
          <section key={index} className="full-section">
            <Section />
          </section>
        ))}
      </div>
    </div>
  );
}