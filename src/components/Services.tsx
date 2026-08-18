import {
  Stethoscope,
  Syringe,
  Bone,
  Activity,
  Scissors,
  Salad,
  FlaskConical,
  Ambulance,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

const ICONS: Record<string, LucideIcon> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  bone: Bone,
  activity: Activity,
  scissors: Scissors,
  salad: Salad,
  'flask-conical': FlaskConical,
  ambulance: Ambulance,
};

export function Services() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="bg-gradient-to-b from-white to-emerald-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Complete Care for Every Stage of Life
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From routine wellness to complex surgery, our clinic offers a full spectrum of
            veterinary services under one roof.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Stethoscope;
            return (
              <Reveal key={service.name} delay={(i % 4) * 90}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-emerald-100">
                  <span className="absolute right-0 top-0 h-24 w-24 -translate-y-10 translate-x-10 rounded-full bg-emerald-100/60 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h3 className="relative mt-5 text-lg font-bold text-slate-900">{service.name}</h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollTo('#appointment')}
                    className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
