import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  { id: '01', name: 'RAW' },
  { id: '02', name: 'EDIT' },
  { id: '03', name: 'COLOR' },
  { id: '04', name: 'SOUND' },
  { id: '05', name: 'FINAL' },
];

const stepProgress = [10, 50, 70, 90, 100];

const stats = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '15M+', label: 'Total Views' },
  { value: '2.5+', label: 'Years Editing' },
  { value: 'National', label: 'Client Base' },
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

export const FeaturedProject: React.FC = () => {
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);
  const finalOutputVideoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = finalOutputVideoRef.current;
    if (!video) return;

    video.muted = true;
    const playVideo = () => {
      void video.play().catch(() => undefined);
    };

    video.addEventListener('loadeddata', playVideo);
    playVideo();

    return () => video.removeEventListener('loadeddata', playVideo);
  }, []);

  const getCircleProgress = (index: number) => {
    if (hoveredStep === null) return 0;
    return index <= hoveredStep ? stepProgress[index] : 0;
  };

  const getLineProgress = (index: number) => {
    if (hoveredStep === null) return 0;
    if (hoveredStep > index) return 100;
    if (hoveredStep === index) return stepProgress[index];
    return 0;
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 bg-[#111111] border-t border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="text-[clamp(2rem,5vw,4.5rem)] font-light uppercase tracking-tight leading-[0.95] text-[#f0ece4] mb-16"
        >
          FROM RAW FOOTAGE TO <span className="font-serif italic text-[#c4b69c]">FINAL FRAME.</span>
        </motion.h2>

        {/* Process Visual */}
        <motion.div
          className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-12 gap-x-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                className="flex flex-col items-center justify-center relative w-1/3 md:w-auto flex-shrink-0"
                variants={itemVariants}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onFocus={() => setHoveredStep(index)}
                onBlur={() => setHoveredStep(null)}
                tabIndex={0}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#2a2a2a] overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    background: `conic-gradient(#c4b69c ${getCircleProgress(index)}%, rgba(196, 182, 156, 0.08) 0%)`,
                  }}
                >
                  <div className="absolute inset-[6px] rounded-full bg-[#111111]" />
                  <span className="absolute inset-0 flex items-center justify-center text-xs text-[#c4b69c] tracking-wider z-10">{step.id}</span>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#8a8578] mt-4 absolute -bottom-8">
                  {step.name}
                </span>
              </motion.div>
              {index < processSteps.length - 1 && (
                <motion.div
                  className="hidden md:block h-px flex-1 overflow-hidden relative"
                  variants={itemVariants}
                >
                  <div className="absolute inset-0 bg-[#2a2a2a]" />
                  <div
                    className="absolute inset-y-0 left-0 bg-[#c4b69c] transition-all duration-300 ease-out"
                    style={{ width: `${getLineProgress(index)}%` }}
                  />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Cinematic Frame */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="aspect-[21/9] rounded-lg overflow-hidden bg-[#141210] border border-[#1e1e1e] mt-24 relative"
        >
          <video
            ref={finalOutputVideoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/final-output.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Statistics Row */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-t border-[#2a2a2a] pt-6"
            >
              <div className="text-4xl md:text-5xl font-light text-[#f0ece4] font-serif">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#8a8578] mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
