import React from 'react';
import profileImg from '../assets/myphoto.png';
import './About.css';
import Reveal from './Reveal';
import AnimatedText from './AnimatedText';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">

                <div className="about-content-wrapper">
                    <div className="about-text-column">
                        <Reveal>
                            <AnimatedText text="ABOUT ME" className="about-title" />
                        </Reveal>

                        <div className="about-text-content">
                            <Reveal>
                                <h3 className="about-subtitle">
                                    Hi, I'm <span className="highlight-name">Khushi Batra</span>
                                </h3>
                            </Reveal>

                            <Reveal>
                                <p className="about-description">
                                    I’m a college student and a full-stack developer who
                                    enjoys building web applications that are clean,
                                    functional, and meaningful. I work with modern web
                                    technologies and focus on creating user-friendly
                                    experiences.
                                </p>
                            </Reveal>

                            <Reveal>
                                <p className="about-description">
                                    I’m actively starting my open-source journey and
                                    participated in Hacktoberfest 2025, contributing
                                    to real-world projects and collaborating with
                                    other developers. I enjoy creating websites that
                                    solve problems and continue to push my skills
                                    forward as I learn and grow.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    <div className="about-image-column">
                        <Reveal>
                            <div className="profile-image-wrapper">
                                <img src={profileImg} alt="Khushi Batra" className="profile-image" />
                            </div>
                        </Reveal>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
