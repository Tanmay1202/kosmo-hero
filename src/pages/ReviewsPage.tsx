import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { REVIEWS } from '../data/reviews';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Star, MessageSquare, ShieldCheck, CheckCircle2, UserCheck, PhoneCall } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Customer Reviews' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-[#ee2326]" /> Verified Customer Experiences
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Customer Reviews &amp; Testimonials
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Discover what riders across Jalandhar have to say about purchasing and servicing their Hero motorcycles and scooters with Kosmo Hero across our 3 branches.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Rating Metrics Card */}
        <div className="p-8 bg-gray-50 rounded-sm border border-gray-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center sm:text-left">
              <div className="text-5xl font-black text-gray-900">4.9</div>
              <div className="flex items-center gap-1 text-amber-400 mt-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mt-1">
                Average Overall Rating
              </span>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden sm:block"></div>
            <div className="text-xs text-gray-600 max-w-md hidden sm:block">
              Based on over 50,000 satisfied riders across our Punjab dealership network and Google Reviews.
            </div>
          </div>

          <Button to="/contact-us" variant="primary" size="md">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>Leave Your Review</span>
          </Button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase text-[#ee2326] bg-red-50 px-2 py-0.5 rounded">
                    {rev.purchasedModel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-6 font-normal">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-gray-900 uppercase tracking-tight">{rev.author}</div>
                  <div className="text-gray-500 text-[11px] font-medium">{rev.location}, Punjab</div>
                </div>
                <span className="text-[10px] text-gray-400 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
