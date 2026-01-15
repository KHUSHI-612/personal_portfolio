import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className, hoverColor = "#7f7f7f" }) => {
    return (
        <div className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    whileHover={{ color: hoverColor }}
                    transition={{ duration: 0.1 }}
                    style={{ display: "inline-block" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedText;
