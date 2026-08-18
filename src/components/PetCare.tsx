import { Dog, Cat, Bone, HeartPulse, ArrowRight, type LucideIcon } from 'lucide-react';
import { PET_TIPS } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

const ICONS: Record<string, LucideIcon> = {
  dog: Dog,
  cat: Cat,
  bone: Bone,
  'heart-pulse': HeartPulse,
};

export function PetCare() {
  return (
    <section id="pet-care" className="bg-gradient-to-b from-emerald-50/40 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            Pet Care Tips
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Expert Advice for Happier, Healthier Pets
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Practical, vet-approved guidance to help you care for your companion between visits.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PET_TIPS.map((tip, i) => {
            const Icon = ICONS[tip.icon] ?? Dog;
            return (
              <Reveal key={tip.title} delay={(i % 4) * 90}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-emerald-100">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-emerald-600 shadow-sm backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900">{tip.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{tip.excerpt}</p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
