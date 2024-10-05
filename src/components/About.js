import React from "react";
import { useSpring, animated } from "@react-spring/web"; // Import necessary components from react-spring
import "./About.css";

function About() {
  // Define the spring animation
  const springProps = useSpring({
    to: { opacity: 1, transform: 'scale(1)' }, // Target properties
    from: { opacity: 0, transform: 'scale(0.8)' }, // Start properties
    config: { tension: 200, friction: 15 }, // Adjust tension and friction for animation speed
    
  });

  const toTop = () => {
    window.scrollTo(0, 0);
  };


  return (
    <animated.section className="about" id="about" style={springProps}>
      <h1>About Me</h1>
      <p>
        I'm a 21-year-old student at Bina Nusantara University, living in Indonesia. 
      </p>
      <h2>Education</h2>
      <p>
        Binus University - Information Systems, focusing on cloud computing, 2022 - present.
      </p>
      <p>
        In the previous semester, I learned System Analysis and Design, 
        Java-based desktop application development with JavaFX, SQL, and UI/UX design principles.
      </p>
      <h2>Current Involvement</h2>
      <p>
        I'm currently part of the Information System Project Member under IS Laboratory 
        at Bina Nusantara. Additionally, I'm a mentor in the mentoring program at SASC 
        Bina Nusantara Alam Sutera, focusing on helping students enhance their skills.
      </p>
      <h2>Skills Development</h2>
      <p>
        I'm learning cloud computing and AWS at university and also taking courses in 
        AWS Cloud Computing Foundations, AWS Machine Learning, AWS Data Engineering, AWS Cloud Architecture, and Cloud Security & Governance.
      </p>
      {toTop()}
    </animated.section>
   
    
    
  );
}

export default About;
