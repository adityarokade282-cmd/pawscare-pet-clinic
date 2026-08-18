import { Mail, Phone, Linkedin, Facebook } from 'lucide-react';
import { VETS } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Veterinarians() {
  return (
    <section id="veterinarians" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            Meet the Team
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Caring Veterinarians You Can Trust
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Our specialists combine medical excellence with genuine compassion for every animal that
            walks through our doors.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VETS.map((vet, i) => (
            <Reveal key={vet.name} delay={i * 120}>
              <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-emerald-100">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  <img
                    src={vet.image}
                    alt={`${vet.name}, ${vet.specialty} at PawsCare Pet Clinic`}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {[Mail, Phone, Linkedin, Facebook].map((Icon, idx) => (
                      <span
                        key={idx}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-emerald-700 shadow-sm backdrop-blur transition-colors hover:bg-emerald-500 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{vet.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{vet.specialty}</p>
                  <p className="mt-2 text-sm text-slate-500">{vet.experience}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
