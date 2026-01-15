import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo-container">
                 
                </div>

                <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="hero" smooth={true} duration={800} offset={-80} onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={800} offset={-80} onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={800} offset={-80} onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={800} offset={-80} onClick={closeMobileMenu}>Skills</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={800} offset={-80} onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>

                <a
                    href="https://drive.google.com/file/d/1XucTb0dqqltc7FfJcV3pyrr67EAOdQDt/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn"
                >
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
