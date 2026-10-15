import {
    ArrowUpRight,
    BookOpen,
    Building2,
    MessagesSquare,
    Sprout,
    Armchair,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type Pathway = {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    action: string;
    href: string;
    Icon: LucideIcon;
    id?: string;
};

const pathways: Pathway[] = [
    {
        number: '01',
        eyebrow: 'Architecture · Interiors · Construction',
        title: 'Shape a space',
        description:
            'Explore thoughtful, climate-responsive design for the spaces where people live, work and gather.',
        action: 'Explore Studio COKA',
        href: '#initiatives',
        Icon: Building2,
    },
    {
        number: '02',
        eyebrow: 'Furniture · Product design',
        title: 'Discover considered objects',
        description:
            'Find out how contemporary furniture and products can reflect African materials, context and ideas.',
        action: 'Discover ELEvated',
        href: '#initiatives',
        Icon: Armchair,
    },
    {
        number: '03',
        eyebrow: 'Learning · Education · Community',
        title: 'Learn, grow or contribute',
        description:
            'Explore architecture education, learning resources and initiatives creating opportunity for young people.',
        action: 'Explore the initiatives',
        href: '#initiatives',
        Icon: BookOpen,
    },
    {
        number: '04',
        eyebrow: 'Talks · Panels · Collaborations',
        title: 'Bring a perspective to your audience',
        description:
            'Start a conversation about a talk, event or collaboration around design, architecture, cities or entrepreneurship.',
        action: 'Discuss a speaking engagement',
        href: '#contact',
        Icon: MessagesSquare,
        id: 'speaking',
    },
    {
        number: '05',
        eyebrow: 'Research · Writing · Ideas',
        title: 'Explore the thinking behind the work',
        description:
            'Follow the questions, research and creative work that connect people, place, design and the built environment.',
        action: 'Explore Crystal’s work',
        href: '#initiatives',
        Icon: Sprout,
    },
];

export default function FindYourWayIn() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="pathways"
            aria-labelledby="pathways-title"
            className="scroll-mt-24 border-y border-[#202923]/10 bg-[#eeede6]/75"
        >
            <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.42, ease: 'easeOut' }}
                    className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-12"
                >
                    <div>
                        <div className="mb-6 flex items-center gap-3 sm:mb-8">
                            <span className="h-px w-9 bg-[#858c72]" aria-hidden="true" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#68705f] sm:text-[11px]">
                                Find your way in
                            </p>
                        </div>
                        <h2
                            id="pathways-title"
                            className="max-w-[660px] text-[clamp(2.35rem,4.4vw,4.4rem)] font-normal leading-[1.02] tracking-[-0.065em] text-[#202923]"
                        >
                            Start with what matters to{' '}
                            <span className="font-serif italic tracking-[-0.055em] text-[#7b826b]">you.</span>
                        </h2>
                    </div>
                    <p className="max-w-[590px] pb-1 text-[14px] leading-[1.9] text-[#5c625b] sm:text-[15px] md:justify-self-end">
                        Whether you are looking to work together, learn, contribute or invite Crystal into a conversation, choose the path closest to what brought you here.
                    </p>
                </motion.div>

                <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                    {pathways.map(({ number, eyebrow, title, description, action, href, Icon, id }, index) => (
                        <motion.article
                            id={id}
                            key={number}
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.38,
                                delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.12),
                                ease: 'easeOut',
                            }}
                            className="group flex min-h-[265px] scroll-mt-32 flex-col border border-[#202923]/12 bg-[#f8f7f2] p-5 transition-colors duration-200 hover:border-[#7b826b]/60 sm:min-h-[285px] sm:p-6 lg:p-7"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <span className="flex size-10 items-center justify-center border border-[#202923]/15 text-[#66705a] transition-colors duration-200 group-hover:border-[#7b826b]/50 group-hover:bg-[#eaece3]">
                                    <Icon size={18} strokeWidth={1.45} aria-hidden="true" />
                                </span>
                                <span className="pt-1 text-[9px] tracking-[0.16em] text-[#85897f]">{number}</span>
                            </div>
                            <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#7b826b] sm:text-[10px]">
                                {eyebrow}
                            </p>
                            <h3 className="mt-2 max-w-[320px] text-[23px] font-normal leading-[1.15] tracking-[-0.045em] text-[#202923] sm:text-[25px]">
                                {title}
                            </h3>
                            <p className="mt-3 max-w-[390px] text-[12px] leading-[1.8] text-[#62675e] sm:text-[13px]">
                                {description}
                            </p>
                            <a
                                href={href}
                                className="mt-auto inline-flex min-h-10 items-center gap-2 self-start border-b border-[#202923]/25 pt-4 pb-1 text-[10px] font-semibold text-[#343d35] transition-colors duration-200 hover:border-[#7b826b] hover:text-[#70795c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c] sm:text-[11px]"
                            >
                                {action}
                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.7}
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
