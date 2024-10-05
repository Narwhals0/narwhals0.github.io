import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Switch from 'react-switch'; // Your dark mode switch

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuRef = useRef(null); // Reference to the menu element

  // Handle Dark Mode Toggle
  const handleDarkModeChange = () => {
    setDarkMode((prev) => !prev);
  };

  // Toggle the mobile menu open/closed
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  const handleClickInside = (event) => {
    if (menuOpen && menuRef.current && menuRef.current.contains(event.target)) {
      const linkClicked = event.target.closest('a'); // Check if clicked target is a link
      if (!linkClicked) {
        setMenuOpen(false); // Close menu if clicked inside but not on a link
      }
    }
  };

  useEffect(() => {
    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleClickInside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleClickInside);
    };
  }, [menuOpen]); // Re-run effect if menuOpen changes

  // Ensure dark-mode class is added/removed
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <Link to="/" className="logo">Kevin</Link>
      <div className="nav-and-toggle">
        {/* Dark Mode Toggle */}
        <div className="theme-toggle">
          <Switch
            checked={darkMode}
            onChange={handleDarkModeChange}
            offColor="#ddd"
            onColor="#4D4D4D"
            offHandleColor="#fff"
            onHandleColor="#fff"
            uncheckedIcon={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>☀️</div>}
            checkedIcon={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>🌙</div>}
            className="react-switch"
          />
        </div>
        <nav ref={menuRef}>
          {/* Hamburger Menu Icon */}
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${menuOpen ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}> {/* Add dark-mode class here */}
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
            <li><Link to="/skills" onClick={handleLinkClick}>Skills</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
