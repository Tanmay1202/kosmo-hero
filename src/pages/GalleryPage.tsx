import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { MOTORCYCLES } from '../data/motorcycles';
import { SCOOTERS } from '../data/scooters';
import { Camera, Eye, PhoneCall } from 'lucide-react';
import { Button } from '../components/common/Button';

export const GalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'motorcycles' | 'scooters' | 'adventure'>('all');

  const galleryItems = [
    { title: 'Hero XPulse 200 4V Off-Road Trail', category: 'adventure', tag: 'Adventure Rally', image: 'https://s7ap1.scene7.com/is/image/hmcl/xpulse-200-4v?fmt=webp-alpha' },
    { title: 'Karizma XMR Track Edition', category: 'motorcycles', tag: 'Super Sport', image: 'https://s7ap1.scene7.com/is/image/hmcl/Karizma_xmr?fmt=webp-alpha' },
    { title: 'Xtreme 160R 4V Street Stance', category: 'motorcycles', tag: 'Streetfighter', image: 'https://s7ap1.scene7.com/is/image/hmcl/xtreme160r-image-06?fmt=webp-alpha' },
    { title: 'New Destini 125 Front ABS Profile', category: 'scooters', tag: 'Neo-Retro', image: 'https://s7ap1.scene7.com/is/image/hmcl/destini-prime?fmt=webp-alpha' },
    { title: 'Xoom 110 Cornering Light Showcase', category: 'scooters', tag: 'Urban Sport', image: 'https://s7ap1.scene7.com/is/image/hmcl/xoom-110?fmt=webp-alpha' },
    { title: 'Splendor+ XTEC 2.0 H-LED Signature', category: 'motorcycles', tag: 'Legend', image: 'https://s7ap1.scene7.com/is/image/hmcl/splendorplus_xtec_2.0?fmt=webp-alpha' },
    { title: 'Xoom 160 All-Terrain Maxi Scooter', category: 'adventure', tag: 'Maxi Touring', image: 'https://s7ap1.scene7.com/is/image/hmcl/xoom_160-1?fmt=webp-alpha' },
    { title: 'Xtreme 125R Sprint-EBT Action', category: 'motorcycles', tag: 'Performance 125', image: 'https://s7ap1.scene7.com/is/image/hmcl/xtreme-new-05?fmt=webp-alpha' },
    { title: 'Pleasure+ XTEC Jubilant Yellow', category: 'scooters', tag: 'Family Comfort', image: 'https://s7ap1.scene7.com/is/image/hmcl/Pleasure-plus-xtec-nav?fmt=webp-alpha' },
  ];

  const filteredItems = galleryItems.filter((item) => filter === 'all' || item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Photo & Media Gallery' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" /> Official Visual Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Hero Vehicle Media Gallery
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Explore high-resolution studio cutouts, dynamic trail photography, and lifestyle highlights across the Hero motorcycle and scooter lineup.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-200">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'motorcycles', label: 'Motorcycles' },
            { id: 'scooters', label: 'Scooters' },
            { id: 'adventure', label: 'Adventure & Touring' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#ee2326] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-sm border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full p-6 flex items-center justify-center bg-gradient-to-b from-gray-50 to-neutral-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/placeholder-bike.svg';
                  }}
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black/80 text-white px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>

              <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase text-gray-900 tracking-tight">{item.title}</h4>
                <Button to="/book-test-ride" variant="ghost" size="sm" className="p-1 text-[#ee2326]">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
