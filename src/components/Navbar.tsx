import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Find your way', href: '#pathways' },
    { label: 'Contact', href: '#contact' },
];

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!menuOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#202923]/10 bg-[#f5f4ef]/95 backdrop-blur-md">
            <div className="mx-auto flex h-[76px] max-w-[1360px] items-center justify-between px-5 sm:h-[84px] sm:px-8 lg:px-12">
                <a
                    href="#home"
                    className="group flex min-w-0 items-center gap-3.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                    aria-label="Crystal Kizor, home"
                    onClick={closeMenu}
                >
                    {/* <span className="relative flex size-10 shrink-0 items-center justify-center border border-[#202923]/35 text-[#202923] transition-colors duration-200 group-hover:border-[#7a8066] sm:size-11">
                        <span className="font-serif text-[19px] leading-none tracking-[-0.12em]">C<span className="relative -left-[1px] top-[5px] text-[16px]">K</span></span>
                    </span> */}
                    <img
                        alt="Crystal Kizor — Space, Product &amp; Systems Designer" 
                        width="260" height="60" 
                        className="h-9 sm:h-11 w-auto object-contain block group-hover:opacity-85 transition-opacity" 
                        src="/crystal-kizor-primary.webp"/>
                    <span className="flex min-w-0 flex-col gap-[5px]">
                        {/* <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.19em] text-[#202923] sm:text-xs">
                            Crystal Kizor
                        </span> */}
                        <span className="hidden whitespace-nowrap text-[9px] uppercase tracking-[0.14em] text-[#72766e] min-[380px]:block sm:text-[10px]">
                            Architecture · Design · Ideas
                        </span>
                    </span>
                </a>

                <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex xl:gap-10">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="nav-link rounded-sm py-2 text-[12px] font-medium text-[#525950] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c]"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        className="inline-flex min-h-11 items-center gap-3 border border-[#202923]/25 px-4 text-[11px] font-semibold tracking-[0.02em] text-[#202923] transition-colors duration-200 hover:border-[#202923] hover:bg-[#202923] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68745c] xl:px-5"
                    >
                        Start a conversation
                        <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
                    </a>
                </div>

                <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center border border-[#202923]/20 text-[#202923] transition-colors hover:bg-[#eae9e2] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#68745c] lg:hidden"
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    aria-controls={menuOpen ? 'mobile-navigation' : undefined}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X size={19} strokeWidth={1.6} /> : <Menu size={19} strokeWidth={1.6} />}
                </button>
            </div>

            <AnimatePresence initial={false}>
                {menuOpen && (
                    <motion.nav
                        id="mobile-navigation"
                        aria-label="Mobile navigation"
                        initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: 'easeOut' }}
                        className="border-t border-[#202923]/10 bg-[#f5f4ef] px-5 py-5 sm:px-8 lg:hidden"
                    >
                        <div className="mx-auto flex max-w-[1360px] flex-col">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className={`flex min-h-12 items-center justify-between border-b border-[#202923]/10 text-sm text-[#343d35] transition-colors hover:text-[#737b5d] focus-visible:outline-2 focus-visible:outline-[#68745c] ${index === 0 ? 'border-t border-[#202923]/10' : ''}`}
                                >
                                    {item.label}
                                    <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 bg-[#202923] px-5 text-xs font-semibold text-white transition-colors hover:bg-[#39453a] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#68745c]"
                            >
                                Connect with Crystal
                                <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
