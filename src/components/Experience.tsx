import { FaLaptopCode, FaTools, FaCogs, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ExperienceItem {
    role: string;
    company: string;
    duration: string;
    description: string[];
    icon: React.ReactNode;
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: "Full-Stack Engineer",
        company: "Voltis Labs",
        duration: "2025 - PRESENT",
        description: [
            "Architecting cross-platform mobile solutions and scalable web apps",
            "Managing cloud infrastructure, DNS, and automated deployment pipelines",
            "Developing high-performance UIs using TypeScript and modern frameworks",
            "Translating complex business logic into efficient technical workflows"
        ],
        icon: <FaLaptopCode />,
        skills: ["React Native", "TypeScript", "Next.js", "Cloud Ops"]
    },
    {
        role: "IT Support Specialist",
        company: "Zonus I.C.T Concept Ltd.",
        duration: "2020 - 2021",
        description: [
            "Engineered hardware solutions and optimized system performance",
            "Managed OS deployment and secure software configurations",
            "Executed critical data recovery and virus mitigation protocols",
            "Provided tier-3 technical troubleshooting for enterprise systems"
        ],
        icon: <FaTools />,
        skills: ["Systems Admin", "Hardware Ops", "Security", "Recovery"]
    },
    {
        role: "Junior CRM Developer",
        company: "MCEE Business Solutions",
        duration: "2018 - 2019",
        description: [
            "Customized Odoo ERP modules to streamline business operations",
            "Developed Python-based logic for CRM automation and reporting",
            "Maintained integrity of existing enterprise resource modules",
            "Collaborated on system integrations and database migrations"
        ],
        icon: <FaCogs />,
        skills: ["Python", "Odoo ERP", "CRM Logic", "Database"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 bg-[#050505] font-mono overflow-hidden">
            {/* Structural Accents */}
            <div className="absolute left-0 top-0 w-px h-full bg-white/5 lg:left-32" />

            <div className="max-w-7xl mx-auto px-6 lg:pl-32">

                {/* Header Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="h-px w-12 bg-green-500" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-green-500">Professional_History</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white"
                    >
                        Experience <span className="text-white/20">Log</span>
                    </motion.h2>
                </div>

                {/* Experience List */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative grid lg:grid-cols-12 gap-8 py-8 border-b border-white/5 hover:bg-white/[0.02] transition-all"
                        >
                            {/* Duration & Icon */}
                            <div className="lg:col-span-3">
                                <p className="text-xs font-black text-gray-500 mb-2">{exp.duration}</p>
                                <div className="inline-flex items-center gap-3 text-green-500">
                                    <span className="text-xl">{exp.icon}</span>
                                    <div className="h-px w-8 bg-green-500/30" />
                                </div>
                            </div>

                            {/* Core Content */}
                            <div className="lg:col-span-6">
                                <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1">
                                    {exp.role}
                                </h3>
                                <p className="text-green-500 text-sm font-bold mb-6 tracking-widest uppercase">
                                    @ {exp.company}
                                </p>

                                <ul className="space-y-4">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                            <FaArrowRight className="mt-1.5 text-[10px] text-green-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Skill Tags */}
                            <div className="lg:col-span-3">
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:border-green-500/50 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Footer Decoration */}
                <div className="mt-20 flex justify-between items-center opacity-20">
                    <div className="text-[10px] font-bold tracking-[0.5em] uppercase">System.Status: Active</div>
                    <div className="h-px flex-1 mx-8 bg-white/20" />
                    <div className="text-[10px] font-bold tracking-[0.5em] uppercase">Olawale_Dev_Terminal</div>
                </div>
            </div>
        </section>
    );
}