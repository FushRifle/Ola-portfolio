import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    liveUrl?: string;
    githubUrl: string;
    images: string[];
    techStack: string[];
}

const projects: Project[] = [
    {
        title: "Memora",
        description:
            "An AI-powered study assistant that transforms your notes into concise summaries, generates practice quizzes automatically, and helps organize study materials for better retention. Built to support students and lifelong learners with smart NLP and seamless UX.",
        liveUrl: "https://memora-fush.vercel.app/",
        githubUrl: "https://github.com/FushRifle/Memora",
        images: ["/projects/memora.png", "/projects/memora2.png"],
        techStack: ["AI", "Next.js", "TypeScript", "OpenAI API"]
    },
    {
        title: "Whispr",
        description:
            "A sleek, real-time messaging web application featuring live chat rooms, instant notifications, and user presence indicators. Focused on seamless communication and minimal latency, leveraging WebSockets and a responsive UI for a modern chat experience.",
        liveUrl: "https://whispr-opal.vercel.app/",
        githubUrl: "https://github.com/FushRifle/Whispr",
        images: ["/projects/whispr1.png", "/projects/whispr2.png"],
        techStack: ["WebSockets", "React", "Node.js", "MongoDB"]
    },
    {
        title: "Parenting Guide",
        description:
            "An elegant, content-driven website offering curated parenting resources, expert articles, and practical guides. Designed to help parents navigate challenges and milestones, featuring a clean interface and structured content management for easy updates.",
        liveUrl: "https://parentingandmore.vercel.app",
        githubUrl: "https://github.com/FushRifle/more-parenting",
        images: ["/projects/PAM2.png", "/projects/PAM.png"],
        techStack: ["Next.js", "Content Management", "Parenting Resources"]
    }
];

const ProjectCard = ({ project }: { project: Project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () =>
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );

    const prevImage = () =>
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col lg:flex-row">
                {/* Image carousel */}
                <div className="relative lg:w-1/2 group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]}
                            alt={project.title}
                            className="w-full h-64 lg:h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>

                    {/* Arrows */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                                aria-label="Previous"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                                aria-label="Next"
                            >
                                <FaChevronRight />
                            </button>
                        </>
                    )}

                    {/* Dots */}
                    {project.images.length > 1 && (
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                            {project.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                    aria-label={`Go to image ${idx + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Text content */}
                <div className="lg:w-1/2 p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition"
                            >
                                <FaExternalLinkAlt className="mr-2" /> Live Demo
                            </a>
                        )}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                        >
                            <FaGithub className="mr-2" /> View Code
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    return (
        <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-black dark:text-white text-lg uppercase tracking-wider mb-2">My Work</p>
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Recent Projects</h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} project={proj} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
