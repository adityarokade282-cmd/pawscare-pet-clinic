import { useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  const active = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            Pet Parent Stories
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Loved by Pets and Their Families
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-emerald-50/60 p-8 shadow-lg ring-1 ring-slate-100 sm:p-12">
            <Quote className="absolute -top-3 -left-2 h-20 w-20 text-emerald-100" />

            <div className="relative">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote
                key={index}
                className="mt-6 text-xl font-medium leading-relaxed text-slate-700 sm:text-2xl"
                style={{ animation: 'fadeSlide 0.5s ease-out' }}
              >
                "{active.quote}"
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-base font-bold text-white">
                  {active.author.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-slate-900">{active.author}</p>
                  <p className="text-sm text-slate-500">{active.pet}</p>
                </div>
              </figcaption>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-emerald-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
