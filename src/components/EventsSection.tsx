import React from 'react';
import { Button } from './Button';

export const EventsSection: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Private Dining",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Exclusive tables for intimate gatherings."
    },
    {
      id: 2,
      title: "Wedding Events",
      image: "https://images.unsplash.com/photo-1519225463359-28ff63863e47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Make your special day unforgettable."
    },
    {
      id: 3,
      title: "Corporate Parties",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Professional settings for your business needs."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
             <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Our Events</span>
             <h2 className="text-4xl font-bold text-slate-900 mt-2">Private Dining & Events</h2>
             <p className="text-slate-600 mt-4">
               Whether it's a romantic dinner, a wedding celebration, or a corporate event, we have the perfect space for you.
             </p>
          </div>
          <Button variant="outline">Enquire Now</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300">
                 <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {event.description}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
