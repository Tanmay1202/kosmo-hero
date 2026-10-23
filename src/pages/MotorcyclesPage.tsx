import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { MOTORCYCLES } from '../data/motorcycles';
import { VehicleCard } from '../components/common/VehicleCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { MotorcycleCategory } from '../types/vehicle';
import { Filter, Search, PhoneCall } from 'lucide-react';
import { Button } from '../components/common/Button';

export const MotorcyclesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'cc-desc'>('featured');

  const categories = ['All', 'Practical Commuter', 'Executive', 'Performance', 'Adventure', 'Performance Sport'];

  // Filter and sort
  const filteredBikes = MOTORCYCLES.filter((bike) => {
    const matchesCategory = selectedCategory === 'All' || bike.category === selectedCategory;
    const matchesSearch =
      bike.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    const priceA = parseInt(a.startingPrice.replace(/[^0-9]/g, '')) || 0;
    const priceB = parseInt(b.startingPrice.replace(/[^0-9]/g, '')) || 0;

    if (sortBy === 'price-asc') return priceA - priceB;
    if (sortBy === 'price-desc') return priceB - priceA;
    if (sortBy === 'cc-desc') return b.displacementCc - a.displacementCc;
    return 0;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-12 lg:py-16 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Motorcycles' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">
              Complete Motorcycle Lineup • 18 Models
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Hero Motorcycles
            </h1>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
              Explore India’s favorite range of motorcycles engineered with world-class i3S technology, xSens Programmed Fuel Injection, Single/Dual Channel ABS, and exceptional fuel economy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#ee2326] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models..."
                className="w-full pl-9 pr-3 py-1.5 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
              />
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full sm:w-auto px-3 py-1.5 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white cursor-pointer font-medium text-gray-700"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="cc-desc">Displacement (cc)</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex justify-between items-center text-xs text-gray-500 font-semibold uppercase tracking-wider">
          <span>Showing {filteredBikes.length} of {MOTORCYCLES.length} Motorcycles</span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-[#ee2326] hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Motorcycle Grid */}
        {filteredBikes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBikes.map((bike) => (
              <VehicleCard key={bike.id} vehicle={bike} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-gray-50 rounded-sm p-8 border border-gray-200">
            <h3 className="text-xl font-bold uppercase text-gray-800">No Motorcycles Found</h3>
            <p className="text-xs text-gray-500 mt-2">Try adjusting your category or search query.</p>
            <Button variant="outline" size="sm" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="mt-4">
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Bottom Booking Assistance */}
        <div className="mt-16 p-8 bg-neutral-900 text-white rounded-sm border-l-4 border-[#ee2326] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              Not sure which Hero motorcycle fits your lifestyle?
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Speak with a certified Kosmo Hero sales specialist for personalised variant comparison, mileage reports, and spot financing.
            </p>
          </div>
          <Button to="/book-test-ride" variant="primary" size="md">
            <PhoneCall className="w-4 h-4 mr-1" />
            <span>Book Consultation &amp; Test Ride</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
