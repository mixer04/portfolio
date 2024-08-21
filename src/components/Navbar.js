import React from 'react';
import './Navbar.css';
import home from '../assets/images/home.png';
import about from '../assets/images/about.png';
import projects from '../assets/images/projects.png';
import contact from '../assets/images/contact.png';

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Fallback for Safari
      if (!('scrollBehavior' in document.documentElement.style)) {
        window.scrollTo({
          top: section.offsetTop,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>
            <text>Home</text>
            <img src={home} alt="Home Icon" className="navbar-icon" />
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>
            <text>About</text>
            <img src={about} alt="About Icon" className="navbar-icon" />
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>
            <text>Projects</text>
            <img src={projects} alt="Projects Icon" className="navbar-icon" />
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>
            <text>Contact</text>
            <img src={contact} alt="Contact Icon" className="navbar-icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;