import React from 'react';
import { Star } from 'lucide-react';

const ratings = [
  { platform: 'Google', rating: 4.5, reviews: 773, color: 'bg-blue-500' },
  { platform: 'Zomato', rating: 4.5, reviews: 717, color: 'bg-red-500' },
  { platform: 'Swiggy', rating: 4.9, reviews: 36, color: 'bg-orange-500' },
  { platform: 'EazyDiner', rating: 5.0, reviews: 5, color: 'bg-purple-500' }
];

const reviews = [
  {
    id: 1,
    name: 'Anil Sharma',
    text: 'A great place to spend time with family in terms of location and ambience.',
    platform: 'Google'
  },
  {
    id: 2,
    name: 'TripAdvisor User',
    text: 'The food was tooooooooo goooood tooooo yummilicious.... cheese cakes, murgh saagwala pizza, nalli biriyani, hari mirch tikka, khunafa prawns n pizza makkhani were mouth watering!',
    platform: 'TripAdvisor'
  },
  {
    id: 3,
    name: 'Gnanasingh Arputhadas',
    text: 'Kunafa Prawn: Fried Kunafa Wrapped Jumbo Prawns Served In A Shot Glass. Must try!',
    platform: 'Google'
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Customer Reviews</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">What Our Guests Say</h2>
          <p className="text-slate-600">
            Highly rated across all platforms. Here's what our customers love about us.
          </p>
        </div>

        {/* Ratings Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {ratings.map((item) => (
            <div key={item.platform} className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Star className="text-white fill-white" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{item.platform}</h3>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-2xl font-bold text-slate-900">{item.rating}</span>
                <Star className="text-accent-yellow fill-accent-yellow" size={20} />
              </div>
              <p className="text-sm text-slate-500">{item.reviews} reviews</p>
            </div>
          ))}
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent-yellow fill-accent-yellow" size={16} />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <p className="font-bold text-slate-900">{review.name}</p>
                <span className="text-xs text-slate-500">{review.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
