'use client';

import Header from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from '@/components/Skills';
import Services from "@/components/Services";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonial";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/Scroll";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <div className="max-w-[87rem] mx-auto justify-center">
        <Skills />
        <Education />
        <Experience />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}