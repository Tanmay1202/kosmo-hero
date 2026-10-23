import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { TestRideForm } from '../components/forms/TestRideModal';
import { Shield, Sparkles, CheckCircle, Phone } from 'lucide-react';
import { BRANCHES } from '../data/branches';

export const BookTestRidePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const modelParam = searchParams.get('model') || '';

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-12 lg:py-16 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Book a Test Ride' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> VIP Showroom &amp; Doorstep Experience
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Book Your Hero Test Ride
            </h1>
            <p className="text-sm text-gray-300 mt-2 font-light">
              Experience the power, comfort, and advanced features of any Hero motorcycle or scooter at your nearest Kosmo branch in Punjab.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TestRideForm initialModelSlug={modelParam} />

        {/* Requirements Box */}
        <div className="mt-10 p-6 bg-gray-50 rounded-sm border border-gray-200">
          <h4 className="text-sm font-black uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#ee2326]" />
            What to bring on your test ride day:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Original Valid Driving License</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Protective Helmet (or borrowed from showroom)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Comfortable riding shoes / footwear</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
