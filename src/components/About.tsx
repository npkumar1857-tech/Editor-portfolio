
import { motion } from 'framer-motion';
import profileImage from '../assets/about-profile.jpg';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const tools = ['DaVinci Resolve', 'Ai integration'];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-12 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column */}
          <div className="lg:col-span-5">
            <motion.h2 variants={itemVariants} className="text-[clamp(2rem,4vw,3.5rem)] font-light uppercase tracking-tight leading-[0.95] text-[#f0ece4]">
              NAX<br />
              BEHIND THE <span className="font-serif italic text-[#c4b69c]">CUT.</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="aspect-[3/4] rounded-lg bg-gradient-to-b from-[#1a1816] to-[#111111] border border-[#1e1e1e] mt-10 w-full max-w-md mx-auto lg:mx-0 relative overflow-hidden group">
              <img
                src={profileImage}
                alt="Video Editor Portrait - The Person Behind the Cut"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-center">
            <motion.div variants={itemVariants} className="mb-10">
              <p className="text-base text-[#8a8578] leading-relaxed mb-6">
                With over 3 years behind the timeline, I've built a practice centered on rhythm, restraint, and visual storytelling. My work spans commercial films, brand campaigns, documentaries, and creator content — always with the same goal: make people feel something.
              </p>
              <p className="text-base text-[#8a8578] leading-relaxed">
                I believe the best editing is invisible. When cuts disappear and the story takes over, that's when the work is done.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="border-t border-[#1e1e1e] pt-8 mt-10">
              <h3 className="text-xs tracking-[0.4em] text-[#8a8578] uppercase mb-4">APPROACH</h3>
              <p className="text-sm text-[#8a8578] leading-relaxed">
                Story-first editing. Every project starts with understanding the narrative, the audience, and the emotion. Then I cut.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="border-t border-[#1e1e1e] pt-8 mt-10">
              <h3 className="text-xs tracking-[0.4em] text-[#8a8578] uppercase mb-6">TOOLS</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {tools.map((tool, index) => (
                  <div key={index} className="text-sm text-[#f0ece4]/70 font-light border-l border-[#2a2a2a] pl-4">
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
