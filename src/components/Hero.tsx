import React from 'react';
import { ReservationForm } from './ReservationForm';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const handleBooking = () => {
    window.open('https://www.zomato.com/chennai/hundreds-bistro-1-chetpet', '_blank');
  };

  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 overflow-hidden">
      {/* Background Shapes (Optional/Decorative) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-red/5 skew-x-12 transform origin-top-right z-0"></div>
      
      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/50 text-primary-red rounded-full text-sm font-bold tracking-wide animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary-red animate-pulse"></span>
            ⭐ Rated 4.5 Stars Across Platforms
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900">
            HUNDREDS <br/>
            <span className="relative inline-block text-primary-red">
              BISTRO
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-yellow opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00025 6.99997C25.7501 2.99991 74.5 0.499975 125 1.99995C175.5 3.49992 197.5 6.49997 197.5 6.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
            Modern Indian Bistro serving food from across India. Experience fusion cuisine where traditional flavors meet contemporary creativity.
          </p>

          {/* Cuisine Tags */}
          <div className="flex flex-wrap gap-2">
            {['Modern Indian', 'Fusion Pizzas', 'Kababs', 'North Indian'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="primary" size="lg" onClick={handleBooking}>
              <CalendarCheck size={20} />
              Book a Table
            </Button>
            <button 
              onClick={scrollToMenu}
              className="flex items-center gap-2 text-slate-900 font-semibold hover:text-primary-red transition-colors group"
            >
              View Our Menu 
              <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-primary-red group-hover:text-white transition-all">
                <ArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative z-10 animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76690b6d02f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Delicious Food Plate" 
              className="w-full h-auto object-cover rounded-full shadow-2xl border-4 border-white"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Available on</p>
                  <p className="text-sm font-bold text-slate-900">Zomato & Swiggy</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-yellow/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      {/* Reservation Form Overlay */}
      <div className="container-custom mt-12 md:mt-24 relative z-20">
         <ReservationForm />
      </div>
    </section>
  );
};
