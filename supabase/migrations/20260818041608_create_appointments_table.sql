/*
# Create appointments table (single-tenant, no auth)

1. New Tables
- `appointments`
  - `id` (uuid, primary key)
  - `owner_name` (text, not null) — pet owner's full name
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email
  - `pet_name` (text, not null) — name of the pet
  - `pet_type` (text, not null) — Dog / Cat / Other
  - `pet_age` (text) — age of the pet (free text, e.g. "3 years")
  - `service` (text, not null) — selected veterinary service
  - `preferred_date` (date, not null) — requested appointment date
  - `preferred_time` (text, not null) — requested time slot
  - `message` (text) — optional pet problem / notes
  - `status` (text, default 'pending') — booking status
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `appointments`.
- Allow anon + authenticated INSERT only (public booking form).
- No SELECT/UPDATE/DELETE from the public client — clinic staff manage records server-side.

3. Notes
- This is a public booking form with no sign-in, so anon must be able to insert.
- We do NOT expose existing appointments to the public, so only INSERT is granted to anon.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  pet_name text NOT NULL,
  pet_type text NOT NULL CHECK (pet_type IN ('Dog', 'Cat', 'Other')),
  pet_age text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);
