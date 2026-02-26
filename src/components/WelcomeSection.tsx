import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';

export const WelcomeSection: React.FC = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Image Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Chef Cooking" 
              className="rounded-2xl shadow-lg mt-8 w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Restaurant Interior" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
          
          {/* Circular Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-xl">
             <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary-red flex items-center justify-center bg-white">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary-red">15+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Years Exp</span>
                </div>
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Welcome to HUNDREDS BISTRO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Experience Modern <span className="text-primary-red">Indian Fusion</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Originated from a fine dining background in Vellore, HUNDREDS BISTRO brings authentic flavors from across India with a modern twist. Our expert chefs craft fusion masterpieces in a cozy, family-friendly atmosphere.
          </p>

          <div className="space-y-4 pt-2">
             {['Fresh Ingredients', 'Expert Chefs', 'Fusion Cuisine'].map((item, index) => (
               <div key={index} className="flex items-center gap-3">
                 <CheckCircle className="text-accent-yellow fill-current" size={24} />
                 <span className="text-slate-800 font-medium">{item}</span>
               </div>
             ))}
          </div>

          <div className="pt-6 flex items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-primary-red">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Contact Us</p>
                <p className="text-xl font-bold text-slate-900">+91 93639 57100</p>
              </div>
            </div>
            
             <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Sig_J._K._Rowling.png" 
              alt="Chef Signature" 
              className="h-12 opacity-60" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
