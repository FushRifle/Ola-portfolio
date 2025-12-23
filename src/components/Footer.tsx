import { motion } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
    FaPhoneAlt, FaMapMarkerAlt, FaClock, FaArrowUp
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Navigation",
            links: [
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
            ]
        },
        {
            title: "Specialties",
            links: [
                { name: "React Native", href: "#services" },
                { name: "Web Systems", href: "#services" },
                { name: "EVM Smart Contracts", href: "#services" },
                { name: "Technical Consulting", href: "#services" }
            ]
        }
    ];

    const contactInfo = [
        { icon: <FaMapMarkerAlt />, text: "Abuja, Nigeria", label: "LOC" },
        { icon: <FaEnvelope />, text: "ayomikail21@gmail.com", label: "MAIL" },
        { icon: <FaPhoneAlt />, text: "+234 7016 223 419", label: "TEL" },
        { icon: <FaClock />, text: "GMT+1 // 09:00 - 17:00", label: "UTC" }
    ];

    return (
        <footer className="relative bg-[#050505] pt-24 pb-12 border-t border-white/5 font-mono overflow-hidden">
            {/* Background Data Decoration */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.02] text-[120px] font-black leading-none select-none pointer-events-none">
                BUILD LOG
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:pl-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black tracking-tighter text-white uppercase italic">
                            OLA<span className="text-green-500">WALE</span>
                            <span className="text-green-500 text-xl">.</span>
                            <span className="w-fit text-[10px] font-black bg-white text-black px-2 py-0.5 tracking-[0.2em] transform group-hover:bg-green-500 transition-colors duration-300">
                                DEV
                            </span>
                        </h2>
                        <p className="text-gray-500 text-xs leading-relaxed max-w-[240px] uppercase">
                            Engineering high-performance mobile architectures and scalable web protocols from Nigeria to the world.
                        </p>
                        <div className="flex gap-2">
                            {[
                                { icon: <FaGithub />, href: "https://github.com/FushRifle" },
                                { icon: <FaLinkedin />, href: "https://linkedin.com/in/abdullahi-olawale-mukaila-24370a183" },
                                { icon: <FaTwitter />, href: "https://twitter.com/FushRifle" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="p-3 bg-white/5 border border-white/10 text-white hover:bg-green-500 hover:text-black transition-all"
                                    whileHover={{ y: -3 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-green-500 mb-8">
                                {section.title} Map
                            </h3>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="h-px w-0 bg-green-500 group-hover:w-4 transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Technical Contact Block */}
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-green-500 mb-8">
                            Contact Protocol
                        </h3>
                        <div className="space-y-1">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex flex-col gap-1">
                                    <span className="text-[8px] font-black text-white/20 tracking-widest uppercase">{item.label}</span>
                                    <div className="flex items-center gap-3 text-gray-400 text-xs font-bold">
                                        <span className="text-green-500">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final Status Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">
                        <span>&copy; {currentYear} FUSH</span>
                        <span className="hidden md:block h-1 w-1 bg-white/10" />
                        <span className="hidden md:block tracking-[0.3em]">Built with Love</span>
                    </div>

                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[10px] font-black uppercase text-gray-600 hover:text-green-500 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-[10px] font-black uppercase text-gray-600 hover:text-green-500 transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}