import { motion } from 'framer-motion';
import { FaBezierCurve, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import { SiGo } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';


interface ServiceItem {
    icon: React.ReactElement;
    title: string;
    description: string;
    features: string[];
}

const services: ServiceItem[] = [
    {
        icon: <TbBrandReactNative className="text-green-500" />,
        title: "Cross-Platform Mobile",
        description: "Specialized React Native development for high-performance iOS and Android applications with native-level smoothness.",
        features: ["Custom Native Modules", "Reanimated 3 UI", "Performance Tuning"]
    },
    {
        icon: <FaLaptopCode className="text-green-500" />,
        title: "Scalable Web Systems",
        description: "Building robust frontend architectures with Next.js and TypeScript that share logic seamlessly with mobile counterparts.",
        features: ["SSR & Static Generation", "API Integration", "State Management"]
    },
    {
        icon: <FaBezierCurve className="text-green-500" />,
        title: "Mobile-First Design",
        description: "Engineering design systems specifically for touch interfaces and mobile user behaviors.",
        features: ["Design Systems", "Prototyping", "User Journeys"]
    },
    {
        icon: <SiGo className="text-green-500" />,
        title: "Golang",
        description: "Connecting mobile interfaces to decentralized protocols using Ether.js and specialized smart contract logic.",
        features: ["Smart Contract Logic", "Wallet Integration", "DApp UI"]
    }
];

export default function Services() {
    return (
        <section id="services" className="relative overflow-hidden bg-[#0a0a0a] py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="border-l-4 border-green-500 pl-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500"
                        >
                            What I do
                        </motion.span>
                        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mt-2">
                            Capabilities
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest leading-loose max-w-xs text-right hidden lg:block">
                        Engineered for performance. <br /> Built for scalability. <br /> Delivered with precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-10 transition-all hover:bg-[#111]"
                        >
                            <div className="text-4xl mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed mb-8 min-h-[60px]">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-10">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-1 w-1 bg-green-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-green-500"
                            >
                                Learn more <FaArrowRight />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
