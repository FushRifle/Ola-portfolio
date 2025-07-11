import { FaLaptopCode, FaTools, FaCogs } from 'react-icons/fa';
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
        role: "Front-End Developer",
        company: "Voltis Labs",
        duration: "2025 - Present",
        description: [
            "Developed full-stack web applications for diverse clients",
            "Managed web hosting including DNS and domain configuration",
            "Built responsive websites using HTML, CSS, and JavaScript",
            "Customized WordPress templates to meet client specifications"
        ],
        icon: <FaLaptopCode className="text-green-500 dark:text-green-400" size={20} />,
        skills: ["Typescript", "JavaScript", "GraphQL", "DNS Management"]
    },
    {
        role: "IT Support Specialist",
        company: "Zonus I.C.T Concept Ltd.",
        duration: "2020 - 2021",
        description: [
            "Diagnosed and repaired hardware issues in computers and peripherals",
            "Installed and configured operating systems and software",
            "Provided technical support and system optimization",
            "Performed data recovery and virus removal"
        ],
        icon: <FaTools className="text-yellow-500 dark:text-yellow-400" size={20} />,
        skills: ["Hardware Repair", "System Admin", "Tech Support", "Data Recovery"]
    },
    {
        role: "Junior CRM Developer",
        company: "MCEE Business Solutions",
        duration: "2018 - 2019",
        description: [
            "Developed and customized applications within Odoo ERP system",
            "Implemented CRM features to meet business requirements",
            "Maintained and updated existing Odoo modules",
            "Collaborated with team on system integrations"
        ],
        icon: <FaCogs className="text-purple-500 dark:text-purple-400" size={20} />,
        skills: ["Odoo Framework", "Python", "ERP Systems", "CRM Development"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
            {/* Section Header */}
            <div className="text-center mb-16">
                <motion.p
                    className="text-white text-lg uppercase tracking-wider mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    My Experiences
                </motion.p>
                <motion.h2
                    className="text-4xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    My Expertise Skills
                </motion.h2>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto px-4">
                {/* Vertical timeline line */}
                <div className="absolute top-0 left-4 md:left-1/2 w-1 bg-gradient-to-b from-green-500 to-teal-500 h-full transform md:-translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`mb-12 flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Timeline dot */}
                        <div className="relative z-10 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-4 border-green-500 dark:border-green-400 shadow-md mx-auto md:mx-0 md:absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mb-4 md:mb-0">
                            {exp.icon}
                        </div>

                        {/* Content card */}
                        <div className={`bg-gradient-to-r from-green-600 to-teal-500 text-white p-5 sm:p-6 rounded-lg shadow-lg w-full md:w-5/12 ${index % 2 === 0 ? "md:ml-auto md:mr-4" : "md:mr-auto md:ml-4"
                            }`}>
                            <h3 className="text-lg sm:text-xl font-semibold mb-1">{exp.role}</h3>
                            <p className="text-gray-200 mb-3 text-sm sm:text-base">
                                {exp.company} · <span className="text-gray-300">{exp.duration}</span>
                            </p>

                            <ul className="mb-4 space-y-2 ">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-xs sm:text-sm text-white text-lg uppercase tracking-wider mb-2">
                                        <span className="text-yellow-300 mr-2">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-white/20 text-white text-lg uppercase tracking-wider mb-2 text-xs sm:text-sm px-2 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
