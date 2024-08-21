import React from 'react';
import './Contact.css';
import githubIcon from '../assets/images/github.png';
import mailIcon from '../assets/images/mail.png';
import linkedinIcon from '../assets/images/linkedin.png';


const Contact = () => {
    return (
        <div className='Contact-me'>
            <h2>Contact Me</h2>
            <p>Feel free to reach out with any questions or inquiries.</p>
            <div className="socials">
                <a href="https://github.com/mixer04" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/borys-bednarski/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn Icon" />
                </a>
                <a href="mailto:bednarskiborys@gmail.com" target="_blank" rel="noreferrer">
                    <img src={mailIcon} alt="Mail Icon" />
                </a>

            </div>
            <p>© 2024 Borys Bednarski. All rights reserved.</p>
        </div>
    )
}

export default Contact;