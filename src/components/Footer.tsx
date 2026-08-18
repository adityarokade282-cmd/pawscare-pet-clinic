import { PawPrint, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { CLINIC, NAV_LINKS, SERVICES } from '@/lib/data';

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30">
                <PawPrint className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="text-xl font-extrabold text-white">{CLINIC.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {CLINIC.fullName} provides compassionate, modern veterinary care for dogs, cats and
              beloved pets across Mumbai. Your companion's health is our promise.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.name}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('#services');
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-400"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`} className="hover:text-emerald-400">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-emerald-400">
                  {CLINIC.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {CLINIC.fullName}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Crafted with care for pets and their families.
          </p>
        </div>
      </div>
    </footer>
  );
}
