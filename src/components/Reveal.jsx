import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 }); // Trigger every time, not just once

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
