// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSpring, animated } from '@react-spring/web'; // Importing useSpring and animated
import './Home.css';

function Home() {
  // Define the spring animation
  const springProps = useSpring({
    to: { opacity: 1, transform: 'scale(1)' }, // Final state
    from: { opacity: 0, transform: 'scale(0.8)' }, // Initial state
    config: { tension: 200, friction: 15 }, // Animation configuration
  });

  return (
    <animated.section className="home" id="home" style={springProps}>
      <div className="home-card">
        <h1>Hello, I'm Kevin</h1>
        <p>I'm a student at Bina Nusantara University, majoring in Information Systems.</p>
        <Link to="/about" className="cta-button">More About Me</Link> {/* Use Link for navigation */}
      </div>
    </animated.section>
  );
}

export default Home;
