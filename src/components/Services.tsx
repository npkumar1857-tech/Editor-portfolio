import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  { 
    number: '01', 
    title: 'VIDEO EDITING', 
    description: 'Long-form, YouTube, documentaries and commercial content. Every cut serves the story.' 
  },
  { 
    number: '02', 
    title: 'SHORT-FORM EDITING', 
    description: 'High-retention Reels, Shorts and TikTok content. Engineered for engagement and watch time.' 
  },
  { 
    number: '03', 
    title: 'MOTION DESIGN', 
    description: 'Clean typography animation, transitions and visual effects. Movement with meaning.' 
  },
  { 
    number: '04', 
    title: 'COLOR & SOUND', 
    description: 'Cinematic color grading, sound design and audio polish. The finishing touches that elevate everything.' 
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  },
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="text-xs tracking-[0.4em] text-[#8a8578] uppercase mb-16"
        >
          WHAT I DO
        </motion.div>

        <motion.div 
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.number}
              variants={itemVariants}
              className={`group flex flex-col md:grid md:grid-cols-12 gap-4 items-start w-full border-t border-[#1e1e1e] py-10 md:py-14 hover:bg-[#111111]/50 transition-colors duration-500 cursor-pointer ${
                index === servicesData.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="col-span-1 text-xs text-[#8a8578] tracking-[0.2em] mb-2 md:mb-0">
                {service.number}
              </div>
              <div className="col-span-3 text-lg md:text-xl font-light uppercase tracking-wider text-[#f0ece4] group-hover:text-[#c4b69c] transition-colors duration-500 flex items-center gap-2">
                {service.title}
              </div>
              <div className="col-span-8 text-sm md:text-base text-[#8a8578] leading-relaxed flex justify-between items-start w-full">
                <span className="max-w-2xl">{service.description}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 text-[#c4b69c] transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
