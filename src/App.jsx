import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Products from './components/sections/Products';
import MissionPeople from './components/sections/MissionPeople';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <MissionPeople />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
