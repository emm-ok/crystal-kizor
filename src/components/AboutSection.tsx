import { ArrowDownRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const aboutImage =
    '/2.jpeg';

export default function AboutSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="about"
            aria-labelledby="about-title"
            className="scroll-mt-24 border-t border-[#202923]/10 bg-[#eeede6]/65"
        >
            <div className="mx-auto grid max-w-[1360px] gap-11 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.92fr_1.08fr] md:items-center md:gap-14 lg:gap-20 lg:px-12 lg:py-28">
                <motion.figure
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeOut' }}
                    className="relative order-2 mx-auto w-full max-w-[610px] md:order-1 md:mx-0"
                >
                    <div
                        className="absolute -bottom-2 -left-2 -z-10 h-full w-full border border-[#8d947e]/45 sm:-bottom-3 sm:-left-3"
                        aria-hidden="true"
                    />
                    <div className="relative aspect-[5/4] overflow-hidden bg-[#dedfd5] sm:aspect-[5/4.15]">
                        <img
                            src={aboutImage}
                            alt="Image showing a contemporary living space with natural materials and soft daylight."
                            width={1100}
                            height={900}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17211d]/40 via-transparent to-transparent" aria-hidden="true" />
            
                        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.18em] text-white/75">A connected point of view</p>
                                <p className="mt-1.5 max-w-[250px] font-serif text-2xl italic leading-tight sm:text-3xl">
                                    Thoughtful work, grounded in context.
                                </p>
                            </div>
                            <span className="mb-1 flex size-9 shrink-0 items-center justify-center border border-white/55" aria-hidden="true">
                                <ArrowDownRight size={18} strokeWidth={1.4} />
                            </span>
                        </figcaption>
                    </div>
                </motion.figure>

                <div className="order-1 md:order-2">
                    <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.42, ease: 'easeOut' }}
                        className="mb-6 flex items-center gap-3 sm:mb-8"
                    >
                        <span className="h-px w-9 bg-[#858c72]" aria-hidden="true" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#68705f] sm:text-[11px]">
                            Beyond a single discipline
                        </p>
                    </motion.div>

                    <motion.h2
                        id="about-title"
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.46, delay: prefersReducedMotion ? 0 : 0.04, ease: 'easeOut' }}
                        className="max-w-[650px] text-[clamp(2.25rem,4.2vw,4.2rem)] font-normal leading-[1.03] tracking-[-0.06em] text-[#202923]"
                    >
                        A connected practice, shaped by{' '}
                        <span className="font-serif italic tracking-[-0.055em] text-[#7b826b]">people and place.</span>
                    </motion.h2>

                    <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.46, delay: prefersReducedMotion ? 0 : 0.1, ease: 'easeOut' }}
                        className="mt-6 max-w-[610px] space-y-4 text-[14px] leading-[1.9] text-[#5c625b] sm:mt-7 sm:text-[15px]"
                    >
                        <p>
                            Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher and creator whose work spans the built environment, education, product design, public conversation and community initiatives.
                        </p>
                        <p>
                            Each initiative serves a different audience and purpose. Together, they bring spaces, objects, knowledge and opportunity into one wider ecosystem—connected by a considered approach to design and human development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.42, delay: prefersReducedMotion ? 0 : 0.15, ease: 'easeOut' }}
                        className="mt-8 grid max-w-[600px] grid-cols-2 border-y border-[#202923]/15 sm:mt-10 sm:grid-cols-4"
                        aria-label="Connected areas of work"
                    >
                        {[
                            { number: '01', label: 'Spaces' },
                            { number: '02', label: 'Objects' },
                            { number: '03', label: 'Knowledge' },
                            { number: '04', label: 'Community' },
                        ].map((item, index) => (
                            <div
                                key={item.number}
                                className={`py-4 ${index % 2 === 0 ? 'pr-3' : 'pl-3'} ${index > 0 ? 'sm:border-l sm:border-[#202923]/15 sm:pl-4' : ''} ${index < 2 ? 'border-b border-[#202923]/10 sm:border-b-0' : ''} sm:px-4 first:sm:pl-0 last:sm:pr-0`}
                            >
                                <p className="text-[9px] tracking-[0.12em] text-[#85897f]">{item.number}</p>
                                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#343d35] sm:text-xs">{item.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
