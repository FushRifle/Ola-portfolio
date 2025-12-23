import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Link as ScrollLink } from 'react-scroll';
import { FaDownload, FaGithub, FaLinkedinIn, FaTwitter, FaArrowRight, FaCode, FaLayerGroup, FaBolt } from 'react-icons/fa';
import Typed from 'typed.js';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa6';

export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const typed = new Typed('.typing', {
            strings: ['React Native Specialist', 'Mobile Performance Lead', 'Fullstack Architect'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });
        return () => typed.destroy();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const blockVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "circOut" } }
    };

    return (
        <>
            <Head>
                <title>Olawale | Lead Mobile Engineer</title>
            </Head>

            <section id="home" className="relative w-full min-h-screen bg-[#0a0a0a] text-white font-mono overflow-hidden">

                {/* Background Pattern: Technical Grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

                {/* Left Vertical Brand Bar */}
                <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 border-r border-white/10 items-center justify-center bg-black z-[101]">
                    <p className="rotate-90 text-[10px] tracking-[1em] text-gray-500 uppercase font-bold whitespace-nowrap">
                        React Native Engineer • 2025 Portfolio
                    </p>
                </div>

                {/* Navbar: Floating Brutalist Bar */}
                <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl">
                    <div className="bg-[#111] border-2 border-green-500/50 p-4 flex items-center justify-between shadow-[8px_8px_0px_0px_rgba(34,197,94,0.2)]">
                        <ScrollLink
                            to="home"
                            smooth={true}
                            duration={500}
                            className="flex items-center gap-2 cursor-pointer group"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-1">
                                <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">
                                    OLA<span className="text-green-500">WALE</span>
                                    <span className="text-green-500 text-xl">.</span>
                                    <span className="w-fit text-[10px] font-black bg-white text-black px-2 py-0.5 tracking-[0.2em] transform group-hover:bg-green-500 transition-colors duration-300">
                                        DEV
                                    </span>
                                </h2>
                            </div>
                        </ScrollLink>

                        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest">
                            {['About', 'Projects', 'Services', 'Contact'].map((item) => (
                                <ScrollLink key={item} to={item.toLowerCase()} smooth className="hover:text-green-500 transition-all cursor-pointer">
                                    {item}
                                </ScrollLink>
                            ))}
                        </div>

                        <button className="bg-green-500 text-black px-4 py-1 text-xs font-black uppercase hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[-4px_4px_0px_0px_rgba(255,255,255,1)]">
                            Contact
                        </button>
                    </div>
                </nav>

                <div className="max-w-7xl mx-auto px-6 lg:pl-32 pt-48 pb-20">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Text Content */}
                        <motion.div
                            className="flex-1"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={blockVariants as any} className="bg-white text-black inline-block px-4 py-1 mb-6 text-xs font-black uppercase">
                                Available for Senior Roles
                            </motion.div>

                            <motion.h1 variants={blockVariants as any} className="text-6xl lg:text-[100px] font-black leading-none uppercase tracking-tighter mb-8">
                                Mobile <br />
                                <span className="text-green-500 outline-text">Engineer</span>
                            </motion.h1>

                            <motion.div variants={blockVariants as any} className="border-l-4 border-green-500 pl-6 mb-10">
                                <div className="h-8">
                                    <span className="typing text-xl text-gray-400"></span>
                                </div>
                                <p className="text-gray-500 max-w-md text-sm leading-relaxed mt-4">
                                    I build mission-critical mobile applications using <span className="text-white">React Native</span>.
                                    Focused on performance, scalability, and 60FPS animations.
                                </p>
                            </motion.div>

                            <motion.div variants={blockVariants as any} className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-white text-black font-black uppercase text-sm flex items-center gap-4 hover:bg-green-500 transition-colors group">
                                    Start Project <FaArrowRight />
                                </button>
                                <button className="px-8 py-4 border-2 border-white/20 font-black uppercase text-sm flex items-center gap-4 hover:border-green-500 hover:text-green-500 transition-all">
                                    <FaDownload /> Download Resume
                                </button>
                            </motion.div>

                            <motion.div variants={blockVariants as any} className="mt-16 flex gap-10">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Stack</span>
                                    <div className="flex gap-4 text-gray-400 text-lg">
                                        <FaCode title="Typescript" /> <FaLayerGroup title="Redux/Zustand" /> <FaBolt title="Performance" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Connect</span>
                                    <div className="flex gap-4 text-gray-400">
                                        <a href="#" className="hover:text-green-500"><FaGithub /></a>
                                        <a href="#" className="hover:text-green-500"><FaLinkedinIn /></a>
                                        <a href="#" className="hover:text-green-500">
                                            <FaEnvelope />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Visual Side: The "Blueprint" Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex-1 w-full flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-[550px] aspect-square">
                                {/* The "Hard" Image Border */}
                                <div className="absolute inset-0 border-2 border-white/10 translate-x-4 translate-y-4" />
                                <div className="absolute inset-0 border-2 border-green-500 translate-x-8 translate-y-8" />

                                <div className="relative w-full h-full bg-zinc-900 border-2 border-white overflow-hidden group">
                                    <img
                                        src="/images/ola.jpg"
                                        alt="Olawale"
                                        className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                                    />

                                    {/* Technical Overlay Tag */}
                                    <div className="absolute top-0 right-0 bg-green-500 text-black p-4 font-black text-xl">
                                        Fush
                                    </div>

                                    {/* Bottom Info Bar */}
                                    <div className="absolute bottom-0 left-0 w-full bg-white text-black p-6">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-tighter leading-none mb-1">Lead Developer</p>
                                                <p className="text-xl font-black uppercase tracking-tighter">Abdullahi Olawale</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-black uppercase tracking-tighter leading-none mb-1">Status</p>
                                                <p className="text-sm font-black text-green-600">ACTIVE_READY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute bottom-10 right-10 flex flex-col items-center gap-4">
                    <div className="w-[1px] h-20 bg-gradient-to-t from-green-500 to-transparent" />
                    <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 rotate-90 origin-bottom-right">Scroll</span>
                </div>
            </section>
        </>
    );
}