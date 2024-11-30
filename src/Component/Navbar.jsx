import React, { useState, useEffect } from 'react';
import '../Style/Navbar.css';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`mainNav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logoNav">
        <p>jayeshSingh..</p>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`navLinks ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li className="dropdown">
            Projects
            <ul className="dropdown-menu">
              <li>Web Development</li>
              <li>Design</li>
              <li>Other Projects</li>
            </ul>
          </li>
          <li>Skills</li>
          <li>Contact</li>
          <li>
            <a href={resume} download>
            <button>Download Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  ); 
};

export default Navbar;
