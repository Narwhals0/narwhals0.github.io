import {react} from 'react';
import './Skill.css';
import {useSpring, animated} from '@react-spring/web';

function Skill() {
    const springProps = useSpring({
        to: {opacity: 1, transform: 'scale(1)'},
        from: {opacity: 0, transform: 'scale(0.8)'},
        config: {tension: 200, friction: 15},
    });
    
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
    </animated.section>
    
    );
}

export default Skill;