import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const DealSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-black">
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 md:order-1 flex justify-center">
             <div className="relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Kunafa Prawn" 
                 className="w-full max-w-md h-auto object-cover rounded-full border-4 border-slate-800 shadow-2xl animate-float"
               />
               <div className="absolute top-0 right-0 md:right-10 bg-primary-red text-white w-24 h-24 rounded-full flex flex-col items-center justify-center font-bold shadow-lg transform rotate-12">
                  <span className="text-sm opacity-90">Special</span>
                  <span className="text-2xl">₹675</span>
               </div>
             </div>
             {/* Glow effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-red/20 blur-3xl rounded-full -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2">
            <span className="text-accent-yellow font-bold tracking-wider uppercase text-sm mb-2 block">Signature Dish</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Kunafa <br/> <span className="text-accent-yellow">Prawn</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md">
              Our signature dish - fried Kunafa-wrapped jumbo prawns served in a shot glass. A must-try fusion delicacy that perfectly blends tradition with innovation.
            </p>
            
            {/* Countdown */}
            <div className="flex gap-4 mb-10 text-center">
               {Object.entries(timeLeft).map(([unit, value]) => (
                 <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 w-20">
                    <div className="text-3xl font-bold text-white mb-1">{value.toString().padStart(2, '0')}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest">{unit}</div>
                 </div>
               ))}
            </div>

            <Button variant="primary" size="lg" className="px-8">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
