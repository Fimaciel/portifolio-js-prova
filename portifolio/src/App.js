import React from 'react';
import Headers from './Components/Headers';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Experiencia from './Components/Experiencia';
import Education from './Components/Education';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <main>
      <Headers />
      <section className="bg-dark container-fluid">
        <div className="row">
          <div className="col-lg-4 p-5">
            <About />
            <Contact />
            <Skills />
          </div>
          <div className="col-lg-8 p-5">
            <Experiencia />
            <Education />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;