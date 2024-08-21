import React from 'react';
import './About.css';
import me from '../assets/images/me.webp';
import location from '../assets/images/location.svg';


const About = () => {
    return (
        <div className='About-me'>
            <img src={me} alt="About Me" />
            <p>
                <img src={location} alt="Location Icon" />
                Rzeszów, Poland
            </p>
            <div className='about2'>
                <p>
                    My name is Borys Bednarski, a passionate Junior Frontend Web Developer. I specialize in building responsive and user-friendly web applications. I am constantly learning and exploring new technologies to enhance my skills and stay updated with industry trends.
                </p>
                <p>
                    <strong>Here you can download my CV file:</strong>
                </p>
                <a href="https://drive.google.com/drive/folders/1_zI6kbJjJ_Mke9SdwOn-1UgFwcB2IYhI?usp=sharing" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
        </div>
    )
}

export default About;