import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FinanceCalculator } from '../components/forms/FinanceCalculator';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Calculator, ShieldCheck, Zap, FileText, CheckCircle2, Clock, Phone } from 'lucide-react';

export const FinancePage: React.FC = () => {
  const documents = [
    { title: 'Identity Proof', desc: 'Aadhaar Card, Passport, or Voter ID' },
    { title: 'Address Proof', desc: 'Electricity Bill, Ration Card, or Bank Passbook' },
    { title: 'Income Proof', desc: 'Last 3 Months Bank Statement or Salary Slip' },
    { title: 'Photographs', desc: '2 Recent Passport Size Colored Photographs' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Retail Finance & EMI' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> Hero FinCorp DigiFin
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Two-Wheeler Finance &amp; Easy EMI
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Make your dream Hero ride a reality. Benefit from fast 15-minute spot loan approval, minimal documentation, flexible tenures up to 48 months, and competitive festive interest rates.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Finance Benefits Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Clock className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">15-Min Spot Sanction</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Paperless digital verification with immediate credit decision at our Punjab finance desks.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Zap className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Down Payment from ₹ 4,999</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Drive home your preferred motorcycle with minimal upfront capital and budget-friendly installments.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <FileText className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Minimal Paperwork</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Zero hassle: simply present your Aadhaar and bank account verification for instant approval.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <ShieldCheck className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Flexible Tenures</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Choose from 12, 24, 36, or 48 month payback periods designed to match your monthly cash flow.
            </p>
          </div>
        </div>

        {/* Interactive EMI Calculator */}
        <div className="mb-16">
          <FinanceCalculator />
        </div>

        {/* Documentation Checklist */}
        <div className="bg-neutral-900 text-white rounded-sm p-8 sm:p-12 border-l-4 border-[#ee2326]">
          <SectionHeading
            badge="Checklist"
            title="Documents Required For Spot Loan Approval"
            subtitle="Carry these essential documents to our Jalandhar, Ludhiana, Dasuya, or Hoshiarpur branches for fast-track processing."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-neutral-800 p-5 rounded-sm border border-neutral-700">
                <CheckCircle2 className="w-5 h-5 text-[#ee2326] mb-2" />
                <h4 className="text-sm font-bold uppercase text-white mb-1">{doc.title}</h4>
                <p className="text-xs text-gray-400">{doc.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-300">
              Need loan assistance? Speak directly to our senior finance advisor.
            </span>
            <a
              href="tel:+917045169141"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ee2326] text-white font-bold text-xs uppercase rounded-sm hover:bg-[#d30000]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Finance Desk: +91 70451-69141</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
