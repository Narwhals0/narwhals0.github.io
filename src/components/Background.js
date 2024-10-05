import React, { useRef, useEffect } from 'react';
import './Background.css';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const cursor = { x: null, y: null };
    const maxDistance = 120; // Distance within which lines will form
    let animationFrame;

    // Helper function to set canvas size for retina displays
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr); // Adjust scaling for retina/high-DPI displays
    };

    // Initialize particles based on screen size (lower density on mobile)
    const initParticles = () => {
      particles.length = 0;
      const particleDensityDivisor = window.innerWidth < 768 ? 8000 : 10000; // Lower density on mobile
      const particleCount = Math.floor((canvas.width * canvas.height) / particleDensityDivisor);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Handle window resize, reinitialize particles and canvas
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
        initParticles();
      }, 100); // Throttle the resize event
    };

    // Touch interaction for mobile
    const handleTouchMove = (e) => {
      cursor.x = e.touches[0].clientX;
      cursor.y = e.touches[0].clientY;
    };

    // Set up event listeners for both mouse and touch interaction
    const setupInteraction = () => {
      if ('ontouchstart' in window) {
        window.addEventListener('touchmove', handleTouchMove);
      } else {
        window.addEventListener('mousemove', (e) => {
          cursor.x = e.clientX;
          cursor.y = e.clientY;
        });
      }
    };

    // Particle class with size and speed adjustments for mobile
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = window.innerWidth < 768 ? 1.5 : 2; // Smaller particles on mobile
        this.dx = (Math.random() - 0.5) * 0.2; // Slower speed for mobile
        this.dy = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.5 + 0.2; // Opacity for soft effect
      }

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

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Function to connect particles with lines
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }

          const distanceToCursor = Math.hypot(particles[i].x - cursor.x, particles[i].y - cursor.y);
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrame = requestAnimationFrame(animate);
    };

    // Initialize the canvas, particles, and animation
    setCanvasSize();
    initParticles();
    animate();
    setupInteraction();

    // Add event listener for resizing the window
    window.addEventListener('resize', handleResize);

    // Clean up event listeners on component unmount
    return () => {
      cancelAnimationFrame(animationFrame);
      if ('ontouchstart' in window) {
        window.removeEventListener('touchmove', handleTouchMove);
      } else {
        window.removeEventListener('mousemove', (e) => {
          cursor.x = e.clientX;
          cursor.y = e.clientY;
        });
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="background"></canvas>;
};

export default Background;
