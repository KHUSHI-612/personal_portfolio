import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import Reveal from './Reveal';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "khushibatra306@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <div className="section-header">
                    <Reveal>
                        <h2 className="section-title">Get In Touch</h2>
                    </Reveal>
                </div>

                <div className="contact-content-centered">
                    <Reveal>
                        <p className="contact-desc">
                            Whether you have a question or just want to say hi, I'll try my best
                            to get back to you! Currently open for new opportunities.
                        </p>
                    </Reveal>

                    <Reveal>
                        <div className="email-container-padded">
                            <div className="email-wrapper" onClick={handleCopy}>
                                <h2 className="contact-email">{email}</h2>
                                <div className="copy-pill">
                                    {copied ? "COPIED!" : "CLICK TO COPY"}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="social-pills-container-padded">
                            <div className="social-pills">
                                <a href="https://github.com/KHUSHI-612" target="_blank" rel="noopener noreferrer" className="social-pill">GITHUB</a>
                                <a href="https://www.linkedin.com/in/khushi-batra-14a114324/" target="_blank" rel="noopener noreferrer" className="social-pill">LINKEDIN</a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
