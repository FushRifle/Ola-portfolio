import { useState, useEffect, useRef } from 'react';
import {
    FaReact, FaFigma, FaPhp, FaJsSquare,
    FaHtml5, FaJava, FaAngular, FaWordpress
} from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

interface SkillItem {
    name: string;
    percentage: number;
    icon: React.ReactElement;
    color: string;
}

const skills: SkillItem[] = [
    { name: 'WordPress', percentage: 98, icon: <FaWordpress size={36} />, color: 'from-blue-600 to-blue-800' },
    { name: 'Figma', percentage: 95, icon: <FaFigma size={36} />, color: 'from-purple-600 to-purple-800' },
    { name: 'PHP', percentage: 87, icon: <FaPhp size={36} />, color: 'from-indigo-600 to-indigo-800' },
    { name: 'React.js', percentage: 85, icon: <FaReact size={36} />, color: 'from-cyan-600 to-cyan-800' },
    { name: 'JavaScript', percentage: 67, icon: <FaJsSquare size={36} />, color: 'from-yellow-500 to-yellow-700' },
    { name: 'HTML & CSS', percentage: 98, icon: <FaHtml5 size={36} />, color: 'from-orange-600 to-orange-800' },
    { name: 'Java', percentage: 98, icon: <FaJava size={36} />, color: 'from-red-600 to-red-800' },
    { name: 'Angular.js', percentage: 87, icon: <FaAngular size={36} />, color: 'from-red-500 to-red-700' },
];

const SkillCard = ({ skill }: { skill: SkillItem }) => {
    const [count, setCount] = useState(0);
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
            const increment = skill.percentage / 20;
            let currentCount = 0;

            const timer = setInterval(() => {
                currentCount += increment;
                if (currentCount > skill.percentage) {
                    currentCount = skill.percentage;
                    clearInterval(timer);
                }
                setCount(Math.floor(currentCount));
            }, 50);

            return () => clearInterval(timer);
        }
    }, [isInView, skill.percentage, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${skill.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
        >
            <div className="flex justify-center mb-4 text-white">
                {skill.icon}
            </div>
            <div className="flex justify-center items-center mb-2">
                <motion.span
                    className="text-3xl font-bold text-white"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        when: "afterChildren"
                    }}
                >
                    {count}
                </motion.span>
                <span className="text-2xl font-bold text-white ml-1">%</span>
            </div>
            <p className="text-white text-sm font-semibold text-center mt-4">{skill.name}</p>

            {/* Animated progress bar */}
            <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                <motion.div
                    className="bg-white h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
            {/* Section Header */}
            <div className="text-center mb-16">
                <motion.p
                    className="text-white text-lg uppercase tracking-wider mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    My Skills
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
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
                    {/* Left Header Section */}
                    <div className="lg:w-1/4 bg-gradient-to-r from-green-500 to-teal-400 p-8 lg:p-12 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                        </motion.div>
                    </div>

                    {/* Right Skills Grid */}
                    <div className="lg:w-3/4 bg-white dark:bg-gray-800 p-8 lg:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}