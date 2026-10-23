import React from 'react';
import { Shield, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';

export const JoyrideBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 rounded-sm border-l-8 border-[#ee2326] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          {/* Subtle Background Glow */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#ee2326]/10 rounded-full filter blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#ee2326]/20 text-[#ee2326] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hero After-Sales Assurance</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                5-Year Warranty &amp; Hero Joyride Annual Maintenance
              </h2>

              <p className="text-sm text-gray-300 max-w-2xl leading-relaxed font-light">
                Every Hero motorcycle comes with a 5-Year / 70,000 km manufacturer warranty, and every scooter is backed by a 5-Year / 50,000 km warranty. Enroll in the Hero Joyride Annual Package for discounted labor, complimentary foam washes, and 5% off genuine parts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ee2326] shrink-0" />
                  <span>5-Year OEM Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ee2326] shrink-0" />
                  <span>Hero Genuine 4T Plus Oil</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ee2326] shrink-0" />
                  <span>90-Min Express Service</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
              <Button to="/book-service" variant="primary" size="lg" className="w-full sm:w-auto lg:w-full">
                <Wrench className="w-4 h-4 mr-1" />
                <span>Book Service Online</span>
              </Button>
              <Button to="/service" variant="secondary" size="lg" className="w-full sm:w-auto lg:w-full border border-neutral-700">
                <Shield className="w-4 h-4 mr-1" />
                <span>Explore Joyride Plans</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
