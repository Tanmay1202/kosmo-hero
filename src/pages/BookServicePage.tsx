import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ServiceBookingForm } from '../components/forms/ServiceBookingForm';
import { ShieldCheck, PhoneCall, Clock, MapPin } from 'lucide-react';
import { BRANCHES } from '../data/branches';

export const BookServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-12 lg:py-16 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service', to: '/service' }, { label: 'Book Appointment' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">
              Authorized Hero Workshop
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Book a Service Appointment
            </h1>
            <p className="text-sm text-gray-300 mt-2">
              Reserve your slot online for scheduled periodic maintenance, express oil service, or accidental repairs across our Punjab network.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ServiceBookingForm />

        {/* Quick Workshop Phone Directory */}
        <div className="mt-12 p-6 bg-gray-50 rounded-sm border border-gray-200">
          <h4 className="text-sm font-black uppercase tracking-wider text-gray-900 mb-4">
            Workshop Direct Telephone Lines
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {BRANCHES.map((b) => (
              <div key={b.id} className="p-3 bg-white rounded border border-gray-200">
                <div className="font-bold text-gray-900 uppercase truncate">{b.name.replace('Kosmo Hero - ', '')}</div>
                <div className="text-gray-500 text-[11px] truncate mt-0.5">{b.address}</div>
                <a
                  href={`tel:${b.phoneNumbers[0].replace(/[^0-9+]/g, '')}`}
                  className="font-bold text-[#ee2326] hover:underline mt-2 inline-block font-mono"
                >
                  {b.phoneNumbers[0]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
