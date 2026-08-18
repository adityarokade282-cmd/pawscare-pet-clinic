import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Appointment = {
  id: string;
  owner_name: string;
  phone: string;
  email: string;
  pet_name: string;
  pet_type: 'Dog' | 'Cat' | 'Other';
  pet_age: string | null;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message: string | null;
  status: string;
  created_at: string;
};

export type NewAppointment = Omit<Appointment, 'id' | 'status' | 'created_at'>;
