import { motion } from 'framer-motion';
import {
    FaBezierCurve, FaLaptopCode, FaMobileAlt,
    FaEthereum, FaCheck, FaArrowRight
} from 'react-icons/fa';
import { SiGo, SiSolidity } from 'react-icons/si';
import { TbDeviceMobileCode, TbBrandReactNative } from 'react-icons/tb';


interface ServiceItem {
    icon: React.ReactElement;
    title: string;
    description: string;
    features: string[];
    code: string;
}

const services: ServiceItem[] = [
    {
        icon: <TbBrandReactNative className="text-green-500" />,
        title: "Cross-Platform Mobile",
        description: "Specialized React Native development for high-performance iOS and Android applications with native-level smoothness.",
        features: ["Custom Native Modules", "Reanimated 3 UI", "Performance Tuning"],
        code: "01_MOBILE"
    },
    {
        icon: <FaLaptopCode className="text-green-500" />,
        title: "Scalable Web Systems",
        description: "Building robust frontend architectures with Next.js and TypeScript that share logic seamlessly with mobile counterparts.",
        features: ["SSR & Static Generation", "API Integration", "State Management"],
        code: "WEB"
    },
    {
        icon: <FaBezierCurve className="text-green-500" />,
        title: "Mobile-First Design",
        description: "Engineering design systems specifically for touch interfaces and mobile user behaviors.",
        features: ["Design Systems", "Prototyping", "User Journeys"],
        code: "UX"
    },
    {
        icon: <SiGo className="text-green-500" />,
        title: "Golang",
        description: "Connecting mobile interfaces to decentralized protocols using Ether.js and specialized smart contract logic.",
        features: ["Smart Contract Logic", "Wallet Integration", "DApp UI"],
        code: "BACKEND"
    }
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 bg-[#0a0a0a] font-mono overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="max-w-7xl mx-auto px-6 lg:pl-32">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="border-l-4 border-green-500 pl-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500"
                        >
                            Solutions_Manifest
                        </motion.span>
                        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white mt-2">
                            Capabilities <span className="text-green-500">_</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest leading-loose max-w-xs text-right hidden lg:block">
                        Engineered for performance. <br /> Built for scalability. <br /> Delivered with precision.
                    </p>
                </div>

                {/* Services Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-all relative overflow-hidden"
                        >
                            {/* Technical Index */}
                            <span className="absolute top-10 right-10 text-[10px] text-white/10 font-black group-hover:text-green-500/20 transition-colors">
                                {service.code}
                            </span>

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
                                Technical Details <FaArrowRight />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Data decoration */}
                <div className="mt-12 flex items-center justify-between text-[8px] text-white/20 font-black uppercase tracking-[1em]">
                    <span>Process: Design / Code / Deploy</span>
                    <span className="hidden sm:block">04 / Services / 2025</span>
                </div>
            </div>
        </section>
    );
}