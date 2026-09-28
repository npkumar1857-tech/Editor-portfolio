import React from 'react';
import { motion } from 'framer-motion';
import heroPoster from '../assets/hero.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">

        {/* Left Column: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.div variants={itemVariants} className="text-xs tracking-[0.4em] uppercase text-[#8a8578] mb-8">
            <span className="text-[#c4b69c]">NAX</span> — VIDEO EDITOR
          </motion.div>

          <h1 className="text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] font-light uppercase tracking-tight text-[#f0ece4] font-sans">
            <motion.div variants={itemVariants}>I EDIT</motion.div>
            <motion.div variants={itemVariants}>
              <span className="font-serif italic text-[#c4b69c] lowercase pl-2 pr-4 text-[clamp(2.8rem,9vw,9rem)]">stories</span>
            </motion.div>
            <motion.div variants={itemVariants}>THAT PEOPLE</motion.div>
            <motion.div variants={itemVariants}>REMEMBER.</motion.div>
          </h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-[#8a8578] max-w-xl mt-8 leading-relaxed">

          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-row flex-wrap gap-4 mt-10 items-center">
            <a
              href="#work"
              onClick={(e) => scrollTo(e, '#work')}
              className="border border-[#c4b69c] text-[#c4b69c] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#c4b69c] hover:text-[#0a0a0a] transition-all duration-500 inline-block"
            >
              VIEW MY WORK
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="text-[#8a8578] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:text-[#f0ece4] transition-colors inline-block"
            >
              LET'S WORK TOGETHER
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Showreel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]"
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPoster}
            aria-hidden="true"
          >
            <source src="/hero-showreel.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-[#8a8578] uppercase">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#8a8578] to-transparent"></div>
      </motion.div>
    </section>
  );
};
