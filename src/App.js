import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: '#050505', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Fixed Nav */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
