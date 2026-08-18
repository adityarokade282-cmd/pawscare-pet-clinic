import { Award, HeartPulse, Clock, CalendarPlus, Stethoscope, PawPrint } from 'lucide-react';
import { HERO_IMAGE, CLINIC } from '@/lib/data';

const TRUST = [
  { icon: Award, value: '10+ Years', label: 'Experience' },
  { icon: HeartPulse, value: '5,000+', label: 'Happy Pets' },
  { icon: Clock, value: '24/7', label: 'Emergency Support' },
];

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50/80 via-sky-50/60 to-white" />
      <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute top-40 -left-32 -z-10 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100 backdrop-blur">
              <PawPrint className="h-4 w-4" />
              Compassionate veterinary care since 2014
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Compassionate Care for{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Your Best Friend
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">
              Professional veterinary care, preventive wellness and emergency support for dogs, cats
              and other beloved pets.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <button
                type="button"
                onClick={() => scrollTo('#appointment')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40 sm:w-auto"
              >
                <CalendarPlus className="h-5 w-5" />
                Book an Appointment
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#services')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md sm:w-auto"
              >
                <Stethoscope className="h-5 w-5" />
                Explore Our Services
              </button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {TRUST.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/70 p-4 text-center shadow-sm ring-1 ring-slate-100 backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
                >
                  <dt className="flex justify-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                      <item.icon className="h-5 w-5" />
                    </span>
                  </dt>
                  <dd className="mt-3 text-xl font-extrabold text-slate-900">{item.value}</dd>
                  <dd className="text-xs font-medium text-slate-500 sm:text-sm">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-200/50 to-sky-200/50 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-emerald-900/20 ring-1 ring-white/40">
                <img
                  src={HERO_IMAGE}
                  alt="Veterinarian gently examining a happy dog at PawsCare Pet Clinic"
                  className="h-[26rem] w-full object-cover sm:h-[32rem] lg:h-[36rem]"
                  loading="eager"
                />
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <HeartPulse className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Pets in safe hands</p>
                    <p className="text-xs text-slate-500">15+ veterinary specialists</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-3 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 md:block">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <Clock className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Open 24/7</p>
                    <p className="text-xs text-slate-500">{CLINIC.hours.emergency}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
