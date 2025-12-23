import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    location: string;
    content: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Mrs. Kudi Fuster",
        role: "Strategic Client",
        location: "Canada",
        content: "Olawale is an exceptional developer who goes above and beyond to deliver outstanding results. He took my vision and turned it into a beautifully designed, highly functional platform. His attention to detail and technical expertise made the process stress-free.",
        avatar: "/testimonial/unnamed.png",
        rating: 5
    },
    {
        id: 2,
        name: "John Abraham",
        role: "Enterprise Partner",
        location: "New York, USA",
        content: "What truly sets Olawale apart is his professionalism and dedication. He is responsive, patient, and always willing to optimize until the system is just right. If you need a reliable, innovative developer, look no further.",
        avatar: "/testimonial/img-1.jpg",
        rating: 5
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

    return (
        <section id="testimonials" className="relative py-24 bg-[#050505] font-mono overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:pl-32">

                {/* Header Block */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[2px] w-12 bg-green-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-green-500">Validation Nodes</span>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white">
                        Clients <span className="text-white/20 italic">Feedback.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-px bg-white/10 border border-white/10">

                    {/* Left: Indicator Sidebar (Desktop) */}
                    <div className="lg:col-span-1 bg-[#0a0a0a] hidden lg:flex flex-col items-center justify-center py-12 gap-8">
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                className={`w-1 transition-all duration-500 ${i === currentIndex ? 'h-12 bg-green-500' : 'h-4 bg-white/10'}`}
                            />
                        ))}
                    </div>

                    {/* Right: Testimonial Content */}
                    <div className="lg:col-span-11 bg-[#0a0a0a] p-8 lg:p-20 relative">
                        <FaQuoteLeft className="absolute top-10 right-10 text-6xl text-white/[0.03]" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10"
                            >
                                <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-12">
                                    {/* Avatar with Industrial Frame */}
                                    <div className="relative">
                                        <div className="w-24 h-24 border-2 border-green-500 p-1">
                                            <div className="w-full h-full bg-[#1a1a1a] grayscale group-hover:grayscale-0 transition-all">
                                                <img
                                                    src={testimonials[currentIndex].avatar}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-3 -right-3 bg-green-500 text-black px-2 py-1 text-[10px] font-black">
                                            VERIFIED
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="text-green-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                            {testimonials[currentIndex].role} // {testimonials[currentIndex].location}
                                        </p>
                                        <div className="flex gap-1 mt-4">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-xs text-green-500" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="text-xl lg:text-3xl font-medium text-gray-300 leading-relaxed italic border-l-4 border-white/5 pl-8 lg:pl-12">
                                    "{testimonials[currentIndex].content}"
                                </blockquote>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Terminal */}
                        <div className="flex mt-16 gap-px bg-white/10 w-fit">
                            <button
                                onClick={prev}
                                className="p-6 bg-white/5 hover:bg-green-500 hover:text-black transition-all text-white border-r border-white/10"
                            >
                                <FaChevronLeft size={20} />
                            </button>
                            <button
                                onClick={next}
                                className="p-6 bg-white/5 hover:bg-green-500 hover:text-black transition-all text-white"
                            >
                                <FaChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Technical Footer */}
                <div className="mt-12 flex justify-between items-center text-[8px] font-black text-white/20 uppercase tracking-[1em]">
                    <span>Social_Trust_Protocol</span>
                    <span className="hidden md:block">Active_Review_Loop</span>
                </div>
            </div>
        </section>
    );
}