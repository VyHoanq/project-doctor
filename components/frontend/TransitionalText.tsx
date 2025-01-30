'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransitionalText({ TEXTS, className }: { TEXTS: string[], className?: string }) {
    const [index, setIndex] = React.useState(0);
    const currentText = TEXTS[index % TEXTS.length];

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000
        );
        return () => clearInterval(intervalId);
    }, []);

    return (
        <span className={className}>
            <AnimatePresence mode="wait" >
                <motion.span
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {currentText}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
