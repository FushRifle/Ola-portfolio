import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    location: string;
    content: string;
    avatar: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Mrs. Kudi Fuster",
        role: "Client",
        location: "Canada",
        content: "Olawale is an exceptional web developer who goes above and beyond to deliver outstanding results. He took my vision and turned it into a beautifully designed, highly functional website that perfectly aligns with my brand. His attention to detail, technical expertise, and creativity made the entire process smooth and stress-free.",
        avatar: "/testimonial/unnamed.png",
        rating: 5
    },
    {
        id: 2,
        name: "John Abraham",
        role: "Client",
        location: "New York, USA",
        content: "What truly sets Olawale apart is his professionalism and dedication. He is responsive, patient, and always willing to make adjustments to ensure everything is just right. If you need a reliable, skilled, and innovative web developer, look no further. I highly recommend Olawale without hesitation!",
        avatar: "/testimonial/img-1.jpg",
        rating: 5
    },
    // Add more testimonials as needed
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl">
            {/* Section Header */}
            <div className="text-center mb-16">
                <motion.p
                    className="text-white text-lg uppercase tracking-wider mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Testimonials
                </motion.p>
                <motion.h2
                    className="text-4xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    What People Say
                </motion.h2>
            </div>
            <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
                {/* Left Header Section */}
                <div className="lg:w-1/4 bg-gradient-to-br from-green-500 to-teal-400 p-8 lg:p-12 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-white text-lg uppercase tracking-wider mb-2">Testimonials</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-0">What People Say</h1>
                    </motion.div>
                </div>

                {/* Right Content Section */}
                <div className="lg:w-3/4 bg-white dark:bg-gray-800 p-8 lg:p-12 relative">
                    <div className="relative h-full">
                        <AnimatePresence mode="wait">
                            {testimonials.map((testimonial, index) => (
                                index === currentIndex && (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                        className="h-full flex flex-col"
                                    >
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                                                <div className="relative">
                                                    <div className="w-24 h-24 rounded-full border-4 border-teal-400 p-1">
                                                        <img
                                                            src={testimonial.avatar}
                                                            alt={testimonial.name}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white p-2 rounded-full">
                                                        <span className="text-xs font-bold">5.0</span>
                                                    </div>
                                                </div>
                                                <div className="text-center md:text-left">
                                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        {testimonial.role} • {testimonial.location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl mb-6">
                                                <p className="text-gray-700 dark:text-gray-300 italic">
                                                    "{testimonial.content}"
                                                </p>
                                            </div>

                                            <div className="flex justify-center gap-1 mb-8">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 p-2
                             rounded-full shadow-lg hover:bg-teal-500 hover:text-white transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 p-2
                             rounded-full shadow-lg hover:bg-teal-500 hover:text-white transition-colors"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-6">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-teal-500' : 'bg-gray-300'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}