import React, { useRef, useEffect } from 'react';
import './Background.css';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const cursor = { x: null, y: null };
    const maxDistance = 150; // Distance within which lines will form

    // Helper function to throttle resize events
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles(); // Reinitialize particles on resize
      }, 100); // Throttle to avoid constant re-rendering
    };

    // Set canvas size to window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Resize canvas when window size changes
    window.addEventListener('resize', handleResize);

    // Track cursor position
    window.addEventListener('mousemove', (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    });

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.dx = (Math.random() - 0.5) * 0.5;
        this.dy = (Math.random() - 0.5) * 0.5;
      }

      // Method to update the particle's position
      update() {
        this.x += this.dx;
        this.y += this.dy;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.dx = -this.dx;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.dy = -this.dy;
        }
      }

      // Draw particle
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#61dafb'; // Particle color
        ctx.fill();
      }
    }

    // Create particles dynamically based on canvas size
    const initParticles = () => {
      particles.length = 0; // Clear previous particles
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000); // Scale particle count
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Function to connect particles with lines
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          );

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(97, 218, 251, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }

          // Connect particle to cursor if near
          const distanceToCursor = Math.hypot(
            particles[i].x - cursor.x,
            particles[i].y - cursor.y
          );
          if (distanceToCursor < maxDistance) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distanceToCursor / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(cursor.x, cursor.y);
            ctx.stroke();
          }
        }
      }
    };

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('mousemove', (e) => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
      });
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background"></canvas>;
};

export default Background;
