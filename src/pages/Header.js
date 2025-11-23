import React, { useContext, useState } from "react";
import { Home as HomeIcon, User, Briefcase, Mail, Sun, Moon, Menu } from 'lucide-react'; 
import { ThemeContext } from '../App'; 

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to highlight active state could be added here with IntersectionObserver
  // For now, we use simple anchor links.

  return (
    <nav className="navbar navbar-expand-md sticky-top shadow-sm bg-body-tertiary border-bottom">
      <div className="container">
        {/* Brand - Scroll to top */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home" onClick={closeMenu}>
          CS<span className="text-primary">Abordo</span>
        </a>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#home" onClick={closeMenu}>
                <HomeIcon size={18} className="me-2" /> Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#projects" onClick={closeMenu}>
                <Briefcase size={18} className="me-2" /> Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#about" onClick={closeMenu}>
                <User size={18} className="me-2" /> About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#contact" onClick={closeMenu}>
                <Mail size={18} className="me-2" /> Contact
              </a>
            </li>
            
            {/* Theme Toggle */}
            <li className="nav-item ms-md-3 mt-2 mt-md-0">
              <button 
                onClick={() => { toggleDarkMode(); closeMenu(); }}
                className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center border-0"
                style={{ width: '40px', height: '40px' }}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;