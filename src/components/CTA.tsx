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

    return (
        <section
            id="contact"
            className="relative py-24 overflow-hidden bg-[#050505] font-mono"
        >
            {/* Ambient Background Accents */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"
                animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-[120px]"
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:pl-32 relative z-10">
                <motion.div
                    className="max-w-4xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Header Section */}
                    <motion.div className="mb-16">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="h-px w-12 bg-green-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-green-500">Contact_Initiation</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6">
                            Ready to Build <br /> <span className="text-white/20 italic">Something Amazing?</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                            Whether you need a high-performance mobile app, a scalable web architecture,
                            or just want to talk shop—my line is open.
                        </p>
                    </motion.div>

                    {/* Quick Contact Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        <motion.a
                            href="tel:+2348102651145"
                            className="flex items-center justify-between p-8 bg-white/5 border border-white/10 hover:border-green-500 transition-all group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-green-500 text-xl" />
                                <span className="text-xs font-black uppercase tracking-widest text-white">+234 810 265 1145</span>
                            </div>
                            <span className="text-[10px] text-gray-600 group-hover:text-green-500">CALL</span>
                        </motion.a>

                        <motion.a
                            href="mailto:ayomikail21@gmail.com"
                            className="flex items-center justify-between p-8 bg-white/5 border border-white/10 hover:border-green-500 transition-all group"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-green-500 text-xl" />
                                <span className="text-xs font-black uppercase tracking-widest text-white">ayomikail21@gmail.com</span>
                            </div>
                            <span className="text-[10px] text-gray-600 group-hover:text-green-500">EMAIL</span>
                        </motion.a>
                    </div>

                    {/* Glassmorphic Contact Form */}
                    <motion.div className="bg-[#111] border border-white/5 p-8 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-1 bg-green-500" />

                        <div className="mb-12">
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Drop a Message</h3>
                            <p className="text-gray-500 text-sm italic uppercase tracking-widest">
                                (Cat videos and memes are always welcome.)
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-green-500 transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-green-500 transition-colors"
                                />
                            </div>
                            <textarea
                                placeholder="Describe your project vision..."
                                className="w-full p-4 bg-white/5 border border-white/10 text-white text-sm outline-none focus:border-green-500 transition-colors resize-none"
                                rows={5}
                            />
                            <motion.button
                                type="submit"
                                className="w-full py-5 bg-green-500 text-black font-black uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-3 hover:bg-green-400 transition-all"
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaPaperPlane />
                                EXECUTE_TRANSMISSION
                            </motion.button>
                        </form>

                        {/* Social Matrix */}
                        <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8">
                            {[
                                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abdullahi-olawale-mukaila-24370a183", label: "LinkedIn" },
                                { icon: <FaGithub />, url: "https://github.com/FushRifle", label: "GitHub" },
                                { icon: <FaTwitter />, url: "https://x.com/FushRifle", label: "Twitter" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    className="text-gray-500 hover:text-green-500 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors"
                                    whileHover={{ y: -2 }}
                                >
                                    {social.icon} {social.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}