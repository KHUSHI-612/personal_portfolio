import React from 'react';
import localBuzzImage from '../assets/localbuzz.png';
import qverseImage from '../assets/qverse.png';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Local Buzz',
            description: 'Local Buzz is a full-stack web application that enables local shop owners to set up and manage their online stores, while customers can browse and purchase products directly from nearby businesses.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            links: { github: 'https://github.com/KHUSHI-612/Localbuzz', demo: 'https://localbuzz-roan.vercel.app/login' },
            image: localBuzzImage
        },
        {
            title: 'Qverse',
            description: 'A knowledge-sharing platform where users can ask questions and get answers from the community.',
            tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
            links: { github: 'https://github.com/KHUSHI-612/qverse', demo: 'https://qverse-seven.vercel.app/' },
            image: qverseImage
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My Projects</h2>
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                            <div className="project-details">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    <span className="tech-label">tech stack :</span>
                                    <span className="tech-list">{project.tech.join(', ')}</span>
                                </div>
                                <div className="project-buttons">
                                    <a href={project.links.github} className="btn-project" target="_blank" rel="noopener noreferrer">code</a>
                                    <a href={project.links.demo} className="btn-project" target="_blank" rel="noopener noreferrer">hosted</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
