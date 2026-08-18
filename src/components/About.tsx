import { Stethoscope, Microscope, Heart } from 'lucide-react';
import { ABOUT_IMAGE } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

const FEATURES = [
  {
    icon: Stethoscope,
    title: 'Experienced Veterinarians',
    description:
      'A team of certified vets with decades of combined experience across medicine, surgery and wellness.',
  },
  {
    icon: Microscope,
    title: 'Modern Equipment',
    description:
      'Digital imaging, in-house labs and sterile surgical suites for accurate, stress-free diagnostics.',
  },
  {
    icon: Heart,
    title: 'Pet-Friendly Environment',
    description:
      'Calm, separate wards for cats and dogs, gentle handling and fear-free practices that put pets at ease.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sky-100/60 to-emerald-100/60 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-slate-100">
              <img
                src={ABOUT_IMAGE}
                alt="Veterinarian consulting with a pet parent at PawsCare clinic"
                className="h-[24rem] w-full object-cover sm:h-[28rem]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-xl sm:block">
              <p className="text-3xl font-extrabold">10+</p>
              <p className="text-sm font-medium text-emerald-50">Years of trusted care</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                About PawsCare
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Your Pet's Health Is Our Priority
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                At PawsCare Pet Clinic, we blend compassion with modern medicine. Our experienced
                veterinarians and fear-free facilities ensure every visit is calm, thorough and
                tailored to your companion's unique needs — from a first puppy checkup to senior
                wellness care.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {FEATURES.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 120}>
                  <div className="group h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-100">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      <feature.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
