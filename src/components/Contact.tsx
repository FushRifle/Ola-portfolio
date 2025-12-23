import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-[#050505] font-mono overflow-hidden">
            {/* Background Structural Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-6 lg:pl-32 relative z-10">

                {/* Header Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-12 bg-green-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-green-500 animate-pulse">
                            System_Status: Ready
                        </span>
                    </div>
                    <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white">
                        Connect <span className="text-white/20 italic">_</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-16">

                    {/* Left: Contact Info & Socials */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h3 className="text-xl font-black uppercase text-white mb-6">Transmission Hub</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                                Open for **Mobile Architecture** consultation, **Full-Stack** roles, or discussing why **React Native** is superior to Flutter.
                                <br /><br />
                                Response latency: {"<"} 24 hours.
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:your-email@example.com" className="flex items-center gap-4 text-gray-400 hover:text-green-500 transition-colors group">
                                    <div className="p-3 bg-white/5 border border-white/10 group-hover:border-green-500/50">
                                        <FaEnvelope size={18} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest">olawale@voltislabs.dev</span>
                                </a>
                                <a href="https://wa.me/your-number" className="flex items-center gap-4 text-gray-400 hover:text-green-500 transition-colors group">
                                    <div className="p-3 bg-white/5 border border-white/10 group-hover:border-green-500/50">
                                        <FaWhatsapp size={18} />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest">+234 XXX XXX XXXX</span>
                                </a>
                            </div>
                        </div>

                        {/* Social Logic */}
                        <div className="flex gap-4">
                            {[
                                { icon: <FaGithub />, link: "#", label: "GH" },
                                { icon: <FaLinkedin />, link: "#", label: "LN" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.link}
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase hover:bg-green-500 hover:text-black transition-all"
                                >
                                    {social.icon} {social.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Brutalist Form */}
                    <div className="lg:col-span-7">
                        <form className="space-y-px bg-white/10 border border-white/10 shadow-[20px_20px_0px_0px_rgba(34,197,94,0.05)]">
                            <div className="grid md:grid-cols-2">
                                <div className="p-6 bg-[#0a0a0a] border-r border-b border-white/10 focus-within:bg-[#111] transition-colors">
                                    <label className="block text-[8px] font-black text-green-500 uppercase tracking-widest mb-2">Input_User_Name</label>
                                    <input
                                        type="text"
                                        placeholder="Identification"
                                        className="w-full bg-transparent text-white outline-none placeholder:text-gray-700 text-sm font-bold"
                                    />
                                </div>
                                <div className="p-6 bg-[#0a0a0a] border-b border-white/10 focus-within:bg-[#111] transition-colors">
                                    <label className="block text-[8px] font-black text-green-500 uppercase tracking-widest mb-2">Input_Email_Address</label>
                                    <input
                                        type="email"
                                        placeholder="communication@node.com"
                                        className="w-full bg-transparent text-white outline-none placeholder:text-gray-700 text-sm font-bold"
                                    />
                                </div>
                            </div>

                            <div className="p-6 bg-[#0a0a0a] focus-within:bg-[#111] transition-colors">
                                <label className="block text-[8px] font-black text-green-500 uppercase tracking-widest mb-2">Transmission_Details</label>
                                <textarea
                                    rows={5}
                                    placeholder="We need a React Native expert to build..."
                                    className="w-full bg-transparent text-white outline-none placeholder:text-gray-700 text-sm font-bold resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-8 bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-[0.5em] text-xs flex items-center justify-center gap-4 transition-all active:scale-[0.98]"
                            >
                                <FaPaperPlane /> Execute_Send
                            </button>
                        </form>

                        <p className="mt-6 text-[8px] text-gray-600 uppercase tracking-widest text-center">
                            By clicking Execute, you agree to start something legendary.
                        </p>
                    </div>
                </div>

                {/* Footer Credits */}
                <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                    <span>© 2025 Olawale_Portfolio_System</span>
                    <div className="flex gap-8">
                        <span>Built_with: React_Native_Web</span>
                        <span>Design: Brutalist_V3</span>
                    </div>
                </div>
            </div>
        </section>
    );
}