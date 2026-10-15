import { useState } from 'react';

const footerGroups = [
    {
        title: 'Design',
        links: [
            { label: 'Studio COKA', href: '#initiatives' },
            { label: 'ELEvated', href: '#initiatives' },
            { label: 'Selected Projects', href: '#initiatives' },
        ],
    },
    {
        title: 'Platforms & Media',
        links: [
            { label: 'AKO Alliance', href: '#initiatives' },
            { label: 'The Effective Architect', href: '#initiatives' },
            { label: 'Alive and Free', href: '#initiatives' },
            { label: 'Research & Writing', href: '#about' },
        ],
    },
    {
        title: 'Connect & Follow',
        links: [
            { label: 'Speaking Engagements', href: '#contact' },
            { label: 'Contact & Collaborations', href: '#contact' },
            { label: 'Instagram', href: '#contact' },
            { label: 'LinkedIn', href: '#contact' },
        ],
    },
];

const footerLinkClassName =
    'group inline-flex w-fit items-center gap-1.5 text-[12px] leading-5 text-[#62685f] transition-colors duration-200 hover:text-[#202923] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c] motion-reduce:transition-none';

export default function SiteFooter() {
    const [logoUnavailable, setLogoUnavailable] = useState(false);

    return (
        <footer className="border-t border-[#202923]/10 bg-[#f5f4ef] text-[#202923]">
            <div className="mx-auto max-w-[1360px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
                <div className="grid gap-11 lg:grid-cols-[minmax(250px,0.9fr)_1.7fr] lg:gap-16">
                    <div className="max-w-[360px]">
                        <a
                            href="#home"
                            aria-label="Crystal Kizor — back to top"
                            className="group inline-flex min-h-11 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                        >
                            {logoUnavailable ? (
                                <span
                                    aria-hidden="true"
                                    className="flex h-11 w-11 items-center justify-center border border-[#202923]/30 font-serif text-xl tracking-[-0.12em] transition-colors duration-200 group-hover:border-[#7a8066]"
                                >
                                    CK
                                </span>
                            ) : (
                                <img
                                    src="/crystal-kizor-primary.webp"
                                    alt="Crystal Kizor"
                                    width={260}
                                    height={60}
                                    onError={() => setLogoUnavailable(true)}
                                    className="block h-10 w-auto max-w-[240px] object-contain object-left transition-opacity duration-200 group-hover:opacity-80 sm:h-11"
                                />
                            )}
                        </a>

                        <p className="mt-4 max-w-[340px] text-[13px] leading-6 text-[#62685f] sm:text-sm sm:leading-6">
                            Architect, spatial researcher, and systems designer engineering climate-smart environments, contemporary African furniture, and transformative capacity-building platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 lg:gap-x-10">
                        {footerGroups.map((group) => (
                            <nav key={group.title} aria-label={group.title} className="min-w-0">
                                <h2 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#202923]">
                                    {group.title}
                                </h2>
                                <ul className="space-y-2.5">
                                    {group.links.map((item) => (
                                        <li key={`${group.title}-${item.label}`}>
                                            <a href={item.href} className={footerLinkClassName}>
                                                <span>{item.label}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className="inline-block text-[11px] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-70 motion-reduce:transition-none"
                                                >
                                                    ↗
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-[#202923]/12 pt-5 text-[10px] leading-relaxed text-[#85897f] sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
                    <p>© {new Date().getFullYear()} Crystal Kizor. All rights reserved.</p>
                    <p>Architecture · Design · Knowledge · Community</p>
                    <a
                        href="#home"
                        className="w-fit text-[#62685f] transition-colors hover:text-[#202923] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#68745c]"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}
