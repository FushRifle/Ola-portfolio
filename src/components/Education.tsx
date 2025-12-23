import { FaCalendarAlt, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface EducationItem {
    institution: string;
    duration: string;
    degree: string;
    description: string;
}

const educationData: EducationItem[] = [
    {
        institution: "Modibbo Adama University, Yola",
        duration: "2017 - 2023",
        degree: "B.Tech in Information Management Technology",
        description: "Second Class Upper Division (4.01 / 5.00 CGPA)",
    },
    {
        institution: "American University of Nigeria",
        duration: "2016 - 2017",
        degree: "Major in Telecommunication",
        description: "Inter-University Transfer (2.17 / 4.00 CGPA)",
    }
];

export default function Education() {
    return (
        <section id="aboutme" className="relative py-24 bg-[#0a0a0a] font-mono overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:pl-32">

                {/* Section Header - Industrial Style */}
                <div className="mb-20 border-l-4 border-green-500 pl-8">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500"
                    >
                        Academic Logs
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mt-2"
                    >
                        Education <span className="text-green-500">.</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left: Branding Block */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-[#111] border border-white/10 p-10 relative overflow-hidden group shadow-[10px_10px_0px_0px_rgba(34,197,94,0.1)]"
                        >
                            <FaGraduationCap className="text-6xl text-green-500/20 absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-lg font-black uppercase text-white mb-4 leading-tight">
                                Academic <br /> Foundations
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
                                Certified specialization in Information Systems and Network infrastructure.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Technical Timeline */}
                    <div className="lg:col-span-8 space-y-8">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group relative bg-[#0d0d0d] border-l-2 border-white/10 hover:border-green-500 pl-8 pb-10 transition-colors"
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#0a0a0a] border-2 border-white/20 group-hover:border-green-500 rounded-full transition-colors" />

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                    <div className="flex items-center gap-3">
                                        <FaUniversity className="text-green-500 text-sm" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            {edu.institution}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 border border-white/10">
                                        <FaCalendarAlt className="text-green-500 text-[10px]" />
                                        <span className="text-[10px] font-bold text-gray-300">{edu.duration}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-green-400 transition-colors">
                                    {edu.degree}
                                </h3>

                                <p className="text-gray-500 text-sm max-w-2xl mb-6">
                                    {edu.description}
                                </p>

                                {/* GPA Visualization: Brutalist Style */}
                                {index === 0 && (
                                    <div className="max-w-md bg-[#111] border border-white/5 p-4 shadow-inner">
                                        <div className="flex justify-between items-end mb-3">
                                            <span className="text-[10px] font-black uppercase text-gray-500 tracking-tighter">Scholastic Performance</span>
                                            <span className="text-lg font-black text-green-500 leading-none">4.01/5.00</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/5 relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '80.2%' }}
                                                transition={{ duration: 1.5, ease: "circOut" }}
                                                className="h-full bg-green-500 relative"
                                            >
                                                <div className="absolute right-0 top-0 h-full w-2 bg-white/20 animate-pulse" />
                                            </motion.div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}