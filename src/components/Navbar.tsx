import { type MouseEvent, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);

    if (!target) {
      setIsOpen(false);
      return;
    }

    event.preventDefault();
    setIsOpen(false);
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
    window.history.pushState(null, '', href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 shadow-[0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
      <nav
        className="site-container flex items-center justify-between py-3.5"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="focus-ring rounded-md text-base font-semibold tracking-tight text-white transition hover:text-teal-100"
          aria-label="Henny Yared home"
          onClick={(event) => handleNavClick(event, '#home')}
        >
          Henny Yared
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-lg shadow-slate-950/30 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={(event) => handleNavClick(event, link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Henysha"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 sm:inline-flex"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden py-2 text-sm sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-100 transition hover:border-teal-300/60 hover:bg-white/[0.08] lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition ${isOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${isOpen ? 'block' : 'hidden'} border-t border-white/10 bg-slate-950/95 pb-5 pt-2 shadow-2xl backdrop-blur-xl lg:hidden`}
      >
        <div className="site-container flex flex-col gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-nav-link" onClick={(event) => handleNavClick(event, link.href)}>
              {link.label}
            </a>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href="https://github.com/Henysha"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-2.5 text-sm"
            >
              GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary py-2.5 text-sm">
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
