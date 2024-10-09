import React, { useEffect } from 'react';
import './Skill.css';
import { useSpring, animated } from '@react-spring/web';

function Skill() {
    const springProps = useSpring({
        to: { opacity: 1, transform: 'scale(1)' },
        from: { opacity: 0, transform: 'scale(0.8)' },
        config: { tension: 200, friction: 15 },
    });

    useEffect(() => {
        // Create a script element to load the Credly embed script
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;

        // Append the script to the body
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <animated.section className="skills" id="skills" style={springProps}>
            <h1>Skills</h1>
            <div className="skills-list">
                <div className="skill-card">
                    <h2>System Analysis</h2>
                    <ul className="skill-list">
                        <li>Object Oriented Design</li>
                        <li>UML</li>
                        <li>System Modeling</li>
                        <li>UI / UX</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h2>Coding</h2>
                    <ul className="skill-list">
                        <li>Java</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>Laravel</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h2>Cloud Computing</h2>
                    <ul className="skill-list">
                        <li>Networking</li>
                        <li>Cloud Infrastructure</li>
                        <li>Cloud Security</li>
                        <li>Cloud Compute Services</li>
                        <li>Cloud Storage Services</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h2>Misc</h2>
                    <ul className="skill-list">
                        <li>Additive Manufacturing</li>
                        <li>IoT</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
            </div>
                  {/* Credly Badge Section */}
                  <div className="credly-badge">
                <h2>My Badges</h2>
                <div className="badge-container">
                    <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="1125d0d9-b719-4be1-bc41-25a52938864d" data-share-badge-host="https://www.credly.com"></div>
                </div>
                <div className="badge-container">
                    <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="ef05b892-ce9b-448e-8c7e-601ea119d5c6" data-share-badge-host="https://www.credly.com"></div>
                </div>
            </div>
        </animated.section>
    );
}

export default Skill;
