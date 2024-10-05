import React from 'react';
import './Contact.css'; // Make sure to create this CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from '@react-spring/web'; // Import useSpring

function Contact() {
    const springProps = useSpring({
        to: {opacity: 1, transform: 'scale(1)'},
        from: {opacity: 0, transform: 'scale(0.8)'},
        config: {tension: 200, friction: 15},
    });
    return (
        <animated.section className="contact" id="contact" style={springProps}>
            <h1>Contact Me</h1>
            <p>If you would like to get in touch, feel free to reach out through any of the following platforms:</p>
            <div className="contact-cards">
                <div className="contact-card">
                    <a href="https://www.linkedin.com/in/kevinjuliantan" target="_blank" rel="noopener noreferrer" className="card-link">
                        <FontAwesomeIcon icon={faLinkedin} className="icon" />
                        <h2>LinkedIn</h2>
                        <p>Connect with me on LinkedIn</p>
                    </a>
                </div>
                <div className="contact-card">
                    <a href="https://github.com/narwhals0" target="_blank" rel="noopener noreferrer" className="card-link">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <h2>GitHub</h2>
                        <p>Check out my projects on GitHub</p>
                    </a>
                </div>
                <div className="contact-card">
                    <a href="mailto:kevinjuliantan@gmail.com" className="card-link">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <h2>Email Me</h2>
                        <p>Drop me a message via email</p>
                    </a>
                </div>
            </div>
        </animated.section>
    );
}

export default Contact;
