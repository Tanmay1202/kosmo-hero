import React from 'react';
import { MapPin, Phone, Clock, CheckCircle2, Navigation } from 'lucide-react';
import { Branch } from '../../types/branch';
import { Badge } from './Badge';

interface BranchCardProps {
  branch: Branch;
}

export const BranchCard: React.FC<BranchCardProps> = ({ branch }) => {
  const primaryPhone = branch.phoneNumbers[0];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`;

  return (
    <div
      className={`bg-white rounded-sm border ${
        branch.isHeadBranch
          ? 'border-[#ee2326] ring-1 ring-[#ee2326]/20'
          : branch.isUpcoming
          ? 'border-amber-300 ring-1 ring-amber-400/20 bg-amber-50/15'
          : 'border-gray-200'
      } shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            {branch.isHeadBranch && <Badge variant="red" className="mb-2">Head Branch &amp; Flagship 3S</Badge>}
            {branch.isUpcoming && (
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-sm mb-2">
                Upcoming Dealership • Opening Soon
              </span>
            )}
            <h3 className="text-xl font-black uppercase tracking-tight text-gray-900">{branch.name}</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{branch.title}</p>
          </div>
          <span
            className={`text-xs font-black uppercase px-2 py-1 rounded ${
              branch.isUpcoming ? 'text-amber-800 bg-amber-100' : 'text-[#ee2326] bg-red-50'
            }`}
          >
            {branch.isUpcoming ? 'Opening Soon' : branch.city}
          </span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2.5 text-xs text-gray-600 mt-4 leading-relaxed">
          <MapPin className="w-4 h-4 text-[#ee2326] shrink-0 mt-0.5" />
          <span>{branch.address}</span>
        </div>

        {/* Working Hours */}
        <div className="flex items-center gap-2.5 text-xs text-gray-600 mt-2">
          <Clock className="w-4 h-4 text-gray-400 shrink-0" />
          <span>{branch.hours}</span>
        </div>

        {/* Facilities Chips */}
        <div className="mt-4">
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-2">
            Branch Facilities & Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {branch.facilities.map((fac, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{fac}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2">
        <a
          href={`tel:${primaryPhone.replace(/[^0-9+]/g, '')}`}
          className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm ${
            branch.isUpcoming ? 'bg-amber-600 hover:bg-amber-700' : 'bg-[#181818] hover:bg-[#303030]'
          } text-white text-xs font-bold uppercase tracking-wider transition-colors`}
        >
          <Phone className="w-3.5 h-3.5 text-white" />
          <span>{branch.isUpcoming ? 'Enquire Early' : 'Call'}</span>
        </a>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-sm border border-gray-300 text-gray-800 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-blue-600" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};
