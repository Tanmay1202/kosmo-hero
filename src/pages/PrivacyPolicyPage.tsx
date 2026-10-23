import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { Shield } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#181818] text-white py-12 lg:py-16 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> Customer Data Protection
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-gray-400 mt-2">
              Last Updated: October 2026 • Kosmo Dealership Group
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">1. Introduction</h2>
          <p>
            Kosmo Hero Motors (&quot;we&quot;, &quot;our&quot;, or &quot;the Dealership&quot;) respects the privacy of our customers and website visitors. This Privacy Policy outlines our procedures regarding the collection, use, and disclosure of personal data submitted when exploring two-wheelers, requesting test rides, booking service appointments, or inquiring about finance and vehicle exchange.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">2. Information We Collect</h2>
          <p>We collect information you explicitly provide to us when submitting forms on this website, including:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Full Name and contact details (mobile phone number and email address).</li>
            <li>Vehicle preferences, model variants of interest, and preferred dealership branch.</li>
            <li>Registration details (for workshop service appointments).</li>
            <li>Trade-in vehicle information (for Hero Sure exchange valuation).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">3. How Your Information is Utilized</h2>
          <p>Your details are utilized strictly for dealership operations:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>To schedule and confirm test rides with your designated sales executive.</li>
            <li>To issue service booking reference tokens and open workshop job cards.</li>
            <li>To facilitate retail loan quotations through partner financial institutions (Hero FinCorp).</li>
            <li>To dispatch requested quotes and transaction updates directly via WhatsApp or phone call.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">4. Third-Party Sharing &amp; Data Security</h2>
          <p>
            We do not sell or rent personal information to unauthorized third parties. Information may only be shared with Hero MotoCorp India and accredited financial partners (e.g. Hero FinCorp) solely to fulfill vehicle registration, warranty claims, and loan processing.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-black uppercase text-gray-900 mb-2">5. Contact Our Privacy Officer</h2>
          <p>
            If you have questions regarding your data or wish to update your records, please contact us at:
            <br />
            <strong>Email:</strong> customercare@kosmohero.in | <strong>Phone:</strong> +91 92899-22739
            <br />
            <strong>Address:</strong> Kosmo Hero Motors, G.T. Road, Jalandhar, Punjab - 144001, India.
          </p>
        </section>
      </div>
    </div>
  );
};
