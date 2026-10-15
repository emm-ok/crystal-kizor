import { useEffect, useRef, useState, type FormEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    Mail,
    MapPin,
    MessageCircle,
} from 'lucide-react';

const inputClassName =
    'mt-2 w-full rounded-sm border border-[#202923]/20 bg-white/70 px-4 py-3 text-[13px] text-[#202923] outline-none transition-colors placeholder:text-[#85897f] hover:border-[#202923]/40 focus:border-[#68745c] focus:ring-2 focus:ring-[#68745c]/20';

const labelClassName =
    'block text-[10px] font-semibold uppercase tracking-[0.13em] text-[#414a41]';

const transitionFor = (reducedMotion: boolean | null) => ({
    duration: reducedMotion ? 0 : 0.32,
    ease: 'easeInOut' as const,
});

export default function ContactSection() {
    const prefersReducedMotion = useReducedMotion();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const successMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isSubmitted) successMessageRef.current?.focus();
    }, [isSubmitted]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // Native browser validation runs before this handler because fields are required.
        event.preventDefault();
        setIsSubmitted(true);
    }

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
                    viewport={{ once: true, amount: 0.2 }}
                    transition={transitionFor(prefersReducedMotion)}
                    className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-20"
                >
                    <div className="flex flex-col">
                        <div className="mb-6 flex items-center gap-3 sm:mb-8">
                            <span className="h-px w-9 bg-[#9da58a]" aria-hidden="true" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c3c8b7] sm:text-[11px]">
                                Start a conversation
                            </p>
                        </div>

                        <h2
                            id="contact-title"
                            className="max-w-[620px] text-[clamp(2.5rem,5.5vw,5rem)] font-normal leading-[1.02] tracking-[-0.065em]"
                        >
                            Good work often begins with{' '}
                            <span className="font-serif italic text-[#b8c0a4]">a conversation.</span>
                        </h2>

                        <p className="mt-6 max-w-[480px] text-[14px] leading-[1.9] text-[#c4c9c0] sm:mt-7 sm:text-[15px]">
                            Have a project in mind, a speaking invitation, or an idea for collaboration? Share a
                            little about it below and choose the area that best fits your enquiry.
                        </p>

                        <aside
                            aria-label="Contact information"
                            className="mt-10 border-t border-white/15 pt-6 sm:mt-12"
                        >
                            <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#aeb6a0] sm:text-[10px]">
                                A good place to start
                            </p>
                            <ul className="mt-5 space-y-4 text-[12px] leading-relaxed text-[#d5d8d0]">
                                <li className="flex items-start gap-3">
                                    <MessageCircle size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[#b8c0a4]" aria-hidden="true" />
                                    <span>Project enquiries, partnerships, speaking, or media conversations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Mail size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[#b8c0a4]" aria-hidden="true" />
                                    <span>
                                        Prefer email?{' '}
                                        {/* Replace the example address with Crystal's verified email before launch. */}
                                        <a
                                            href="mailto:collaborate@crystalkizor.com?subject=Enquiry%20for%20Crystal%20Kizor"
                                            className="underline decoration-white/35 underline-offset-4 transition-colors hover:text-[#c8d0b7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8c0a4]"
                                        >
                                            collaborate@crystalkizor.com
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-[#b8c0a4]" aria-hidden="true" />
                                    <span>Architecture, design, knowledge, and community.</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-[10px] leading-relaxed text-[#aeb6a0]">
                                The email address is a temporary placeholder. Replace it before publishing.
                            </p>
                        </aside>
                    </div>

                    <div className="min-w-0">
                        <div className="h-full bg-[#f5f4ef] p-5 text-[#202923] sm:p-7 md:p-8 lg:p-10">
                            <div className="mb-7 flex flex-col gap-2 border-b border-[#202923]/12 pb-5 sm:flex-row sm:items-end sm:justify-between">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#73796d]">
                                        Contact form
                                    </p>
                                    <h3 className="mt-2 font-serif text-2xl tracking-[-0.04em] sm:text-[28px]">
                                        Tell me about it.
                                    </h3>
                                </div>
                                <p className="text-[10px] text-[#73796d]">Fields marked * are required</p>
                            </div>

                            <AnimatePresence mode="wait" initial={false}>
                                {isSubmitted ? (
                                    <motion.div
                                        key="success-message"
                                        ref={successMessageRef}
                                        tabIndex={-1}
                                        role="status"
                                        aria-live="polite"
                                        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                                        transition={transitionFor(prefersReducedMotion)}
                                        className="flex min-h-[380px] flex-col items-start justify-center py-8 outline-none"
                                    >
                                        <span className="flex size-12 items-center justify-center rounded-full bg-[#e1e6d8] text-[#46523f]">
                                            <CheckCircle2 size={24} strokeWidth={1.6} aria-hidden="true" />
                                        </span>
                                        <h4 className="mt-6 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                                            Thank you for reaching out.
                                        </h4>
                                        <p className="mt-3 max-w-md text-[13px] leading-[1.9] text-[#60675d]">
                                            Your message has been submitted successfully.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setIsSubmitted(false)}
                                            className="group mt-7 inline-flex min-h-11 items-center gap-4 bg-[#202923] px-5 text-[11px] font-semibold text-[#f5f4ef] transition-colors hover:bg-[#39463b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                                        >
                                            Send another enquiry
                                            <ArrowRight size={15} strokeWidth={1.7} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="contact-form"
                                        onSubmit={handleSubmit}
                                        noValidate={false}
                                        initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                                        transition={transitionFor(prefersReducedMotion)}
                                        className="space-y-5"
                                        aria-label="Send an enquiry to Crystal Kizor"
                                    >
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="contact-name" className={labelClassName}>
                                                    Full name <span aria-hidden="true">*</span>
                                                </label>
                                                <input
                                                    id="contact-name"
                                                    name="name"
                                                    type="text"
                                                    autoComplete="name"
                                                    placeholder="Your full name"
                                                    className={inputClassName}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact-email" className={labelClassName}>
                                                    Email address <span aria-hidden="true">*</span>
                                                </label>
                                                <input
                                                    id="contact-email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    placeholder="you@example.com"
                                                    className={inputClassName}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="contact-organisation" className={labelClassName}>
                                                    Organisation <span className="font-normal normal-case tracking-normal text-[#85897f]">(optional)</span>
                                                </label>
                                                <input
                                                    id="contact-organisation"
                                                    name="organisation"
                                                    type="text"
                                                    autoComplete="organization"
                                                    placeholder="Company or organisation"
                                                    className={inputClassName}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact-enquiry-type" className={labelClassName}>
                                                    Enquiry type <span aria-hidden="true">*</span>
                                                </label>
                                                <select
                                                    id="contact-enquiry-type"
                                                    name="enquiryType"
                                                    defaultValue=""
                                                    className={`${inputClassName} min-h-[46px]`}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Choose an enquiry type
                                                    </option>
                                                    <option value="architecture-design">Architecture &amp; design</option>
                                                    <option value="furniture-product">Furniture &amp; product design</option>
                                                    <option value="speaking-media">Speaking &amp; media</option>
                                                    <option value="education-community">Education &amp; community</option>
                                                    <option value="research-writing">Research &amp; writing</option>
                                                    <option value="partnership">Partnership or collaboration</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="contact-message" className={labelClassName}>
                                                How can we work together? <span aria-hidden="true">*</span>
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                name="message"
                                                rows={5}
                                                minLength={10}
                                                placeholder="Share a little about your project, idea, or enquiry..."
                                                className={`${inputClassName} min-h-32 resize-y leading-relaxed`}
                                                required
                                            />
                                            <p className="mt-2 text-[10px] leading-relaxed text-[#73796d]">
                                                Please include enough detail to help direct your enquiry. At least 10 characters.
                                            </p>
                                        </div>

                                        <div className="border-t border-[#202923]/12 pt-5">
                                            <button
                                                type="submit"
                                                className="group inline-flex min-h-12 w-full items-center justify-between gap-5 bg-[#202923] px-5 text-left text-[11px] font-semibold text-[#f5f4ef] transition-colors duration-200 hover:bg-[#39463b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c] sm:w-auto sm:min-w-52"
                                            >
                                                <span>Submit enquiry</span>
                                                <ArrowRight size={16} strokeWidth={1.7} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                                            </button>
                                            <p className="mt-4 max-w-lg text-[10px] leading-[1.8] text-[#73796d]">
                                                Your details are only used to respond to your enquiry. This demo form does not
                                                transmit or retain submitted information.
                                            </p>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-14 border-t border-white/15 pt-5 sm:mt-20 sm:pt-6">
                    <p className="max-w-[680px] text-[10px] leading-[1.8] text-[#aeb6a0] sm:text-[11px]">
                        Crystal’s work spans spaces, objects, knowledge and community. If your enquiry relates to
                        one of the initiatives, select the closest category and share the details above.
                    </p>
                </div>
            </div>
        </section>
    );
}
