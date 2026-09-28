import { motion } from 'framer-motion';

export interface Project {
    id: string;
    number: string;
    title: string;
    category: string;
    year: string;
    description: string;
    gradient: string;
}

export const projects: Project[] = [
    { id: '01', number: '01', title: 'LEOTUDE CAMPAING', category: 'Commercial Film', year: '2024', description: 'A cinematic brand film capturing the moments.', gradient: 'from-[#1a1816] via-[#14120f] to-[#0d0c0a]' },
    { id: '02', number: '02', title: 'DARLOE', category: 'Fashion brand film', year: '2025', description: 'An intimate documentary exploring analog photography.', gradient: 'from-[#171819] via-[#111214] to-[#0a0b0c]' },
    { id: '03', number: '03', title: 'Spec work ', category: 'Spec Work', year: '2024', description: 'High-contrast editorial film', gradient: 'from-[#1a1818] via-[#121010] to-[#0a0909]' },
    { id: '04', number: '04', title: 'BEYOND THE CUT', category: 'luxury Fashion film', year: '2026', description: 'A creator flagship series edited for maximum impact.', gradient: 'from-[#181a17] via-[#101210] to-[#0a0c0a]' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
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
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
    },
};

export function SelectedWork() {
    return (
        <section id="work" className="py-32 px-6 md:px-12 lg:px-20 bg-[#0a0a0a]">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={itemVariants}
                >
                    <h2 className="text-xs tracking-[0.4em] text-[#8a8578] uppercase mb-4">SELECTED WORK</h2>
                    <p className="text-base text-[#8a8578] max-w-lg mb-20">
                        A selection of projects crafted through editing, rhythm, sound and visual storytelling.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project, index) => {
                        let colSpanClasses = "";
                        let aspectClass = "aspect-[16/10]";

                        if (index === 0) {
                            colSpanClasses = "lg:col-span-7";
                        } else if (index === 1) {
                            colSpanClasses = "lg:col-span-5";
                            aspectClass = "max-lg:aspect-[16/10] lg:aspect-[4/5]";
                        } else if (index === 2) {
                            colSpanClasses = "lg:col-span-5";
                            aspectClass = "max-lg:aspect-[16/10] lg:aspect-[4/5]";
                        } else if (index === 3) {
                            colSpanClasses = "lg:col-span-7";
                        } else if (index === 4) {
                            colSpanClasses = "lg:col-span-8 lg:col-start-3";
                        }

                        return (
                            <motion.div key={project.id} variants={itemVariants} className={`group cursor-pointer ${colSpanClasses}`}>
                                <div className={`relative overflow-hidden rounded-lg w-full ${aspectClass} border border-[#1e1e1e] bg-gradient-to-br ${project.gradient}`}>
                                    <motion.div
                                        className="absolute inset-0 w-full h-full"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {project.id === '01' && (
                                            <video
                                                className="absolute inset-0 h-full w-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                onLoadedData={(event) => {
                                                    const video = event.currentTarget;
                                                    video.muted = true;
                                                    void video.play().catch(() => undefined);
                                                }}
                                                aria-hidden="true"
                                            >
                                                <source src="/leotude-campaign.mp4" type="video/mp4" />
                                            </video>
                                        )}
                                        {project.id === '02' && (
                                            <video
                                                className="absolute inset-0 h-full w-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                onLoadedData={(event) => {
                                                    const video = event.currentTarget;
                                                    video.muted = true;
                                                    void video.play().catch(() => undefined);
                                                }}
                                                aria-hidden="true"
                                            >
                                                <source src="/last-frame.mp4" type="video/mp4" />
                                            </video>
                                        )}
                                        {project.id === '03' && (
                                            <video
                                                className="absolute inset-0 h-full w-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                onLoadedData={(event) => {
                                                    const video = event.currentTarget;
                                                    video.muted = true;
                                                    void video.play().catch(() => undefined);
                                                }}
                                                aria-hidden="true"
                                            >
                                                <source src="/noir.mp4" type="video/mp4" />
                                            </video>
                                        )}
                                        {project.id === '04' && (
                                            <video
                                                className="absolute inset-0 h-full w-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                onLoadedData={(event) => {
                                                    const video = event.currentTarget;
                                                    video.muted = true;
                                                    void video.play().catch(() => undefined);
                                                }}
                                                aria-hidden="true"
                                            >
                                                <source src="/beyond-the-cut.mp4" type="video/mp4" />
                                            </video>
                                        )}
                                        <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" aria-hidden="true" />
                                    </motion.div>
                                </div>

                                <div className="mt-4">
                                    <div className="text-xs text-[#8a8578] tracking-[0.3em]">{project.number}</div>
                                    <h3 className="text-xl md:text-2xl font-light text-[#f0ece4] uppercase tracking-wider mt-2">{project.title}</h3>
                                    <div className="flex gap-4 items-center mt-2">
                                        <span className="text-xs text-[#8a8578] tracking-wider uppercase">{project.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-[#333333]"></span>
                                        <span className="text-xs text-[#8a8578] tracking-wider">{project.year}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}