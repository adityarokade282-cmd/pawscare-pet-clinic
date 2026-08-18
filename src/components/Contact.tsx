import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { CLINIC } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 900);
  };

  const CONTACT_INFO = [
    {
      icon: MapPin,
      label: 'Visit Us',
      value: CLINIC.address,
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: CLINIC.phone,
      href: `tel:${CLINIC.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: CLINIC.email,
      href: `mailto:${CLINIC.email}`,
    },
    {
      icon: Clock,
      label: 'Opening Hours',
      value: `${CLINIC.hours.weekdays}\n${CLINIC.hours.sunday}\n${CLINIC.hours.emergency}`,
    },
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-emerald-50/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            We're Always Happy to Help
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Have a question about your pet's care? Reach out and our team will respond right away.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTACT_INFO.map((info) => (
                <div
                  key={info.label}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                    <info.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-500">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="mt-1 block text-sm font-semibold text-slate-800 transition-colors hover:text-emerald-700"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 whitespace-pre-line text-sm font-medium text-slate-700">
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-100">
              <div className="relative h-64 w-full bg-emerald-50">
                <iframe
                  title="PawsCare Pet Clinic location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.77%2C19.04%2C72.85%2C19.08&layer=mapnik&marker=19.06%2C72.81"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-100 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Thanks for reaching out. We'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="e.g. Neha Sharma"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="e.g. you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      rows={5}
                      placeholder="How can we help you and your pet?"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
