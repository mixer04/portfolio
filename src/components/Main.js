import React, { useEffect } from "react";
import "./Main.css";
import { isSafari } from './detectSafari';
import Navbar from './Navbar';
import Scroll from './Scroll';

const Main = ({ aboutRef }) => {
    const handleScroll = () => {
      if (aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    useEffect(() => {
        if (isSafari()) {
          document.body.classList.add('safari');
        }
      }, []);
    return (
      <>
      <Navbar />
      <div className="Welcome">
          <h1 className="Name">
              I'm <span className="Typing"></span>
          </h1>
          <h2>Junior Frontend Developer</h2>
        <div className="scroll-down">
          <Scroll onClick={handleScroll}/>
        </div>
      </div>
      </>
    );
}

export default Main;