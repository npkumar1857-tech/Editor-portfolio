import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/npkumar1857@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New portfolio inquiry',
          _replyto: formData.email,
          _template: 'table'
        })
      });
      const result = await response.json() as { success?: string; message?: string };

      if (!response.ok || result.success !== 'true') {
        throw new Error(result.message || 'Unable to send your inquiry. Please try again.');
      }

      setSubmissionStatus('Thanks, your inquiry has been sent.');
      setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    } catch (error) {
      setSubmissionStatus(error instanceof Error ? error.message : 'Unable to send your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0a0a0a] border-t border-[#1e1e1e]">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-light uppercase tracking-tight leading-[0.95] text-[#f0ece4]">
            HAVE A STORY WORTH <br />
            <span className="font-serif italic text-[#c4b69c]">TELLING?</span>
          </h2>
          <p className="text-base text-[#8a8578] mt-6">
            Tell me what you&apos;re working on. I&apos;ll take care of the cut.
          </p>
          <a href="#contact-form" className="border border-[#c4b69c] text-[#c4b69c] px-8 py-4 text-xs tracking-[0.2em] uppercase mt-8 inline-block hover:bg-[#c4b69c] hover:text-[#0a0a0a] transition-all duration-500">
            START A PROJECT &rarr;
          </a>

          <div className="mt-12">
            <h3 className="text-xs tracking-[0.4em] text-[#8a8578] uppercase mb-4">CONNECT</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:npkumar1857@gmail.com" className="text-sm text-[#f0ece4]/60 hover:text-[#c4b69c] transition-colors w-fit">Email</a>
              <a href="https://www.instagram.com/itz_naresh_2007/" className="text-sm text-[#f0ece4]/60 hover:text-[#c4b69c] transition-colors w-fit">Instagram</a>

            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-sm text-[#f0ece4] placeholder:text-[#8a8578]/50 focus:border-[#c4b69c] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-sm text-[#f0ece4] placeholder:text-[#8a8578]/50 focus:border-[#c4b69c] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="sr-only">Project Type</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-sm text-[#f0ece4] placeholder:text-[#8a8578]/50 focus:border-[#c4b69c] focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled className="bg-[#0a0a0a]">Project Type</option>
                <option value="Commercial Film" className="bg-[#0a0a0a]">Commercial Film</option>
                <option value="Documentary" className="bg-[#0a0a0a]">Documentary</option>
                <option value="Brand Campaign" className="bg-[#0a0a0a]">Brand Campaign</option>
                <option value="YouTube/Creator" className="bg-[#0a0a0a]">YouTube/Creator</option>
                <option value="Short-Form Content" className="bg-[#0a0a0a]">Short-Form Content</option>
                <option value="Motion Design" className="bg-[#0a0a0a]">Motion Design</option>
                <option value="Other" className="bg-[#0a0a0a]">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="sr-only">Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-sm text-[#f0ece4] placeholder:text-[#8a8578]/50 focus:border-[#c4b69c] focus:outline-none transition-colors appearance-none"
              >
                <option value="" disabled className="bg-[#0a0a0a]">Budget</option>
                <option value="Under $1,000" className="bg-[#0a0a0a]">Under $1,000</option>
                <option value="$1,000-$3,000" className="bg-[#0a0a0a]">$1,000-$3,000</option>
                <option value="$3,000-$5,000" className="bg-[#0a0a0a]">$3,000-$5,000</option>
                <option value="$5,000-$10,000" className="bg-[#0a0a0a]">$5,000-$10,000</option>
                <option value="$10,000+" className="bg-[#0a0a0a]">$10,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#2a2a2a] py-4 text-sm text-[#f0ece4] placeholder:text-[#8a8578]/50 focus:border-[#c4b69c] focus:outline-none transition-colors resize-none min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#c4b69c] text-[#0a0a0a] py-4 text-xs tracking-[0.2em] uppercase mt-8 hover:bg-[#d4c6ac] transition-colors font-medium"
            >
              {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
            </button>
            {submissionStatus && (
              <p role="status" aria-live="polite" className="text-sm text-[#c4b69c]">
                {submissionStatus}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
