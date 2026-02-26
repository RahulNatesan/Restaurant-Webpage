import React from 'react';
import { blogPosts } from '../data';
import { Calendar, ArrowRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section className="section-padding bg-slate-50" id="blog">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Recent Updates</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">Latest News & Blog</h2>
          <p className="text-slate-600 mt-4">
             Stay updated with our latest news, recipes, and event announcements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={`https://source.unsplash.com/random/800x600?restaurant,food,${post.id}`}
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold text-slate-900 flex items-center gap-2 shadow-sm">
                  <Calendar size={14} className="text-primary-red" />
                  {post.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary-red transition-colors uppercase tracking-wider">
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
