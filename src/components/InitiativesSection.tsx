import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type Initiative = {
    name: string;
    category: string;
    description: string;
    image: string;
    imageAlt: string;
    imagePosition?: string;
    featured?: boolean;
};

const initiatives: Initiative[] = [
    {
        name: 'Studio COKA',
        category: 'Architecture · Interiors · Construction',
        description:
            'Thoughtful, climate-responsive spaces shaped around place, people and the way we live.',
        image:
            '/1.png',
        imageAlt:"img",
        imagePosition: 'object-center',
        featured: true,
    },
    {
        name: 'ELEvated',
        category: 'Furniture · Product design',
        description:
            'Contemporary objects and furniture rooted in African context, materials and ideas.',
        image:
            '/3.jpeg',
        imageAlt:"img",
        imagePosition: 'object-center',
    },
    {
        name: 'AKO Alliance',
        category: 'Education · Opportunity',
        description:
            'Expanding access to education and creating opportunities for children and young people.',
        image:
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=74',
        imageAlt:"img"

    },
    {
        name: 'The Effective Architect (TEA)',
        category: 'Learning · Media · Careers',
        description:
            'Resources and learning for architects and built-environment professionals who want to grow.',
        image:
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=74',
        imageAlt:"img"

    },
    {
        name: 'Alive and Free',
        category: 'Faith · Youth · Community',
        description:
            'A Christian youth movement centred on truth, healing, identity, purpose and life in Christ.',
        image:
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=74',
        imageAlt:"img"

    },
    {
        name: 'Speaking Engagements',
        category: 'Talks · Conversations',
        description:
            'Perspectives on architecture, climate-responsive design, African cities, design and entrepreneurship.',
        image:
            'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=74',
        imageAlt:"img"

    },
    {
        name: 'Research, Writing & Ideas',
        category: 'Research · Authorship · Media',
        description:
            'Independent thinking, writing and creative work that sits directly under Crystal’s personal brand.',
        image:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=74',
        imageAlt:"img"

    },
];

const groups = [
    {
        number: '01',
        title: 'Spaces & objects',
        description: 'The environments we inhabit and the things we use.',
    },
    {
        number: '02',
        title: 'Learning & community',
        description: 'Initiatives that expand knowledge, access and opportunity.',
    },
    {
        number: '03',
        title: 'Ideas & public conversation',
        description: 'Sharing perspectives, research and ideas with wider audiences.',
    },
];

function InitiativeCard({ item, index }: { item: Initiative; index: number }) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.article
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.42, delay: prefersReducedMotion ? 0 : Math.min(index * 0.035, 0.14), ease: 'easeOut' }}
            className={`group flex h-full flex-col border border-[#202923]/12 bg-[#f8f7f2] transition-colors duration-200 hover:border-[#7b826b]/65 ${item.featured ? 'md:col-span-7' : ''}`}
        >
            <div className={`relative overflow-hidden bg-[#dedfd5] ${item.featured ? 'aspect-[16/8.5] sm:aspect-[16/7.3]' : 'aspect-[16/9]'}`}>
                <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={item.featured ? 1400 : 900}
                    height={item.featured ? 700 : 506}
                    loading="lazy"
                    decoding="async"
                    className={`h-full w-full object-cover transition-transform duration-[350ms] ease-out motion-reduce:transform-none ${item.imagePosition ?? 'object-center'} group-hover:scale-[1.025]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17211d]/35 via-transparent to-transparent" aria-hidden="true" />
            </div>

            <div className={`flex flex-1 flex-col ${item.featured ? 'p-5 sm:p-7 lg:p-8' : 'p-5 sm:p-6'}`}>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7b826b] sm:text-[10px]">
                    {item.category}
                </p>
                <h3 className={`mt-3 font-normal tracking-[-0.04em] text-[#202923] ${item.featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[1.7rem]'}`}>
                    {item.name}
                </h3>
                <p className={`mt-3 max-w-[590px] leading-[1.8] text-[#62675e] ${item.featured ? 'text-sm sm:text-[15px]' : 'text-[13px] sm:text-sm'}`}>
                    {item.description}
                </p>
                <div className="mt-auto pt-6">
                    {/* Replace #contact with the official destination URL when it is available. */}
                    <a
                        href="#contact"
                        aria-label={`Learn more about ${item.name}`}
                        className="group/link inline-flex min-h-10 items-center gap-2 border-b border-[#202923]/25 pb-1 text-[11px] font-semibold text-[#343d35] transition-colors duration-200 hover:border-[#7b826b] hover:text-[#70795c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                    >
                        Learn more
                        <ArrowUpRight
                            size={14}
                            strokeWidth={1.7}
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

export default function InitiativesSection() {
    const prefersReducedMotion = useReducedMotion();
    const studioAndObjects = initiatives.slice(0, 2);
    const learningAndCommunity = initiatives.slice(2, 5);
    const publicIdeas = initiatives.slice(5, 7);

    return (
        <section
            id="initiatives"
            aria-labelledby="initiatives-title"
            className="scroll-mt-24 bg-[#f5f4ef]"
        >
            <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.44, ease: 'easeOut' }}
                    className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-12"
                >
                    <div>
                        <div className="mb-6 flex items-center gap-3 sm:mb-8">
                            <span className="h-px w-9 bg-[#858c72]" aria-hidden="true" />
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#68705f] sm:text-[11px]">
                                The work & initiatives
                            </p>
                        </div>
                        <h2
                            id="initiatives-title"
                            className="max-w-[650px] text-[clamp(2.35rem,4.4vw,4.4rem)] font-normal leading-[1.02] tracking-[-0.065em] text-[#202923]"
                        >
                            Innovations{' '}
                            <span className="font-serif italic tracking-[-0.055em] text-[#7b826b]">created over time</span>
                        </h2>
                    </div>
                    <p className="max-w-[600px] pb-1 text-[14px] leading-[1.9] text-[#5c625b] sm:text-[15px] md:justify-self-end">
                        Rather than a collection of separate businesses, every initiative I lead connects physical architecture, contextual craftsmanship, professional education, and human restoration into one cohesive, regenerative ecosystem.
                    </p>
                </motion.div>

                <div className="mt-12 sm:mt-16">
                    <div className="mb-5 flex flex-col gap-2 border-b border-[#202923]/15 pb-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#85897f]">{groups[0].number} / {groups[0].title}</p>
                            <h3 className="mt-1.5 text-lg font-medium tracking-[-0.025em] text-[#343d35] sm:text-xl">Designing the physical world</h3>
                        </div>
                        <p className="max-w-[440px] text-xs leading-relaxed text-[#72766b] sm:text-right">{groups[0].description}</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-12 md:gap-5">
                        {studioAndObjects.map((item, index) => (
                            <div key={item.name} className={item.featured ? 'md:col-span-7' : 'md:col-span-5'}>
                                <InitiativeCard item={item} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 sm:mt-20">
                    <div className="mb-5 flex flex-col gap-2 border-b border-[#202923]/15 pb-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#85897f]">{groups[1].number} / {groups[1].title}</p>
                            <h3 className="mt-1.5 text-lg font-medium tracking-[-0.025em] text-[#343d35] sm:text-xl">Growing people and possibility</h3>
                        </div>
                        <p className="max-w-[440px] text-xs leading-relaxed text-[#72766b] sm:text-right">{groups[1].description}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        {learningAndCommunity.map((item, index) => (
                            <InitiativeCard key={item.name} item={item} index={index + 2} />
                        ))}
                    </div>
                </div>

                <div className="mt-14 sm:mt-20">
                    <div className="mb-5 flex flex-col gap-2 border-b border-[#202923]/15 pb-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#85897f]">{groups[2].number} / {groups[2].title}</p>
                            <h3 className="mt-1.5 text-lg font-medium tracking-[-0.025em] text-[#343d35] sm:text-xl">Sharing knowledge and perspective</h3>
                        </div>
                        <p className="max-w-[440px] text-xs leading-relaxed text-[#72766b] sm:text-right">{groups[2].description}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                        {publicIdeas.map((item, index) => (
                            <InitiativeCard key={item.name} item={item} index={index + 5} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
