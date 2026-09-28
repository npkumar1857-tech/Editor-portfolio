
import { motion } from 'framer-motion';

export const testimonials = [
  { quote: 'Working with Nax completely changed the quality of our content. The pacing and storytelling were on another level.', name: 'DARLOE', title: 'Fashion film' },
  { quote: 'The edit elevated the entire project. What came back was sharper, more emotive, and exactly what the brand needed.', name: 'LEOTUDE', title: 'Fashion film' },
  { quote: 'Incredible attention to detail from the rhythm of the cuts to the sound design. Truly premium work.', name: 'BOHO BOHO', title: 'Cafe' },
];

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

const Testimonials = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 bg-[#111111] border-t border-[#1e1e1e]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="mb-16"
      >
        <h2 className="text-xs tracking-[0.4em] text-[#8a8578] uppercase">TRUSTED TO TELL STORIES.</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#141414] border border-[#1e1e1e] rounded-lg p-8 md:p-10 hover:border-[#2a2a2a] transition-colors duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl text-[#c4b69c]/30 font-serif leading-none mb-4">&quot;</div>
              <p className="text-base md:text-lg text-[#f0ece4]/80 leading-relaxed font-light mb-8">
                {testimonial.quote}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#f0ece4] uppercase tracking-wider">{testimonial.name}</p>
              <p className="text-xs text-[#8a8578] tracking-wider mt-1">{testimonial.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
