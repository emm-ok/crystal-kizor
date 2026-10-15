import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ContactSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="scroll-mt-24 bg-[#202923] text-[#f5f4ef]"
        >
            <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.44, ease: 'easeOut' }}
                    className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end md:gap-14 lg:gap-20"
                >
                    <div>
                        <div className="mb-6 flex items-center gap-3 sm:mb-8">
                            <span className="h-px w-9 bg-[#9da58a]" aria-hidden="true" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c3c8b7] sm:text-[11px]">
                                Start a conversation
                            </p>
                        </div>
                        <h2
                            id="contact-title"
                            className="max-w-[790px] text-[clamp(2.5rem,5.5vw,5.3rem)] font-normal leading-[1.01] tracking-[-0.065em]"
                        >
                            Good work often begins with{' '}
                            <span className="font-serif italic text-[#b8c0a4]">a conversation.</span>
                        </h2>
                        <p className="mt-6 max-w-[570px] text-[14px] leading-[1.9] text-[#c4c9c0] sm:mt-7 sm:text-[15px]">
                            For project enquiries, speaking invitations, partnerships or thoughtful collaborations, get in touch and share what you have in mind.
                        </p>
                    </div>

                    <div className="border-t border-white/20 pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0 lg:pl-12">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#aeb6a0] sm:text-[10px]">
                            For enquiries and collaborations
                        </p>
                        <a
                            href="mailto:collaborate@crystalkizor.com?subject=Enquiry%20for%20Crystal%20Kizor"
                            className="group mt-3 inline-flex max-w-full items-center gap-2 break-all text-[17px] font-medium tracking-[-0.025em] text-[#f5f4ef] transition-colors hover:text-[#c4cbb3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8c0a4] sm:text-xl"
                        >
                            collaborate@crystalkizor.com
                            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                            href="mailto:collaborate@crystalkizor.com?subject=Enquiry%20for%20Crystal%20Kizor"
                            className="group mt-7 inline-flex min-h-12 items-center gap-5 bg-[#f5f4ef] px-5 text-[11px] font-semibold text-[#202923] transition-colors duration-200 hover:bg-[#dfe3d5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8c0a4]"
                        >
                            Get in touch
                            <ArrowRight size={15} strokeWidth={1.7} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                    </div>
                </motion.div>

                <div className="mt-14 border-t border-white/15 pt-5 sm:mt-20 sm:pt-6">
                    <p className="max-w-[680px] text-[10px] leading-[1.8] text-[#aeb6a0] sm:text-[11px]">
                        Crystal’s work spans spaces, objects, knowledge and community. If your enquiry relates to one of the initiatives, mention it in your message so it can be directed appropriately.
                    </p>
                </div>
            </div>
        </section>
    );
}
