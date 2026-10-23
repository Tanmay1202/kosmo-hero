import React from 'react';
import { Award, ShieldCheck, Wrench, CheckCircle, Zap } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const DealershipPillars: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Authorized Hero MotoCorp Dealership',
      description: 'Official manufacturer warranty, transparent pricing, and direct OEM certification across every vehicle sold.',
    },
    {
      icon: ShieldCheck,
      title: '4 Modern 3S Showrooms & Workshops',
      description: 'Full sales, service, and spare parts infrastructure across Jalandhar, Ludhiana, Dasuya, and Hoshiarpur.',
    },
    {
      icon: Wrench,
      title: 'Certified Master Technicians',
      description: 'Factory-trained mechanics using computerized diagnostic tools and 100% genuine Hero 4T Plus lubricants.',
    },
    {
      icon: Zap,
      title: '15-Minute Spot Loan Sanction',
      description: 'On-the-spot finance processing via Hero FinCorp with low down payment schemes and minimal paperwork.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Kosmo Hero Advantage"
          title="Why Punjab Riders Choose"
          highlight="Kosmo Hero"
          subtitle="Delivering trust, excellence, and seamless two-wheeler ownership across Punjab for thousands of satisfied customers."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div key={idx} className="p-6 rounded-sm bg-gray-50 border border-gray-100 hover:border-gray-300 transition-all group">
                <div className="w-12 h-12 rounded-sm bg-[#181818] text-[#ee2326] flex items-center justify-center mb-5 group-hover:bg-[#ee2326] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-2">
                  {pil.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {pil.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-14 p-8 bg-[#181818] text-white rounded-sm grid grid-cols-2 lg:grid-cols-4 gap-6 text-center border-l-4 border-[#ee2326]">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#ee2326]">50,000+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">Happy Two-Wheeler Riders</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white">4</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">Punjab Dealership Branches</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#ee2326]">90 Min</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">Express Service Delivery</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white">4.8 / 5</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">Google Customer Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
