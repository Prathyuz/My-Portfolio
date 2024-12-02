import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Service from './components/Service';
import Technical from './components/Technical';

// AOS library
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Technical />
      <About />
      <Service />
      <Project />
      <Contact />
    </>
  );
}

export default App;
