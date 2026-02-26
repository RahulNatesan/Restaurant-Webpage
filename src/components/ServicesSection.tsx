import React from 'react';
import { services } from '../data';
import { Coffee, Bike, Wine, Sun } from 'lucide-react';

const iconMap = {
  'Coffee': Coffee,
  'Bike': Bike,
  'Wine': Wine,
  'Sun': Sun
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Best Services</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">We Provide Best Services</h2>
          <p className="text-slate-600 mt-4 text-lg">
            We aim to provide the best service to our customers. From fast delivery to expert event catering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Coffee;
            
            return (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 text-center group">
                 <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-red transition-colors duration-300">
                    <Icon size={32} className="text-slate-900 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                 <p className="text-slate-600 leading-relaxed">
                   {service.description}
                 </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
