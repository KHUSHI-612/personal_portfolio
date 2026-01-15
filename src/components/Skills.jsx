import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Skills.css';
import Reveal from './Reveal';

const SkillLine = ({ text, direction = 1, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], direction > 0 ? ["-10%", "10%"] : ["10%", "-10%"]);

    return (
        <div ref={ref} className="skill-line-wrapper">
            <motion.div
                className="skill-line"
                style={{ x }}
                initial={{ color: "#333333" }}
                whileInView={{ color: "#f97316" }}
                viewport={{ margin: "-45% 0px -45% 0px" }} 
                transition={{ duration: 0.5 }}
            >
                
                {text} &mdash; {text} &mdash; {text} &mdash; {text} &mdash; {text}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    const lines = [
        "HTML — CSS — JS — REACT",
        "NODE — EXPRESS — MONGO",
        "PYTHON — GITHUB — FIGMA"
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container skills-container">
                <div className="section-header">
                    <Reveal>
                        <h2 className="section-title">Skills</h2>
                    </Reveal>
                </div>

                <div className="skills-marquee">
                    {lines.map((text, i) => (
                        <SkillLine key={i} text={text} direction={i % 2 === 0 ? 1 : -1} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
