// src/components/Projects.js
import React from "react";
import { useSpring, animated } from "@react-spring/web"; // Import useSpring and animated
import "./Projects.css";

const projectsData = [
  {
    title: "ISLAB Recruitment",
    description: "Involved as a team to create a platform for managing and applying recruitment.",
    link: "https://islab.apps.binus.ac.id/recruitmentislab/",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    link: "#", // Replace with actual link
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    link: "#", // Replace with actual link
  },
];

function Projects() {
  // Define the spring animation for the project cards
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px) scale(0.95)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
    config: { tension: 250, friction: 20, clamp: true },
  });

  return (
    <section className="projects" id="projects">
      <div className="projects-card">
        <h1>Projects</h1>
        <p>Here are some of my projects</p>
        <animated.div style={springProps} className="project-list"> {/* Apply spring to the list */}
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} className="cta-button">View</a>
            </div>
          ))}
        </animated.div>
      </div>
    </section>
  );
}

export default Projects;
