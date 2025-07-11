import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Link as ScrollLink } from 'react-scroll';
import { FaDownload, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    // Typed.js initialization
    useEffect(() => {
        const typed = new Typed('.typing', {
            strings: ['FullStack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile Apps Developer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
        });
        return () => typed.destroy();
    }, []);

    return (
        <>
            <Head>
                <title>Abdullahi Olawale Mukaila | Fullstack Developer</title>
                <meta name="description" content="Experienced fullstack developer specializing in modern web and mobile technologies" />
            </Head>

            <section id="home" className="relative w-full min-h-screen bg-black overflow-hidden">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-fixed"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                <div className="relative z-50">
                    {/* Navbar */}
                    <motion.header
                        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-16 py-1 shadow-lg bg-black/80 backdrop-blur-md"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="flex flex-row items-center group cursor-pointer"
                            >
                                <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                                    Olawale
                                </span>
                                <span className="text-[50px] leading-none">.</span>
                                <span className="ml-1 px-2 py-1 text-xs font-bold text-gray-900 bg-green-500 rounded group-hover:bg-blue-500 transition-all">DEV
                                </span>
                            </ScrollLink>

                        </motion.div>


                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="block md:hidden"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>

                        {/* Nav links */}
                        <nav className={`${menuOpen ? 'block' : 'hidden'} md:block`}>
                            <ul className="flex flex-col md:flex-row md:space-x-6 text-white text-base pt-4 md:pt-0">
                                {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ScrollLink
                                            to={item.replace(/\s+/g, '').toLowerCase()}
                                            spy={true}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            className={`block md:p-4 py-2 cursor-pointer ${item === 'Home' ? 'text-green-500' : 'hover:text-green-500 transition-colors'
                                                }`}
                                            activeClass="text-green-500"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item}
                                        </ScrollLink>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                    </motion.header>

                    {/* Hero Section */}
                    <motion.div
                        className="relative top-10 pb-20 mt-20"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 px-6 lg:px-16">
                            {/* Left: Text */}
                            <motion.div className="text-white text-center sm:text-left" variants={itemVariants}>
                                <h4 className="text-2xl font-semibold mb-4 bg-gray-900/40 p-3 rounded-lg">
                                    Hello, my name is{' '}
                                    <span className="text-green-500 font-serif">Abdullahi Olawale Mukaila</span>
                                </h4>
                                <h1 className="text-3xl sm:text-4xl mb-6">
                                    <span className="typing text-green-500">I'm Driven by a passion</span>
                                </h1>
                                <p className="mb-6 text-lg max-w-xl">
                                    for leveraging technology to optimize business operations. I bring a proactive approach and exceptional communication skills to every task.
                                </p>
                                <p className="mb-8 text-lg max-w-xl">
                                    Experienced full-stack developer with 4+ years of expertise in React.js, Typescript, NestJS, Nuxt.js, Next.js, Python, and React-Native.
                                </p>

                                {/* Contact */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className="text-green-400 mr-3" />
                                        <span>Jimeta, Yola, NG.</span>
                                    </div>
                                    <div className="flex items-center">
                                        <FaEnvelope className="text-green-400 mr-3" />
                                        <span>ayomikail21@gmail.com</span>
                                    </div>
                                    <div className="flex items-center flex-wrap gap-2">
                                        <FaPhoneAlt className="text-green-400 mr-3" />
                                        <span>(+234) 8102 65 1145</span>
                                        <span>(+234) 7016 22 3419</span>
                                    </div>
                                </div>

                                {/* Socials */}
                                <div className="flex justify-center sm:justify-start gap-4 mb-8">
                                    <a href="https://github.com/FushRifle" aria-label="GitHub" className="social-icon"><FaGithub /></a>
                                    <a href="https://www.linkedin.com/in/abdullahi-olawale-mukaila-24370a183" aria-label="LinkedIn" className="social-icon"><FaLinkedinIn /></a>
                                    <a href="https://twitter.com/FushRifle" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                                    <motion.a
                                        href="#contact"
                                        className="cta-button-primary flex items-center gap-2 px-6 py-2 rounded-full border border-green-500 hover:bg-green-600/30 transition"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaPhoneAlt />
                                        Hire Me
                                    </motion.a>
                                    <motion.a
                                        href="/docs/abdullahi-olawale.docx"
                                        download="Abdullahi-Olawale-CV.pdf"
                                        className="cta-button-secondary flex items-center gap-2 px-6 py-2 rounded-full border border-yellow-500 hover:bg-yellow-600/30 transition"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaDownload />
                                        Download CV
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Right: Image */}
                            <motion.div className="relative group md:max-w-[30rem]" variants={itemVariants}>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-400/10 rounded-xl blur-md animate-pulse" />
                                    <img
                                        src="/images/ola.jpg"
                                        alt="Abdullahi Olawale Mukaila"
                                        className="relative z-10 w-full rounded-xl rounded-br-[3rem] rounded-tl-[3rem] border-4 border-green-400/60 hover:border-green-500/80 transition"
                                    />
                                    <div className="absolute inset-0 bg-green-500/10 rounded-xl group-hover:bg-transparent transition" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
