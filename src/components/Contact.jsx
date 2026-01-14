import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <p className="contact-desc">
                            Whether you have a question or just want to say hi, I'll try my best
                            to get back to you! Currently open for new opportunities.
                        </p>

                        <div className="social-links">
                            <a href="https://github.com/KHUSHI-612" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/khushi-batra-14a114324/" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={24} /></a>
                            <a href="mailto:khushibatra306@gmail.com" className="social-link"><Mail size={24} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
