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

  // Call toTop when the component mounts
  React.useEffect(() => {
    toTop();
  }, []);

  return (
    <animated.section className="about" id="about" style={springProps}>
      <h1>About Me</h1>
      <p>
        I'm a 21-year-old student at Bina Nusantara University, living in Indonesia. 
      </p>

      <h2>Education</h2>
      <p>
        <strong>Binus University</strong> - Information Systems, focusing on cloud computing (2022 - present).
      </p>
      <p>
        In the previous semester, I learned:
      </p>
      <ul>
        <li>System Analysis and Design</li>
        <li>Java-based desktop application development with JavaFX</li>
        <li>SQL</li>
        <li>UI/UX design principles</li>
      </ul>

      <h2>Current Involvement</h2>
      <p>
        I'm currently part of the <strong>Information System Project Member</strong> under IS Laboratory at Bina Nusantara. 
      </p>
      <p>
        Additionally, I'm <strong>a mentor</strong> in the mentoring program at SASC Bina Nusantara Alam Sutera, focusing on helping students enhance their skills.
      </p>

      <h2>Skills Development</h2>
      <p>
        I'm learning cloud computing and AWS at university and also taking courses in:
      </p>
      <ul>
        <li>AWS Machine Learning</li>
        <li>AWS Data Engineering</li>
        <li>AWS Cloud Architecture</li>
      </ul>
    </animated.section>
  );
}

export default About;
