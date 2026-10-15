const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Contact', href: '#contact' },
];

export default function SiteFooter() {
    return (
        <footer className="bg-[#f5f4ef] text-[#202923]">
            <div className="mx-auto max-w-[1360px] px-5 py-7 sm:px-8 sm:py-8 lg:px-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <a
                        href="#home"
                        aria-label="Crystal Kizor, back to top"
                        className="group inline-flex w-fit items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                    >
                        {/* <span className="flex size-9 items-center justify-center border border-[#202923]/35 transition-colors group-hover:border-[#7a8066]" aria-hidden="true">
                            <span className="font-serif text-[17px] leading-none tracking-[-0.12em]">C<span className="relative -left-[1px] top-[4px] text-[14px]">K</span></span>
                        </span> */}
                        <img
                            alt="Crystal Kizor — Space, Product &amp; Systems Designer"
                            width="260" height="60"
                            className="h-9 sm:h-11 w-auto object-contain block group-hover:opacity-85 transition-opacity"
                            src="/crystal-kizor-primary.webp" />
                        <span>
                            {/* <span className="block text-[10px] font-semibold uppercase tracking-[0.17em]">Crystal Kizor</span> */}
                            <span className="mt-1 block text-[9px] uppercase tracking-[0.11em] text-[#72766e]">Architecture · Design · Ideas</span>
                        </span>
                    </a>

                    <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end sm:gap-x-7">
                        {footerLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-[10px] font-medium text-[#5c625b] transition-colors hover:text-[#7b826b] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#68745c]"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-6 flex flex-col gap-2 border-t border-[#202923]/12 pt-5 text-[9px] leading-relaxed text-[#85897f] sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
                    <p>© {new Date().getFullYear()} Crystal Kizor. All rights reserved.</p>
                    <p>Architecture, design, knowledge and community.</p>
                </div>
            </div>
        </footer>
    );
}
