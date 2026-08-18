import { STATS } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-white sm:text-5xl">
                  <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium text-slate-300 sm:text-base">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
