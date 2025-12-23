import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import {
    FaReact, FaNodeJs, FaPython, FaApple, FaGooglePlay, FaCode
} from 'react-icons/fa';
import { TbDeviceMobileCode, TbBrandReactNative } from 'react-icons/tb';
import { SiTypescript, SiSupabase, SiFirebase, SiExpo, SiReact } from 'react-icons/si';

interface SkillItem {
    name: string;
    percentage: number;
    icon: React.ReactElement;
    category: string;
}

const skills: SkillItem[] = [
    { name: 'React Native', percentage: 98, icon: <TbBrandReactNative size={28} />, category: 'Core' },
    { name: 'TypeScript', percentage: 95, icon: <SiTypescript size={24} />, category: 'Language' },
    { name: 'Expo / Bare Workflow', percentage: 92, icon: <SiExpo size={24} />, category: 'Ecosystem' },
    { name: 'Node.js / NestJS', percentage: 88, icon: <FaNodeJs size={28} />, category: 'Backend' },
    { name: 'Supabase / PostgreSQL', percentage: 85, icon: <SiSupabase size={24} />, category: 'Database' },
    { name: 'Swift (Native)', percentage: 70, icon: <FaApple size={28} />, category: 'Bridge' },
    { name: 'CI/CD (EAS/Fastlane)', percentage: 80, icon: <FaGooglePlay size={24} />, category: 'DevOps' },
    { name: 'Python / AI', percentage: 75, icon: <FaPython size={28} />, category: 'Data' },
];

const SkillCard = ({ skill, index }: { skill: SkillItem; index: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = skill.percentage;
            const duration = 1.5;
            let totalFrames = Math.round(duration * 60);
            let frame = 0;

            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                setCount(Math.floor(end * progress));
                if (frame === totalFrames) clearInterval(counter);
            }, 1000 / 60);

            return () => clearInterval(counter);
        }
    }, [isInView, skill.percentage]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative bg-[#111] border border-white/10 p-5 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.05)] hover:shadow-[4px_4px_0px_0px_rgba(34,197,94,0.5)] transition-all"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 group-hover:border-green-500/50 transition-colors">
                    <span className="text-gray-400 group-hover:text-green-400">{skill.icon}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 group-hover:text-green-500/50">
                    {skill.category}
                </span>
            </div>

            <div className="mb-2 flex justify-between items-end">
                <h3 className="text-sm font-black uppercase tracking-tight text-gray-300">{skill.name}</h3>
                <span className="text-xl font-black text-green-500 tabular-nums">{count}%</span>
            </div>

            {/* Brutalist Progress Bar */}
            <div className="h-1 w-full bg-white/5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                />
            </div>
        </motion.div>
    );
};

export default function Skills() {
    return (
        <section id="services" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
            {/* Technical grid overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto px-6 lg:pl-32">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left side: Header info */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-green-500 text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                                Core Competencies
                            </span>
                            <h2 className="text-5xl font-black uppercase tracking-tighter mt-6 mb-8 leading-none">
                                Technical <br /> <span className="text-green-500">Arsenal</span>
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-10">
                                Specialized in cross-platform mobile development with a heavy focus on performance,
                                native bridge integration, and highly interactive user interfaces.
                            </p>

                            {/* Decorative detail */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-green-500 transition-colors">
                                    <FaCode className="text-gray-600 group-hover:text-green-500" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-white uppercase tracking-widest">Architecture</p>
                                    <p className="text-xs text-gray-500">Atomic Design • Clean Architecture</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Skills Grid */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}