import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FileText } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#181818] text-white py-12 lg:py-16 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" /> Dealership Policies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Last Updated: October 2026 • Kosmo Dealership Group
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">1. Website Use &amp; Intellectual Property</h2>
          <p>
            This website is operated by Kosmo Hero Motors as an authorized multi-branch dealership partner of Hero MotoCorp Ltd. All logos, vehicle model names, trademarks, and official product imagery are the intellectual property of Hero MotoCorp Ltd.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">2. Pricing &amp; Specifications Disclaimer</h2>
          <p>
            Prices published on this website represent indicative Ex-Showroom figures in Indian Rupees (₹). On-road prices, road taxes (RTO), mandatory third-party insurance, dealer handling, and local Punjab municipal charges will vary. Formal binding quotations are issued exclusively at showroom branches.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">3. Test Ride Eligibility</h2>
          <p>
            Test ride participants must hold a valid, unexpired two-wheeler driving license issued by a competent Indian transport authority. Protective helmets are mandatory during all test rides. The dealership reserves the right to decline or reschedule test rides in the event of inclement weather or licensing non-compliance.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">4. Workshop Bookings &amp; Estimates</h2>
          <p>
            Online service slots are subject to confirmation by the branch workshop manager. Formal repair estimates are produced only upon physical inspection of the motorcycle or scooter on a diagnostic lift.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">5. Governing Law &amp; Jurisdiction</h2>
          <p>
            Any disputes arising from the use of this website or commercial transactions at the dealership shall be subject to the exclusive jurisdiction of the competent courts in Jalandhar, Punjab, India.
          </p>
        </section>
      </div>
    </div>
  );
};
