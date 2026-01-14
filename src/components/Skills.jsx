import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express.js', 'Python']
        },
        {
            title: 'Database',
            skills: ['MongoDB', 'MySQL']
        },
        {
            title: 'Tools',
            skills: ['GitHub', 'VS Code', 'Excel', 'Figma', 'Canva']
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills</h2>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
