import React from "react";
import NavBar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import Features from "../src/components/FeatureSection";
import Testimonials from '../src/components/Testimonials'
import Footer from "../src/components/Footer";
export default function Home() {
  return ( 
    <React.Fragment>
      <NavBar/>
      <HeroSection/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </React.Fragment>
  );
}
