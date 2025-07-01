"use client";
import React from "react";
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
  return (
    <div className="">
      <Header />

      {/* Brief about the healthcare provider */}
      <AboutUs />

      {/* Key services offered */}
      <Services />

      {/* Specialized departments */}
      <Departments />

      {/* Medical professionals */}
      <Team />

      {/* Facility photos and patient care images */}
      <Gallery />

      {/* Patient testimonials - builds trust */}
      <Testimonials />

      {/* Contact information and form */}
      <ContactPage />

      {/* Footer with navigation, contact, and quick links */}
      <Footer />
    </div>
  );
};

export default MainPage;
