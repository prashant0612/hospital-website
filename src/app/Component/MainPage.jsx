"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Gallery from "./Gallery";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Departments from "./Department";
import Testimonials from "./Testimonial";
import "../globals.css";

const MainPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show/hide back-to-top button when scrolled beyond 20% of page
      setShowScrollButton(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative">
      <Header />
      <AboutUs />
      <Services />
      <Departments />
      <Team />
      <Gallery />
      <Testimonials />
      <ContactPage />
      <Footer />

      {/* Back to top button with circular progress */}
      {showScrollButton && (
        <div className="fixed bottom-8 right-8 z-40">
          {/* Circular progress background */}
          <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
            {/* Full circle (background) */}
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="4"
            />
            {/* Progress circle (foreground) */}
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="#1B388E"
              strokeWidth="4"
              strokeDasharray="100"
              strokeDashoffset={100 - scrollProgress}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Button in center of progress circle */}
          <button
            onClick={scrollToTop}
            className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center 
                      shadow-lg hover:bg-blue-600 transition-colors duration-300"
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;