import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { QuickActions } from '../components/home/QuickActions';
import { VehicleShowcaseTabs } from '../components/home/VehicleShowcaseTabs';
import { DealershipPillars } from '../components/home/DealershipPillars';
import { MDQuoteSection } from '../components/home/MDQuoteSection';
import { BranchPreview } from '../components/home/BranchPreview';
import { JoyrideBanner } from '../components/home/JoyrideBanner';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { REVIEWS } from '../data/reviews';
import { Star, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Promotional Slider */}
      <HeroSlider />

      {/* 2. Quick Action Tiles (overlapping slightly) */}
      <QuickActions />

      {/* 3. Explore Lineup Showcase with Tabs */}
      <VehicleShowcaseTabs />

      {/* 4. Why Choose Kosmo Hero (Dealership Pillars) */}
      <DealershipPillars />

      {/* 5. Managing Director's Message (Mr. Raghav Ahuja) */}
      <MDQuoteSection />

      {/* 6. Branch Locator & Punjab Network Preview */}
      <BranchPreview />

      {/* 7. Hero Joyride & Service Assurance Banner */}
      <JoyrideBanner />

      {/* 8. Customer Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <SectionHeading
              badge="Rider Testimonials"
              title="Stories From Our"
              highlight="Punjab Riders"
              subtitle="Read genuine experiences from customers who chose Kosmo Hero for their motorcycle and scooter purchases."
              className="mb-0 max-w-xl"
            />
            <Button to="/reviews" variant="secondary" size="sm" className="mt-4 md:mt-0">
              <span>Read All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-4">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-gray-900 uppercase tracking-tight">{rev.author}</div>
                    <div className="text-gray-500 text-[11px] font-medium">{rev.location}, Punjab</div>
                  </div>
                  <span className="text-[10px] font-bold uppercase text-[#ee2326] bg-red-50 px-2 py-0.5 rounded">
                    {rev.purchasedModel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Quick Conversion Banner */}
      <section className="bg-[#ee2326] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Ready to Test Ride Your Favorite Hero?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
              Visit any of our authorized showrooms in Jalandhar (Lamba Pind Chowk, Model House, Opp. Bus Stand, Kishangarh) or schedule a test ride today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/book-test-ride" variant="white" size="lg">
              <span>Book Test Ride Online</span>
            </Button>
            <Button to="/contact-us" variant="secondary" size="lg">
              <span>Contact Showroom</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
