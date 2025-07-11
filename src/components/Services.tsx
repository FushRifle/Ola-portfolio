import { motion } from 'framer-motion';
import { FaBezierCurve, FaLaptopCode, FaMobileAlt, FaEthereum, FaCheck } from 'react-icons/fa';

interface ServiceItem {
    icon: React.ReactElement;
    title: string;
    description: string;
    features: string[];
    delay: number;
}

const services: ServiceItem[] = [
    {
        icon: <FaBezierCurve className="text-teal-400" size={48} />,
        title: "Creative Design",
        description: "Combining artistic elements and innovative thinking to produce visually appealing and impactful designs.",
        features: ["UI/UX Design", "Figma", "Mobile App UI/UX"],
        delay: 0.1
    },
    {
        icon: <FaLaptopCode className="text-blue-400" size={48} />,
        title: "Web Development",
        description: "Combining both Front-End and Back-End development to deliver a stunning, interactive and appealing website.",
        features: ["Vue.js", "Angular.js", "Fullstack"],
        delay: 0.3
    },
    {
        icon: <FaMobileAlt className="text-purple-400" size={48} />,
        title: "Mobile Application Development",
        description: "Developing software applications for mobile platforms, such as smartphones, tablets, or digital assistants.",
        features: ["UI/UX Design", "Postgre Database", "Mobile App"],
        delay: 0.5
    },
    {
        icon: <FaEthereum className="text-indigo-400" size={48} />,
        title: "Smart Contract (EVM) Project",
        description: "Smart contracts in high-level languages (like Solidity), which are compiled into EVM bytecode.",
        features: ["UI/UX Design", "Ether.js", "Mobile App Dev."],
        delay: 0.7
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function Services() {
    return (
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-900">

            {/* Section Header */}
            <div className="text-center mb-16">
                <motion.p
                    className="text-black dark:text-white text-lg uppercase tracking-wider mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    My Services
                </motion.p>
                <motion.h2
                    className="text-4xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    What I can do for you
                </motion.h2>
            </div>

            <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
                {/* Left Header Section */}
                <div className="lg:w-1/4 bg-gradient-to-br from-green-500 to-teal-400 p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                    </motion.div>
                </div>

                {/* Right Content Section */}
                <div className="lg:w-3/4 bg-white dark:bg-gray-800 p-8 lg:p-12">
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-item bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                                custom={service.delay}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                    {/* Icon */}
                                    <div className="flex-shrink-0">
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="w-full md:w-1/4">
                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <FaCheck className="text-teal-400 mr-2 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}