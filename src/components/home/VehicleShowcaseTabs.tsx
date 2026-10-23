import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MOTORCYCLES } from '../../data/motorcycles';
import { SCOOTERS } from '../../data/scooters';
import { VehicleCard } from '../common/VehicleCard';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const VehicleShowcaseTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'commuter' | 'executive' | 'performance' | 'scooters'>('commuter');

  const commuterBikes = MOTORCYCLES.filter((m) => m.category === 'Practical Commuter').slice(0, 4);
  const executiveBikes = MOTORCYCLES.filter((m) => m.category === 'Executive' || m.slug === 'xtreme-125r').slice(0, 4);
  const performanceBikes = MOTORCYCLES.filter((m) => m.category === 'Performance' || m.category === 'Adventure' || m.category === 'Performance Sport').slice(0, 4);
  const scootersList = SCOOTERS.slice(0, 4);

  const getVehicles = () => {
    switch (activeTab) {
      case 'commuter':
        return commuterBikes;
      case 'executive':
        return executiveBikes;
      case 'performance':
        return performanceBikes;
      case 'scooters':
        return scootersList;
      default:
        return commuterBikes;
    }
  };

  const currentVehicles = getVehicles();

  return (
    <section className="py-16 md:py-20 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            badge="Discover The Lineup"
            title="Explore Two-Wheelers Built For"
            highlight="Every Journey"
            subtitle="Explore high-mileage commuters, race-inspired performance streetfighters, all-terrain adventure tourers, and stylish family scooters."
            className="mb-0 max-w-xl"
          />

          <div className="mt-6 md:mt-0 flex gap-2">
            <Button to="/motorcycles" variant="secondary" size="sm">
              <span>All Bikes (18)</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
            <Button to="/scooters" variant="outline" size="sm">
              <span>All Scooters (7)</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('commuter')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-t-sm whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
              activeTab === 'commuter'
                ? 'border-[#ee2326] text-[#ee2326] bg-white'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Practical Commuters (100cc)
          </button>

          <button
            onClick={() => setActiveTab('executive')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-t-sm whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
              activeTab === 'executive'
                ? 'border-[#ee2326] text-[#ee2326] bg-white'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Executive 125cc Series
          </button>

          <button
            onClick={() => setActiveTab('performance')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-t-sm whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
              activeTab === 'performance'
                ? 'border-[#ee2326] text-[#ee2326] bg-white'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Performance & Adventure (160-250cc)
          </button>

          <button
            onClick={() => setActiveTab('scooters')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-t-sm whitespace-nowrap transition-colors cursor-pointer border-b-2 ${
              activeTab === 'scooters'
                ? 'border-[#ee2326] text-[#ee2326] bg-white'
                : 'border-transparent text-gray-600 hover:text-black'
            }`}
          >
            Modern Scooters (110-160cc)
          </button>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};
