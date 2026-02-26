import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10" id="footer">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="text-2xl font-bold font-heading text-white">
                HUNDREDS <span className="text-primary-red">BISTRO</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Modern Indian Bistro serving authentic flavors from across India with a contemporary twist. Join us for an unforgettable fusion dining experience.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-red transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/hundredsbistro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-red transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Book a Table</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="https://www.zomato.com/chennai/hundreds-bistro-1-chetpet" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors">Zomato</a>
              </li>
              <li>
                <a href="https://www.eazydiner.com/chennai/hundreds-bistro-chetpet-chennai-700705" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors">EazyDiner</a>
              </li>
              <li>
                <a href="https://www.swiggy.com/restaurants/hundreds-bistro-chetpet-chennai-992228/dineout" target="_blank" rel="noopener noreferrer" className="hover:text-primary-red transition-colors">Swiggy Dineout</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Sun</span>
                <span>11:00 AM - 10:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h4 className="text-xl font-bold mb-6">Contact Us</h4>
             <ul className="space-y-6 text-slate-400">
               <li className="flex items-start gap-4">
                 <MapPin className="text-primary-red shrink-0" size={20} />
                 <a 
                   href="https://www.google.com/maps?q=13.0694117,80.2414717" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-white transition-colors"
                 >
                   Plot No. 105, First Floor, Harrington Road, Opposite Shoppers Stop, Chetpet, Chennai - 600031
                 </a>
               </li>
               <li className="flex items-center gap-4">
                 <Phone className="text-primary-red shrink-0" size={20} />
                 <a href="tel:+919363957100" className="hover:text-white transition-colors">
                   +91 93639 57100
                 </a>
               </li>
               <li className="flex items-center gap-4">
                 <Mail className="text-primary-red shrink-0" size={20} />
                 <a href="mailto:hello@hundredsbistro.com" className="hover:text-white transition-colors">
                   hello@hundredsbistro.com
                 </a>
               </li>
             </ul>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mb-16">
          <iframe 
            src="https://www.google.com/maps?q=13.0694117,80.2414717&hl=es&z=15&output=embed"
            width="100%" 
            height="300" 
            className="w-full rounded-xl"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Newsletter & Copyright */}
        <div className="border-t border-slate-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-slate-500 text-sm">
               © 2026 HUNDREDS BISTRO. All rights reserved.
             </div>
             <div className="flex gap-8 text-sm text-slate-500">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
