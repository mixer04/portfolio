import React, { useRef } from 'react';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const aboutRef = useRef(null);
  return (
    <div className="App">
      <section id="home">
        <Main aboutRef={aboutRef}/>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;