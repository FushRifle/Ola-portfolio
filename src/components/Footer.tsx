import { motion } from 'framer-motion';
import {
    FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
    FaPhoneAlt, FaMapMarkerAlt, FaClock
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Web Development", href: "#services" },
                { name: "Mobile Apps", href: "#services" },
                { name: "UI/UX Design", href: "#services" },
                { name: "Consulting", href: "#services" }
            ]
        }
    ];

    const contactInfo = [
        { icon: <FaMapMarkerAlt />, text: "Fed. Housing Estate, Yola, Nigeria" },
        { icon: <FaEnvelope />, text: "ayomikail21@gmail.com" },
        { icon: <FaPhoneAlt />, text: "+234 8102 651 145" },
        { icon: <FaClock />, text: "Mon-Fri: 9AM - 5PM" }
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/FushRifle" },
        { icon: <FaLinkedin />, href: "https://linkedin.com/in/abdullahi-olawale-mukaila-24370a183" },
        { icon: <FaTwitter />, href: "https://twitter.com/FushRifle" }
    ];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-300/40">
            {/* Floating elements */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
                >
                    {/* Brand Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent">
                                Olawale
                            </span>
                            <span className="text-[50px] leading-none">.</span>
                            <span className="ml-2 px-2 py-1 text-xs font-bold text-gray-900 bg-green-500 rounded group-hover:bg-blue-500 transition-all">
                                DEV
                            </span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Fullstack developer creating modern web and mobile applications with cutting-edge technologies.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-col md:flex-row flex-wrap gap-8">
                        {footerLinks.map((section, index) => (
                            <div key={index} className="flex-1 min-w-[140px]">
                                <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, i) => (
                                        <motion.li
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="text-gray-400 hover:text-teal-400 transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3 text-gray-400"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-teal-400 mt-1 flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    <span>{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                    className="border-t border-gray-800 my-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                />

                {/* Copyright */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div>
                        &copy; {currentYear} Abdullahi Olawale Mukaila. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-teal-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}