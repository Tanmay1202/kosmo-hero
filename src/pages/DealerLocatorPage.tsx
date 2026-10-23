import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { BRANCHES } from '../data/branches';
import { BranchCard } from '../components/common/BranchCard';
import { MapPin, Phone, Clock, ShieldAlert, Sparkles } from 'lucide-react';
import { Button } from '../components/common/Button';

export const DealerLocatorPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const cities = ['All', 'Jalandhar', 'Ludhiana', 'Dasuya', 'Hoshiarpur'];

  const filteredBranches = BRANCHES.filter((b) => {
    return selectedCity === 'All' || b.city === selectedCity;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-18 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Dealership Locator' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Punjab Authorized Network
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Find Your Nearest Branch
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Locate authorized Kosmo Hero showrooms and computerized service centers across Jalandhar, Ludhiana, Dasuya, and Hoshiarpur.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* City Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-gray-200">
          <span className="text-xs font-bold uppercase text-gray-500 mr-2 tracking-wider">
            Filter by City:
          </span>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCity === city
                  ? 'bg-[#ee2326] text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBranches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>

        {/* Emergency Assistance Callout */}
        <div className="mt-14 p-8 bg-neutral-900 text-white rounded-sm border-l-4 border-[#ee2326] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-neutral-800 text-[#ee2326] rounded-sm shrink-0">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                24x7 Roadside Assistance &amp; Towing Across Punjab
              </h3>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                Flat tyre, battery jump-start, emergency fuel assistance, or towing support — call our dedicated toll-free helpline any time of the day or night.
              </p>
            </div>
          </div>

          <a
            href="tel:18002097979"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ee2326] text-white font-black text-xs uppercase tracking-wider rounded-sm hover:bg-[#d30000] shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call Toll-Free: 1800 209 7979</span>
          </a>
        </div>
      </div>
    </div>
  );
};
