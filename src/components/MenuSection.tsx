import React, { useState } from 'react';
import { menuItems } from '../data';
import { clsx } from 'clsx';
import { Button } from './Button';
import { Award } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Starters' | 'Pizzas' | 'Mains' | 'Desserts' | 'Beverages'>('Starters');
  
  const filteredItems = menuItems.filter(item => item.category === activeTab);

  const tabs = ['Starters', 'Pizzas', 'Mains', 'Desserts', 'Beverages'] as const;

  return (
    <section className="section-padding bg-white" id="menu">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Delicious Menu</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Explore Our Fusion Menu</h2>
          <p className="text-slate-600">
            Modern Indian fusion cuisine crafted with authentic flavors. Average cost for two: ₹1,300 – ₹1,500
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
           <div className="inline-flex bg-slate-100 p-1 rounded-full flex-wrap gap-1">
             {tabs.map(tab => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={clsx(
                   'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap',
                   activeTab === tab 
                     ? 'bg-primary-red text-white shadow-md' 
                     : 'text-slate-600 hover:text-slate-900'
                 )}
               >
                 {tab}
               </button>
             ))}
           </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex gap-4 md:gap-6 group relative">
               {/* Veg/Non-Veg Indicator */}
               <div className="absolute top-0 left-0 z-10">
                 <div className={`w-5 h-5 border-2 flex items-center justify-center ${
                   item.isVeg ? 'border-green-600' : 'border-red-600'
                 }`}>
                   <div className={`w-2.5 h-2.5 rounded-full ${
                     item.isVeg ? 'bg-green-600' : 'bg-red-600'
                   }`}></div>
                 </div>
               </div>

               {/* Signature Badge */}
               {item.isSignature && (
                 <div className="absolute top-0 right-0 z-10 bg-accent-yellow text-slate-900 px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold flex items-center gap-1">
                   <Award size={12} />
                   Signature
                 </div>
               )}

               <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-slate-200 shadow-md relative">
                 <img 
                   src={`https://source.unsplash.com/random/200x200?food,${item.name.replace(' ', '')}`} 
                   alt={item.name}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80';
                   }} 
                 />
               </div>
               <div className="flex-1 border-b border-dashed border-slate-200 pb-4">
                 <div className="flex justify-between items-start mb-2">
                   <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-red transition-colors pr-2">
                     {item.name}
                   </h3>
                   <span className="text-xl font-bold text-primary-red whitespace-nowrap">₹{item.price}</span>
                 </div>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   {item.description}
                 </p>
               </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            onClick={() => window.open('https://www.zomato.com/chennai/hundreds-bistro-1-chetpet', '_blank')}
          >
            View Full Menu on Zomato
          </Button>
        </div>
      </div>
    </section>
  );
};
