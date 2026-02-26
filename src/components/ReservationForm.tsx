import React, { useState } from 'react';
import { Calendar, Clock, User, ChevronDown } from 'lucide-react';
import { Button } from './Button';
import { ReservationFormData } from '../types';

export const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    guests: 2,
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation Submitted:', formData);
    alert('Table reserved! (Demo)');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl mx-auto -mt-24 relative z-20">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
        
        {/* Guests Input */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            No of Guest
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <select
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none appearance-none text-slate-700"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: Number(e.target.value)})}
            >
              {[1, 2, 3, 4, 5, 6, 8, 10].map(num => (
                <option key={num} value={num}>{num} Person</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Date Input */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none text-slate-700"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
          </div>
        </div>

        {/* Time Input */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="time"
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent outline-none text-slate-700"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-auto">
          <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto h-[50px]">
            Reserve A Table
          </Button>
        </div>
      </form>
    </div>
  );
};
