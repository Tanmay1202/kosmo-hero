import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { OFFERS } from '../data/offers';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Sparkles, Calendar, CheckCircle, ArrowRight, PhoneCall } from 'lucide-react';

export const OffersPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Offers & Promotions' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Festive Specials &amp; Retail Benefits
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Current Offers &amp; Promotions
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Discover official Hero MotoCorp retail benefits, exchange bonanzas, low down payment finance schemes, and corporate discounts across our Punjab dealerships.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-sm border border-gray-200 shadow-sm hover:shadow-lg transition-all p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="red">{offer.badge}</Badge>
                  <span className="text-xs font-bold uppercase text-[#ee2326] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {offer.validity}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 mt-2">
                  {offer.title}
                </h3>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                  {offer.subtitle}
                </div>

                <div className="my-5 p-4 bg-red-50/50 rounded-sm border border-red-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Total Benefit</span>
                  <span className="text-2xl font-black text-[#ee2326] font-mono">{offer.benefitAmount}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  {offer.description}
                </p>

                {/* Applicable models */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1.5">
                    Applicable Two-Wheelers:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {offer.applicableModels.map((mod, i) => (
                      <span key={i} className="text-xs font-bold uppercase bg-gray-100 text-gray-800 px-2.5 py-1 rounded-sm">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div className="space-y-1 text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                  {offer.terms.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex gap-3">
                <Button to="/book-test-ride" variant="primary" size="md" className="flex-1">
                  <PhoneCall className="w-3.5 h-3.5 mr-1" />
                  <span>Claim Offer &amp; Book Ride</span>
                </Button>
                <Button to="/contact-us" variant="secondary" size="md">
                  <span>Enquire</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
