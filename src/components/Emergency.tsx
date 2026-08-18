import { Phone, Siren } from 'lucide-react';
import { CLINIC } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Emergency() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-500 via-rose-500 to-red-600 p-8 shadow-xl sm:p-12">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
                  <Siren className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                    Pet Emergency? We're Here to Help.
                  </h2>
                  <p className="mt-2 max-w-xl text-base text-rose-50 sm:text-lg">
                    Quick veterinary assistance when your pet needs urgent care. Our emergency team
                    is ready day and night.
                  </p>
                </div>
              </div>

              <a
                href={`tel:${CLINIC.emergencyPhone.replace(/\s/g, '')}`}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-base font-bold text-red-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl md:w-auto"
              >
                <Phone className="h-5 w-5" />
                Call Emergency Support
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
