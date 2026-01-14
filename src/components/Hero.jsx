import React from 'react';
import { Github, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="static-hero-content">
                        <h2 className="greeting-text">HI I’M</h2>
                        <h1 className="main-name">KHUSHI BATRA</h1>
                        <p className="hero-description">
                            Turning ideas into clean, responsive web experiences.
                        </p>

                        <div className="get-in-touch-wrapper">
                            <span className="get-in-touch-text">GET IN TOUCH</span>
                            <div className="hero-social-links">
                                <a href="https://github.com/KHUSHI-612" target="_blank" rel="noopener noreferrer" className="hero-social-link">
                                    <Github size={32} />
                                </a>
                                <a href="mailto:khushibatra306@gmail.com" className="hero-social-link">
                                    <Mail size={32} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
