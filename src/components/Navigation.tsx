import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navItems = [
        { name: 'Home', href: '#Home' },
        { name: 'About', href: '#About' },
        { name: 'Skills', href: '#Skills' },
        { name: 'Projects', href: '#Projects' },
        { name: 'Experience', href: '#Experience' },
        { name: 'Contact', href: '#Contact' },
    ];

    // Animation variants
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: { opacity: 0, y: -20 }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <motion.header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background overlay for mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo with animation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="#Home" className="flex items-center group">
                            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                                Abdullahi
                            </span>
                            <span className="ml-2 px-2 py-1 bg-teal-400 text-gray-900 text-xs font-bold rounded group-hover:bg-blue-500 transition-all">
                                DEV
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link
                                    href={item.href}
                                    className="relative group text-gray-700 dark:text-gray-300 font-medium hover:text-teal-400 dark:hover:text-teal-400 transition-colors"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        ))}

                        {/* Hire Me Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="#Contact"
                                className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-400/30 transition-all"
                            >
                                Hire Me
                            </Link>
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-700 dark:text-gray-300 focus:outline-none"
                            aria-label="Toggle menu"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden mt-4 pb-4"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.div
                                className="flex flex-col space-y-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg p-4 shadow-lg z-50 relative"
                            >
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        custom={index}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    custom={navItems.length}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Link
                                        href="#Contact"
                                        className="block px-4 py-2 text-center bg-gradient-to-r from-teal-400 to-blue-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-400/30 transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Hire Me
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}