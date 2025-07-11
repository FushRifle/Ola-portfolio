import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from 'react-icons/fa';

export default function CTA() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section
            id="contact"
            className="relative py-20 overflow-hidden rounded-3xl border-t border-gray-300/40 mt-15"
        >
            {/* Floating elements */}
            <motion.div
                className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Main CTA heading */}
                    <motion.div>
                        <p className="text-white text-lg uppercase tracking-wider mb-2">Get In Touch</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl text-blue-100 mb-10">
                            Whether you need a full project built, consultation, or just want to chat tech — I'm ready!
                        </p>
                    </motion.div>

                    {/* Call buttons */}
                    <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <motion.a
                            href="tel:+2348102651145"
                            className="cta-button-primary shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPhoneAlt className="mr-2" />
                            Call Me
                        </motion.a>
                        <motion.a
                            href="mailto:ayomikail21@gmail.com"
                            className="cta-button-secondary shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope className="mr-2" />
                            Email Me
                        </motion.a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div className="mb-16">
                        <p className="text-white text-lg uppercase tracking-wider mb-2">Or connect with me on:</p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abdullahi-olawale-mukaila-24370a183", label: "LinkedIn" },
                                { icon: <FaGithub />, url: "https://github.com/FushRifle", label: "GitHub" },
                                { icon: <FaTwitter />, url: "https://x.com/FushRifle", label: "Twitter" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    className="social-icon shadow-4xl"
                                    aria-label={social.label}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-3xl">
                        <p className="text-white text-lg uppercase tracking-wider mb-2">Let's Work Together</p>
                        <h3 className="text-3xl font-bold text-white mb-4">Contact Me</h3>
                        <p className="text-lg text-blue-100 mb-6">
                            I'm currently accepting freelance work, full-time roles, or just fun tech discussions.
                            <br /> (Cat videos and memes are always welcome too.)
                        </p>
                        <form className="max-w-lg mx-auto space-y-4">
                            <motion.input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.textarea
                                placeholder="Your Message (e.g., 'We need your coding superpowers!')"
                                className="w-full p-4 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows={5}
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaPaperPlane />
                                SEND MESSAGE
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
