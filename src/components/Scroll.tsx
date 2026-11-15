import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 animate-bounce"
                >
                    <Button onClick={scrollToTop} variant="ghost" className="gap-2 text-[11px] font-black uppercase text-green-500">
                        Return Home <FaArrowUp />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
