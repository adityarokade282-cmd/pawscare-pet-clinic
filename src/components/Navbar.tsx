import { useEffect, useState } from 'react';
import { Menu, X, PawPrint, CalendarPlus } from 'lucide-react';
import { NAV_LINKS, CLINIC } from '@/lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(16,89,79,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#home');
            }}
            className="group flex items-center gap-2.5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-105">
              <PawPrint className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span
              className={`text-xl font-extrabold tracking-tight transition-colors ${
                scrolled ? 'text-slate-800' : 'text-slate-800'
              }`}
            >
              {CLINIC.name}
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === link.href
                      ? 'text-emerald-700'
                      : 'text-slate-600 hover:text-emerald-700'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-emerald-500" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#appointment"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#appointment');
              }}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <CalendarPlus className="h-4 w-4" />
              Book Appointment
            </a>

            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-white"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            open ? 'max-h-[28rem] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-1 rounded-3xl bg-white/95 p-3 shadow-xl ring-1 ring-slate-100 backdrop-blur">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                    active === link.href
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#appointment');
                }}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30"
              >
                <CalendarPlus className="h-4 w-4" />
                Book Appointment
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
