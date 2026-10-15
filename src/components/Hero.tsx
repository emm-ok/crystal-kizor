import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
    const prefersReducedMotion = useReducedMotion();
    const enter = (delay = 0) => ({
        initial: prefersReducedMotion ? false : { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : delay, ease: 'easeOut' as const },
    });

    return (
        <section
            id="home"
            aria-labelledby="hero-title"
            className="relative isolate scroll-mt-24"
        >
            <div className="pointer-events-none absolute -right-28 top-14 -z-10 size-72 rounded-full border border-[#7c846e]/15 sm:size-96" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-12 top-28 -z-10 size-52 rounded-full border border-[#7c846e]/10 sm:size-72" aria-hidden="true" />

            <div className="mx-auto grid max-w-[1360px] items-center gap-12 px-5 pb-14 pt-12 sm:gap-14 sm:px-8 sm:pb-20 sm:pt-16 md:grid-cols-[1.02fr_0.98fr] md:gap-10 lg:gap-16 lg:px-12 lg:pb-24 lg:pt-20">
                <div className="relative z-10 order-2 max-w-[680px] md:order-1">
                    <motion.div {...enter(0)} className="mb-7 flex items-center gap-3 sm:mb-9">
                        <span className="h-px w-9 bg-[#858c72]" aria-hidden="true" />
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#68705f] sm:text-[11px]">
                            An interdisciplinary practice
                        </p>
                    </motion.div>

                    <motion.h1
                        {...enter(0.06)}
                        id="hero-title"
                        className="max-w-[760px] text-[clamp(2.8rem,6vw,4.9rem)] font-normal leading-[0.99] tracking-[-0.065em] text-[#202923]"
                    >
                        <span className="block">Crystal Kizor.</span>
                        <span className="mt-2 block font-serif font-normal italic tracking-[-0.065em] text-[#7b826b] sm:mt-3">
                            Climate-smart space, product, and systems designer.
                        </span>
                    </motion.h1>

                    <motion.p
                        {...enter(0.13)}
                        className="mt-7 max-w-[510px] text-[15px] leading-[1.85] text-[#5c625b] sm:mt-8 sm:text-base sm:leading-[1.9]"
                    >
                        Architect, designer, educator, and community builder bringing together diverse disciplines to shape how people live, learn, and connect.
                    </motion.p>

                    <motion.div {...enter(0.2)} className="mt-8 flex flex-col items-start gap-4 min-[430px]:flex-row min-[430px]:items-center sm:mt-10">
                        <a
                            href="#initiatives"
                            className="group inline-flex min-h-12 items-center justify-center gap-7 bg-[#202923] px-5 text-[12px] font-semibold text-[#f8f7f2] transition-colors duration-200 hover:bg-[#39453a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                        >
                            Explore work
                            <ArrowRight size={15} strokeWidth={1.7} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#contact"
                            className="group inline-flex min-h-11 items-center gap-2 border-b border-[#202923]/25 pb-1 text-[12px] font-semibold text-[#343d35] transition-colors duration-200 hover:border-[#7b826b] hover:text-[#7b826b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                        >
                            Collaborate
                            <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </motion.div>

                    <motion.div {...enter(0.27)} className="mt-12 border-t border-[#202923]/15 pt-5 sm:mt-16 sm:pt-6">
                        <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#85897f]">
                            Connected through a shared purpose
                        </p>
                        <ul className="flex flex-wrap gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.08em] text-[#555d53] sm:gap-x-4 sm:text-[11px]" aria-label="Areas of work">
                            <li>Architecture</li>
                            <li aria-hidden="true" className="text-[#a5a99c]">/</li>
                            <li>Product design</li>
                            <li aria-hidden="true" className="text-[#a5a99c]">/</li>
                            <li>Education</li>
                            <li aria-hidden="true" className="text-[#a5a99c]">/</li>
                            <li>Community</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    {...enter(0.12)}
                    className="relative order-1 mx-auto w-full max-w-[540px] md:order-2 md:ml-auto md:mr-0"
                >
                    <div className="absolute -right-2 -top-2 -z-10 h-full w-full border border-[#8d947e]/45 sm:-right-3 sm:-top-3" aria-hidden="true" />
                    <figure className="relative aspect-[4/4.6] overflow-hidden bg-[#e4e2d8]">
                        <img
                            src="/img1.png"
                            alt="Image of Crystal Kizor."
                            width={1200}
                            height={1380}
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#17211d]/45 via-transparent to-[#17211d]/5" aria-hidden="true" />
                        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
                            <div>
                                <p className="mt-1.5 font-serif text-2xl italic leading-tight sm:text-3xl">Crystal Kizor</p>
                            </div>
                            <span className="mb-1 flex size-9 shrink-0 items-center justify-center border border-white/55" aria-hidden="true">
                                <ArrowDownRight size={18} strokeWidth={1.4} />
                            </span>
                        </figcaption>
                    </figure>
                    <div className="mt-3 flex items-start justify-between gap-4 text-[9px] uppercase tracking-[0.13em] text-[#81857a] sm:mt-4 sm:text-[10px]">
                        <span className="whitespace-nowrap">One connected ecosystem</span>
                    </div>
                </motion.div>
            </div>

            <div className="border-y border-[#202923]/10 bg-[#eeede6]/80">
                <div className="mx-auto flex max-w-[1360px] flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5 lg:px-12">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#72766b]">A connected ecosystem of work</p>
                    <p className="max-w-[610px] text-[11px] leading-relaxed text-[#555d53] sm:text-right sm:text-xs">
                        Spaces, products, knowledge and community, each distinct, connected by a wider vision.
                    </p>
                </div>
            </div>
        </section>
    );
}
