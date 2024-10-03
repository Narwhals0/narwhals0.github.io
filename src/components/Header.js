import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu element

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

  useEffect(() => {
    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]); // Re-run effect if menuOpen changes

  return (
    <header className="header">
      <Link to="/" className="logo">Kevin</Link>
      <nav ref={menuRef}>
        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
          <li><Link to="/skills" onClick={handleLinkClick}>Skills</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
