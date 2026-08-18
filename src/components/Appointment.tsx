import { useState, type FormEvent } from 'react';
import { CalendarPlus, CheckCircle2, Loader2, AlertCircle, PawPrint } from 'lucide-react';
import { supabase, type NewAppointment } from '@/lib/supabase';
import { SERVICES, CLINIC } from '@/lib/data';
import { Reveal } from '@/components/Reveal';

type FormState = {
  owner_name: string;
  phone: string;
  email: string;
  pet_name: string;
  pet_type: 'Dog' | 'Cat' | 'Other';
  pet_age: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
};

const EMPTY: FormState = {
  owner_name: '',
  phone: '',
  email: '',
  pet_name: '',
  pet_type: 'Dog',
  pet_age: '',
  service: '',
  preferred_date: '',
  preferred_time: '',
  message: '',
};

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
];

export function Appointment() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.owner_name.trim()) next.owner_name = 'Please enter your name.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (!form.pet_name.trim()) next.pet_name = 'Please enter your pet\u2019s name.';
    if (!form.service) next.service = 'Please choose a service.';
    if (!form.preferred_date) next.preferred_date = 'Please pick a preferred date.';
    else if (new Date(form.preferred_date) < new Date(new Date().toDateString()))
      next.preferred_date = 'Please choose a date in the future.';
    if (!form.preferred_time) next.preferred_time = 'Please pick a preferred time.';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const payload: NewAppointment = {
      owner_name: form.owner_name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      pet_name: form.pet_name.trim(),
      pet_type: form.pet_type,
      pet_age: form.pet_age.trim() || null,
      service: form.service,
      preferred_date: form.preferred_date,
      preferred_time: form.preferred_time,
      message: form.message.trim() || null,
    };

    const { error } = await supabase.from('appointments').insert(payload);

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setForm(EMPTY);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 py-20 sm:py-28"
    >
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-10 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              <PawPrint className="h-4 w-4" />
              Book a Visit
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Schedule an Appointment for Your Pet
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-emerald-50">
              Fill in a few details and our clinic team will confirm your slot. For emergencies,
              call us directly at{' '}
              <a
                href={`tel:${CLINIC.emergencyPhone.replace(/\s/g, '')}`}
                className="font-semibold underline decoration-amber-300 decoration-2 underline-offset-4 hover:text-white"
              >
                {CLINIC.emergencyPhone}
              </a>
              .
            </p>

            <ul className="mt-8 space-y-3 text-emerald-50">
              {[
                'Same-day appointments for urgent cases',
                'Separate, calm wards for cats and dogs',
                'Friendly reminders before every visit',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold text-slate-900">
                    Thank you!
                  </h3>
                  <p className="mt-3 max-w-md text-slate-600">
                    Your appointment request has been received. Our clinic team will contact you
                    shortly to confirm the details.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Pet Owner Name"
                      required
                      error={errors.owner_name}
                    >
                      <input
                        type="text"
                        value={form.owner_name}
                        onChange={(e) => update('owner_name', e.target.value)}
                        placeholder="e.g. Neha Sharma"
                        className={inputClass(errors.owner_name)}
                      />
                    </Field>

                    <Field label="Phone Number" required error={errors.phone}>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className={inputClass(errors.phone)}
                      />
                    </Field>

                    <Field label="Email" required error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="e.g. you@example.com"
                        className={inputClass(errors.email)}
                      />
                    </Field>

                    <Field label="Pet Name" required error={errors.pet_name}>
                      <input
                        type="text"
                        value={form.pet_name}
                        onChange={(e) => update('pet_name', e.target.value)}
                        placeholder="e.g. Bruno"
                        className={inputClass(errors.pet_name)}
                      />
                    </Field>

                    <Field label="Pet Type" required>
                      <select
                        value={form.pet_type}
                        onChange={(e) => update('pet_type', e.target.value)}
                        className={inputClass()}
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field>

                    <Field label="Pet Age">
                      <input
                        type="text"
                        value={form.pet_age}
                        onChange={(e) => update('pet_age', e.target.value)}
                        placeholder="e.g. 3 years"
                        className={inputClass()}
                      />
                    </Field>

                    <Field label="Select Service" required error={errors.service}>
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className={inputClass(errors.service)}
                      >
                        <option value="">Choose a service</option>
                        {SERVICES.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Preferred Date" required error={errors.preferred_date}>
                      <input
                        type="date"
                        min={today}
                        value={form.preferred_date}
                        onChange={(e) => update('preferred_date', e.target.value)}
                        className={inputClass(errors.preferred_date)}
                      />
                    </Field>

                    <Field label="Preferred Time" required error={errors.preferred_time}>
                      <select
                        value={form.preferred_time}
                        onChange={(e) => update('preferred_time', e.target.value)}
                        className={inputClass(errors.preferred_time)}
                      >
                        <option value="">Choose a time slot</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message / Pet Problem">
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={3}
                      placeholder="Tell us briefly about your pet's concern or symptoms"
                      className={inputClass()}
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-100">
                      <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                      <p>
                        Something went wrong while submitting your request. Please try again, or
                        call us at {CLINIC.phone}.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CalendarPlus className="h-5 w-5" />
                        Book Appointment
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

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-0.5 text-emerald-600">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}
    </label>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
    error ? 'border-red-300 ring-1 ring-red-200' : 'border-slate-200'
  }`;
}
