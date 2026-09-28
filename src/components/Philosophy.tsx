
import { motion } from 'framer-motion';

export const Philosophy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section className="py-40 md:py-52 px-6 md:px-12 lg:px-20 bg-[#111111] border-t border-b border-[#1e1e1e]">
      <motion.div
        className="text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-[clamp(2rem,6vw,5.5rem)] font-light uppercase leading-[0.95] tracking-tight text-[#f0ece4] mb-10 flex flex-col items-center">
          <motion.span variants={itemVariants} className="block">GOOD EDITING</motion.span>
          <motion.span variants={itemVariants} className="block">SHOULDN'T BE SEEN.</motion.span>
          <motion.span variants={itemVariants} className="block">
            IT SHOULD BE <span className="font-serif italic text-[#c4b69c]">FELT.</span>
          </motion.span>
        </div>

        <motion.div
          variants={lineVariants}
          className="w-16 h-px bg-[#c4b69c] mx-auto origin-center"
        />

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-[#8a8578] max-w-2xl mx-auto mt-10 leading-relaxed"
        >
          Every cut has a purpose. Every frame has a rhythm. The goal isn't simply to make footage look better — it's to make people keep watching.
        </motion.p>
      </motion.div>
    </section>
  );
};
