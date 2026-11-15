import { FaLaptopCode, FaTools, FaCogs, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

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
        <section id="experience" className="bg-zinc-950 py-24 text-white">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-4 flex items-center gap-4"
                    >
                        <div className="h-px w-12 bg-green-500" />
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green-400">Career</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl font-black tracking-tight lg:text-7xl"
                    >
                        Experience <span className="text-white/35">&amp; impact</span>
                    </motion.h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="h-full border-white/10 bg-white/[0.03] text-white transition hover:-translate-y-1 hover:border-green-400/40">
                                <CardHeader className="space-y-5">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-2xl text-green-400">{exp.icon}</span>
                                        <Badge variant="outline" className="border-white/15 text-white/60">{exp.duration}</Badge>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight">{exp.role}</h3>
                                        <p className="mt-1 text-sm font-medium text-green-400">{exp.company}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                                            <FaArrowRight className="mt-1.5 shrink-0 text-[10px] text-green-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                    </ul>
                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => <Badge key={skill} variant="outline" className="border-white/15 text-white/70">{skill}</Badge>)}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
