import React from 'react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Kunafa Prawn - Signature Dish'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Chicken Tikka Pizza'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Nalli Biryani'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Chef Preparation'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Restaurant Interior'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Fusion Cuisine'
  }
];

export const GallerySection: React.FC = () => {
  return (
    <section className="section-padding bg-white" id="gallery">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary-red font-bold tracking-wider uppercase text-sm">Gallery</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">A Taste of HUNDREDS BISTRO</h2>
          <p className="text-slate-600">
            Experience our ambiance and culinary creations through these moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-full min-h-[400px]' : 'h-64'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
