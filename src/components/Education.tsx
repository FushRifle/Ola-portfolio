import { FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';


interface EducationItem {
    institution: string;
    duration: string;
    degree: string;
    description: string;
    delay: string;
}

const educationData: EducationItem[] = [
    {
        institution: "Modibbo Adama University, Yola",
        duration: "2017 - 2023",
        degree: "B.Tech in Information Management Technology",
        description: "Second Class Upper Degree (4.01 CGPA)",
        delay: "100ms"
    },
    {
        institution: "American University of Nigeria",
        duration: "2016 - 2017",
        degree: "Major in Telecommunication",
        description: "Inter-University Transfer (2.17 CGPA)",
        delay: "300ms"
    }
];

export default function Education() {
    return (
        <section id="aboutme" className="py-16 rounded-3xl border-t border-gray-300/40 mt-15">
            {/* Section Header */}
            <div className="text-center mb-16">
                <motion.p
                    className="text-white text-lg uppercase tracking-wider mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    My Education
                </motion.p>
                <motion.h2
                    className="text-4xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    My Education Qualification
                </motion.h2>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
                    {/* Left Header Section */}
                    <div className="lg:w-1/4 bg-gradient-to-r from-green-500 to-teal-400 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="animate-fade-in"></div>
                    </div>

                    {/* Right Content Section */}
                    <div className="lg:w-3/4 bg-white dark:bg-gray-800 p-8 lg:p-12">
                        <div className="space-y-6">
                            {educationData.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`education-item bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all animate-fade-in-up delay-${edu.delay}`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div className="flex items-center mb-2 md:mb-0">
                                            <FaUniversity className="text-blue-500 dark:text-teal-400 mr-3" />
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                {edu.institution}
                                            </h3>
                                        </div>
                                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                                            <FaCalendarAlt className="mr-2 text-blue-500 dark:text-teal-400" />
                                            <span>{edu.duration}</span>
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {edu.degree}
                                    </h4>

                                    <p className="text-gray-600 dark:text-gray-300">
                                        {edu.description}
                                    </p>

                                    {/* Animated progress bar for GPA visualization */}
                                    {index === 0 && (
                                        <div className="mt-4">
                                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
                                                <span>CGPA Progress</span>
                                                <span>4.01/5.0</span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full"
                                                    style={{ width: '80.2%' }} // 4.01/5.0 = 80.2%
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}