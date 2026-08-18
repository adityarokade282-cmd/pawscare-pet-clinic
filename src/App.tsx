import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Veterinarians } from '@/components/Veterinarians';
import { Appointment } from '@/components/Appointment';
import { Emergency } from '@/components/Emergency';
import { PetCare } from '@/components/PetCare';
import { Testimonials } from '@/components/Testimonials';
import { Statistics } from '@/components/Statistics';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Veterinarians />
        <Appointment />
        <Emergency />
        <PetCare />
        <Testimonials />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
