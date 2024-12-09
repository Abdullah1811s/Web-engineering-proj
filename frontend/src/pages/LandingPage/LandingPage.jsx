import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero Section/Hero";
import Gradients from "./_components/Gradients";
import Features from "./_components/Features Section/Features";
import Works from "./_components/How it works Section/Works";
import MeetKody from "./_components/Meet Kody/MeetKody";
import Pricing from "./_components/Pricing/Pricing";
import Contact from "./_components/Contact Us Section/Contact";
import Footer from "./_components/Footer";

const LandingPage = () => {
  return (
    <div className="relative scrollbar-track">
      <Navbar />
      <Hero />
      <div className="mx-36 max-sm:mx-6">
        <Features />
        <MeetKody />
        <Works />
        <Pricing />
        <Contact />
      </div>
      <Footer />
      <Gradients />
    </div>
  );
};

export default LandingPage;
