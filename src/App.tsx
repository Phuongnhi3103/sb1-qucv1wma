import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-brand-white">
        <Features />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;