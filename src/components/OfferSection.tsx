import React from 'react';
import { Button } from './Button';
import { Percent } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900 skew-x-12 transform origin-top-right translate-x-1/4 z-0"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-yellow/20 text-slate-900 rounded-full text-sm font-bold animate-pulse">
                <Percent size={16} />
                Special Offer
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Good Food Steak & <br/>
                <span className="text-primary-red">Great Restaurant</span>
              </h2>
              
              <p className="text-slate-600 text-lg max-w-md">
                Indulge in our premium steaks cooked to perfection. For a limited time, get exclusive discounts on our signature dishes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <div className="bg-primary-red text-white p-4 rounded-xl text-center min-w-[120px]">
                    <span className="block text-3xl font-bold">20%</span>
                    <span className="text-sm font-medium opacity-90">Discount</span>
                 </div>
                 <div className="flex-1 flex items-center">
                    <p className="text-slate-800 font-medium">
                      On all steak orders above ₹4500. <br/>
                      <span className="text-sm text-slate-500">Terms and conditions apply.</span>
                    </p>
                 </div>
              </div>

              <div className="pt-4">
                <Button variant="primary" size="lg">
                  Order Now
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
               <img 
                 src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Delicious Steak" 
                 className="w-full h-auto object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
               />
               <div className="absolute -bottom-6 -right-6 bg-accent-yellow text-slate-900 p-6 rounded-full shadow-lg font-bold text-center w-32 h-32 flex flex-col items-center justify-center animate-bounce-slow">
                  <span className="text-sm uppercase">Only</span>
                  <span className="text-3xl">₹2200</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
