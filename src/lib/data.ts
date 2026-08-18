export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Veterinarians', href: '#veterinarians' },
  { label: 'Pet Care', href: '#pet-care' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const CLINIC = {
  name: 'PawsCare',
  fullName: 'PawsCare Pet Clinic',
  phone: '+91 98765 43210',
  emergencyPhone: '+91 98765 91100',
  email: 'hello@pawscareclinic.com',
  address: '221 Greenfield Avenue, Bandra West, Mumbai 400050',
  hours: {
    weekdays: 'Mon – Sat: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 4:00 PM',
    emergency: 'Emergency Support: 24/7',
  },
};

export const HERO_IMAGE =
  'https://images.pexels.com/photos/6235664/pexels-photo-6235664.jpeg?auto=compress&cs=tinysrgb&h=900&w=700';

export const ABOUT_IMAGE =
  'https://images.pexels.com/photos/6235011/pexels-photo-6235011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export type Service = {
  icon: string;
  name: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: 'stethoscope',
    name: 'General Checkup',
    description:
      'Comprehensive wellness exams that catch concerns early and keep your pet thriving at every life stage.',
  },
  {
    icon: 'syringe',
    name: 'Vaccination',
    description:
      'Tailored immunization schedules for puppies, kittens and adult pets to protect against preventable diseases.',
  },
  {
    icon: 'bone',
    name: 'Dental Care',
    description:
      'Professional cleanings, extractions and oral health assessments to keep tails wagging and breath fresh.',
  },
  {
    icon: 'activity',
    name: 'Surgery',
    description:
      'Modern, sterile operating theatres with trained surgeons for soft-tissue and orthopedic procedures.',
  },
  {
    icon: 'scissors',
    name: 'Pet Grooming',
    description:
      'Breed-specific grooming, baths and coat treatments that keep your companion clean, calm and comfortable.',
  },
  {
    icon: 'salad',
    name: 'Nutrition Consultation',
    description:
      'Personalized diet plans and weight-management guidance crafted by our pet wellness specialists.',
  },
  {
    icon: 'flask-conical',
    name: 'Laboratory & Diagnostics',
    description:
      'On-site blood work, imaging and rapid testing for fast, accurate answers when your pet needs them.',
  },
  {
    icon: 'ambulance',
    name: 'Emergency Care',
    description:
      'Round-the-clock critical care and triage so your best friend is never alone in a crisis.',
  },
];

export type Vet = {
  name: string;
  specialty: string;
  experience: string;
  image: string;
};

export const VETS: Vet[] = [
  {
    name: 'Dr. Ananya Sharma',
    specialty: 'Veterinary Physician',
    experience: '10+ years experience',
    image:
      'https://images.pexels.com/photos/32788235/pexels-photo-32788235.jpeg?auto=compress&cs=tinysrgb&h=600&w=480',
  },
  {
    name: 'Dr. Rahul Mehta',
    specialty: 'Veterinary Surgeon',
    experience: '8+ years experience',
    image:
      'https://images.pexels.com/photos/6235652/pexels-photo-6235652.jpeg?auto=compress&cs=tinysrgb&h=600&w=480',
  },
  {
    name: 'Dr. Priya Deshmukh',
    specialty: 'Pet Wellness Specialist',
    experience: '6+ years experience',
    image:
      'https://images.pexels.com/photos/6235225/pexels-photo-6235225.jpeg?auto=compress&cs=tinysrgb&h=600&w=480',
  },
];

export type PetTip = {
  icon: string;
  title: string;
  excerpt: string;
  image: string;
};

export const PET_TIPS: PetTip[] = [
  {
    icon: 'dog',
    title: 'Healthy Diet for Dogs',
    excerpt:
      'Balanced proteins, healthy fats and the right portions keep your dog energetic and at a healthy weight.',
    image:
      'https://images.pexels.com/photos/8434676/pexels-photo-8434676.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: 'cat',
    title: 'Cat Vaccination Guide',
    excerpt:
      'Core vaccines and booster schedules every cat parent should know to protect against feline diseases.',
    image:
      'https://images.pexels.com/photos/6816869/pexels-photo-6816869.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: 'bone',
    title: 'Pet Dental Hygiene',
    excerpt:
      'Brushing, dental chews and annual cleanings prevent painful gum disease and tooth loss in pets.',
    image:
      'https://images.pexels.com/photos/6235113/pexels-photo-6235113.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    icon: 'heart-pulse',
    title: 'Signs Your Pet Needs a Vet',
    excerpt:
      'Changes in appetite, energy or behaviour can be early warning signs that deserve a professional look.',
    image:
      'https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  pet: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'PawsCare has been wonderful with our dog. The doctors are extremely caring and professional, and the clinic feels warm the moment you walk in.',
    author: 'Neha',
    pet: 'Pet Parent',
  },
  {
    quote:
      'The clinic is clean, modern and the staff genuinely cares about animals. They explained every step of the treatment and followed up the next day.',
    author: 'Amit',
    pet: 'Pet Parent',
  },
  {
    quote:
      'We rushed in during a late-night emergency and the team was ready. Our cat recovered fully and we cannot thank them enough.',
    author: 'Sneha',
    pet: 'Pet Parent',
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Pets Treated' },
  { value: '15+', label: 'Veterinary Specialists' },
  { value: '98%', label: 'Happy Pet Parents' },
];
