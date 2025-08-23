import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
    <div className="bg-white text-dark font-sans">
      <Navbar />
      <Hero />
      <LogoSlider />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
    </>
  );
}

export default App;
