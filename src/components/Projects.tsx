import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaGoogleDrive } from 'react-icons/fa';
import { TbBrandApple, TbBrandGoogle } from 'react-icons/tb';

interface Project {
    title: string;
    category: 'Mobile' | 'Website';
    description: string;
    images: string[];
    tech: string[];
    github: string;
    live?: string;
    testflight?: string;
    drive?: string;
}

const projects: Project[] = [
    {
        title: "ParentFully App",
        category: "Mobile",
        description: "A specialized React Native application for parent-child tracking and resource management. Built with an offline-first architecture.",
        images: ["/projects/parent-app-1.png", "/projects/parent-app-2.png"],
        tech: ["React Native", "Zustand", "Firebase"],
        github: "https://github.com/FushRifle",
        testflight: "#",
        drive: "#"
    },
    {
        title: "Memora Mobile",
        category: "Mobile",
        description: "AI-powered study tool. Transform notes into flashcards instantly using LLM integration on mobile devices.",
        images: ["/projects/memora-m1.png", "/projects/memora-m2.png"],
        tech: ["React Native", "OpenAI", "SQLite"],
        github: "https://github.com/FushRifle",
        drive: "#"
    },
    {
        title: "StackForge",
        category: "Website",
        description: "An advanced platform for developers to forge and share code architectures and component libraries.",
        images: ["/projects/stackforge1.png", "/projects/stackforge2.png"],
        tech: ["Next.js", "PostgreSQL", "Tailwind"],
        github: "https://github.com/FushRifle",
        live: "https://stackforge.dev"
    },
    {
        title: "Parenting & More",
        category: "Website",
        description: "An elegant, content-driven website offering curated parenting resources, expert articles, and practical guides.",
        images: ["/projects/pam1.png"],
        tech: ["Next.js", "Contentful", "Tailwind"],
        github: "https://github.com/FushRifle",
        live: "https://parentingandmore.vercel.app"
    },
    {
        title: "Whispr",
        category: "Website",
        description: "A real-time messaging engine focused on minimal latency and secure socket connections.",
        images: ["/projects/whispr.png"],
        tech: ["Socket.io", "React", "Node.js"],
        github: "https://github.com/FushRifle",
        live: "https://whispr-opal.vercel.app/"
    }
];

const ProjectCard = ({ project }: { project: Project }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % project.images.length);
    const prev = () => setIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

    return (
        <div className="bg-[#0c0c0c] border border-white/5 group hover:border-green-500/20 transition-all duration-700">
            <div className="grid lg:grid-cols-2">

                {/* DEVICE DISPLAY SECTION */}
                <div className="relative py-12 lg:py-20 bg-[#080808] overflow-hidden flex items-center justify-center">

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className={`relative z-10 ${project.category === 'Mobile' ? 'w-[260px]' : 'w-[85%] lg:w-[90%]'}`}>

                        {/* THE PHONE FRAME */}
                        {project.category === 'Mobile' ? (
                            <div className="relative aspect-[9/19] bg-[#1a1a1a] rounded-[2.5rem] border-[7px] border-[#222] shadow-2xl overflow-hidden ring-1 ring-white/10">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#222] rounded-b-2xl z-20" />

                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={index}
                                        src={project.images[index]}
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDragEnd={(_, info) => {
                                            if (info.offset.x < -40) next();
                                            if (info.offset.x > 40) prev();
                                        }}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
                                    />
                                </AnimatePresence>
                            </div>
                        ) : (
                            /* THE BROWSER FRAME */
                            <div className="relative aspect-video bg-[#1a1a1a] rounded-xl border-[4px] border-[#222] shadow-2xl overflow-hidden ring-1 ring-white/10">
                                <div className="h-6 bg-[#222] border-b border-white/5 flex items-center px-3 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={index}
                                        src={project.images[index]}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>
                            </div>
                        )}

                        {/* Chevrons - Only visible on hover for desktop */}
                        {project.images.length > 1 && (
                            <>
                                <button onClick={prev} className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 p-3 text-white/20 hover:text-green-500 transition-colors">
                                    <FaChevronLeft size={24} />
                                </button>
                                <button onClick={next} className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 p-3 text-white/20 hover:text-green-500 transition-colors">
                                    <FaChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-8 lg:p-16 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                    <div className="inline-flex items-center gap-2 mb-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-500 bg-green-500/10 px-3 py-1">
                            {project.category}
                        </span>
                        <div className="h-px w-8 bg-white/10" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest italic">
                            Phase Deployment
                        </span>
                    </div>

                    <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        {project.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-12">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[10px] text-gray-400 border border-white/10 px-3 py-1 uppercase font-bold tracking-widest bg-white/5">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6 border-t border-white/5 pt-8">
                        <a href={project.github} target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-green-500 transition-all group/link">
                            <FaGithub size={18} /> <span className="border-b border-transparent group-hover/link:border-green-500">Repository</span>
                        </a>
                        {project.live && (
                            <a href={project.live} target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-green-500 transition-all group/link">
                                <FaExternalLinkAlt size={16} /> <span className="border-b border-transparent group-hover/link:border-green-500">
                                    Live Demo</span>
                            </a>
                        )}
                        {project.testflight && (
                            <a href={project.testflight} target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-all">
                                <TbBrandApple size={18} /> TestFlight
                            </a>
                        )}
                        {project.drive && (
                            <a href={project.drive} target="_blank" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-all">
                                <FaGoogleDrive size={18} /> APK Package
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-[#0a0a0a] font-mono">
            <div className="max-w-7xl mx-auto px-6 lg:pl-32">
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-px w-12 bg-green-500" />
                        <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.5em]">Works Directory</span>
                    </div>
                    <h2 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none">
                        Recent <br /> <span className="text-transparent outline-text">
                            Projects.</span>
                    </h2>
                </div>

                <div className="space-y-12">
                    {projects.map((proj) => (
                        <ProjectCard key={proj.title} project={proj} />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .outline-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                }
            `}</style>
        </section>
    );
}