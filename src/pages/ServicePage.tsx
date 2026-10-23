import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SERVICE_SCHEDULE, JOYRIDE_BENEFITS, WARRANTY_DETAILS } from '../data/services';
import { ServiceBookingForm } from '../components/forms/ServiceBookingForm';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Wrench, Shield, CheckCircle2, Clock, Sparkles, Award, Phone } from 'lucide-react';

export const ServicePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service & Maintenance' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" /> Certified After-Sales Support
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Authorized Hero Service &amp; Care
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Keep your two-wheeler operating at peak power and efficiency. Our factory-trained master technicians, computerized diagnostic bays, and 100% genuine Hero spare parts safeguard your warranty.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Service Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Shield className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">5-Year Warranty Protection</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Timely servicing at our authorized workshops keeps your full 5-year OEM warranty intact.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Wrench className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Hero Certified Mechanics</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Trained on modern fuel injection (FI), ABS electronics, and computerized scan tools.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Award className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">100% Genuine 4T Plus Oil</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We exclusively use OEM-formulated Hero 4T Plus engine lubricants for engine longevity.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Clock className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">90-Minute Express Bays</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Fast-track periodic servicing while you relax in our air-conditioned customer lounge.
            </p>
          </div>
        </div>

        {/* Hero Joyride Section */}
        <div className="mb-16 bg-neutral-900 text-white rounded-sm p-8 sm:p-12 border-l-4 border-[#ee2326]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Annual Maintenance Contract (AMC)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
              Hero Joyride Program
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 font-light">
              Join millions of smart riders with India’s most rewarding annual maintenance plan. Available for all Hero motorcycles and scooters across our Punjab workshops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {JOYRIDE_BENEFITS.map((b, idx) => (
              <div key={idx} className="bg-neutral-800 p-5 rounded-sm border border-neutral-700">
                <CheckCircle2 className="w-5 h-5 text-[#ee2326] mb-2" />
                <h4 className="text-xs font-bold uppercase text-white mb-1">{b.title}</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Schedule Table */}
        <div className="mb-16">
          <SectionHeading
            badge="Recommended Maintenance"
            title="Official Hero Scheduled Service Intervals"
            subtitle="Adhere to the prescribed maintenance schedule to ensure maximum fuel economy, smooth throttle response, and warranty compliance."
          />

          <div className="bg-white rounded-sm border border-gray-200 overflow-x-auto shadow-xs">
            <table className="w-full text-xs text-left min-w-[600px]">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Service</th>
                  <th className="py-3.5 px-4">Odometer Interval</th>
                  <th className="py-3.5 px-4">Time Interval</th>
                  <th className="py-3.5 px-4">Type</th>
                  <th className="py-3.5 px-4">Standard Inspection Items</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SERVICE_SCHEDULE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="py-3.5 px-4 font-bold text-gray-900">{item.serviceNumber}</td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-[#ee2326]">{item.intervalKm}</td>
                    <td className="py-3.5 px-4 text-gray-600">{item.intervalDays}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800">
                        {item.type} Labor
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">{item.workDone.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 mt-2">
            *After 5th service, periodic paid maintenance is recommended every 3,000 km or 90 days (whichever occurs earlier).
          </p>
        </div>

        {/* Embedded Booking Form */}
        <div className="max-w-3xl mx-auto">
          <ServiceBookingForm />
        </div>
      </div>
    </div>
  );
};
