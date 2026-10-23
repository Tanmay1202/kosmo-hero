import React, { useState } from 'react';
import { BRANCHES } from '../../data/branches';
import { BranchCard } from '../common/BranchCard';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { ArrowRight, MapPin } from 'lucide-react';

export const BranchPreview: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState(BRANCHES[0].id);
  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <SectionHeading
            badge="Jalandhar Dealership Network"
            title="Visit Your Nearest"
            highlight="Kosmo Hero Branch"
            subtitle="Explore our modern showrooms, test-ride tracks, and certified service bays across strategic locations in Jalandhar."
            className="mb-0 max-w-xl"
          />

          <Button to="/dealer-locator" variant="secondary" size="sm" className="mt-6 md:mt-0">
            <span>View All Branches ({BRANCHES.length})</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* City Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchId(b.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedBranchId === b.id
                  ? 'bg-[#ee2326] text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{b.name.replace('Kosmo Hero - ', '')}</span>
              {b.isUpcoming && (
                <span className="text-[9px] px-1.5 py-0.2 bg-amber-200 text-amber-900 rounded font-bold">
                  Upcoming
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Display selected branch with high visual priority */}
        <div className="max-w-3xl">
          <BranchCard branch={activeBranch} />
        </div>
      </div>
    </section>
  );
};
