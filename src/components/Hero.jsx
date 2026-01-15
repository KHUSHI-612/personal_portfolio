import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import AnimatedText from './AnimatedText';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section id="hero" className="hero-section" ref={ref}>
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div style={{ x: xLeft, opacity }} className="hero-line">
                        <AnimatedText text="FULL — STACK" className="hero-title" />
                    </motion.div>

                    <motion.div style={{ x: xRight, opacity }} className="hero-line">
                        <AnimatedText text="DEVELOPER" className="hero-title indent-right" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="hero-footer"
                    >
                        <p>SCROLL DOWN</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
