import React from 'react';
import { Quote, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from '../common/Button';

export const MDQuoteSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-[#ee2326]/10 filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: MD Badge & Portrait representation */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-sm bg-neutral-800 border-2 border-neutral-700 flex flex-col items-center justify-center p-6 text-center shadow-2xl relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-neutral-700 text-[#ee2326] flex items-center justify-center font-black text-2xl uppercase mb-3">
                  RA
                </div>
                <div className="font-black text-lg uppercase tracking-tight text-white">Mr. Raghav Ahuja</div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#ee2326] mt-0.5">
                  Managing Director
                </div>
                <div className="text-[11px] text-gray-400 mt-1">Kosmo Dealership Group</div>

                <div className="absolute top-3 right-3 p-1 rounded bg-[#ee2326] text-white">
                  <UserCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#ee2326]/40 -z-10 rounded-sm"></div>
            </div>
          </div>

          {/* Right Column: MD's Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ee2326]">
              <Quote className="w-4 h-4" />
              <span>Leadership Vision</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
              &quot;Delivering Excellence, Trust & Lifelong Relationships Across Punjab&quot;
            </h2>

            <blockquote className="text-sm sm:text-base text-gray-300 leading-relaxed font-light italic border-l-2 border-[#ee2326] pl-4 sm:pl-6 my-4">
              &quot;At Kosmo Hero, our mission is to provide an unparalleled two-wheeler automotive experience. We believe that buying a motorcycle or scooter is more than just a transaction; it&apos;s the beginning of a lifelong relationship. Our state-of-the-art flagship dealership in Jalandhar and our expanded sales & service networks across Ludhiana, Dasuya, and Hoshiarpur are designed to offer you comfort, absolute transparency, and a premium environment as you explore the most reliable and advanced vehicles in India.&quot;
            </blockquote>

            <div className="pt-2 flex items-center gap-4">
              <Button to="/about" variant="primary" size="md">
                <span>Read Full Story & About Us</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button to="/dealer-locator" variant="ghost" size="md" className="text-white hover:text-[#ee2326] hover:bg-neutral-800">
                <span>Visit Our Showrooms</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
