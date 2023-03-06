import React from "react";
import "./styles/styles.css";

import Navbar from "./components/navbar/Navbar";
import HeroBanner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Services from "./components/services/Services";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroBanner />
        <Features />
        <Services />
        <Pricing />
        <Contact />
      </main>
      
      
    </>
  );
}
