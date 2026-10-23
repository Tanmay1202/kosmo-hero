import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { Award, ShieldCheck, HeartHandshake, UserCheck, CheckCircle2, Phone, MapPin, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">
              Kosmo Dealership Group • Punjab
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              About Kosmo Hero
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Punjab’s premier destination for Hero MotoCorp two-wheelers. Dedicated to delivering automotive excellence, transparent pricing, certified after-sales care, and lifelong customer relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Managing Director Message Section (from Kosmo reference) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* MD Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-neutral-900 rounded-sm p-8 text-center text-white border-2 border-neutral-800 shadow-xl relative overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-[#181818] border-2 border-[#ee2326] text-[#ee2326] flex items-center justify-center font-black text-3xl uppercase mx-auto mb-4">
                  RA
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Mr. Raghav Ahuja</h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#ee2326] mt-1">
                  Managing Director
                </div>
                <div className="text-xs text-gray-400 mt-0.5">Kosmo Dealership Network</div>

                <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-gray-400 space-y-1">
                  <div>Kosmo Hero Motors Punjab</div>
                  <div className="text-[#ee2326] font-semibold">customercare@kosmohero.in</div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#ee2326]/40 -z-10 rounded-sm"></div>
            </div>
          </div>

          {/* Message Text */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">
              Leadership Address
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">
              Message from our Managing Director
            </h2>

            <div className="w-16 h-1 bg-[#ee2326]"></div>

            <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed font-light italic bg-gray-50 p-6 rounded-sm border-l-4 border-[#ee2326]">
              &quot;At Kosmo Hero, our mission is to provide an unparalleled two-wheeler automotive experience. We believe that buying a vehicle is more than just a transaction; it&apos;s the beginning of a lifelong relationship. Our state-of-the-art flagship dealership in Jalandhar and our branches across Ludhiana, Dasuya, and Hoshiarpur are designed to offer you comfort, transparency, and a premium environment as you explore the safest, most efficient, and most technologically advanced motorcycles and scooters in India.&quot;
            </blockquote>

            <p className="text-xs font-bold text-gray-800 uppercase tracking-wider">
              — Mr. Raghav Ahuja, Managing Director
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Button to="/dealer-locator" variant="primary" size="md">
                <span>Visit Our Showrooms</span>
              </Button>
              <Button to="/contact-us" variant="secondary" size="md">
                <span>Connect With Leadership</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Heritage: Hero MotoCorp & Kosmo */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">World&apos;s No. 1</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mt-1 mb-4">
                Hero MotoCorp Heritage
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Hero MotoCorp has been the world&apos;s largest two-wheeler manufacturer for over 23 consecutive years, with over 115 million happy customers across 47+ countries. Pioneering ground-breaking technologies like i3S (Idle Stop-Start System), xSens Programmed Fuel Injection, and advanced Sprint-EBT engines, Hero defines the heartbeat of Indian mobility.
              </p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ee2326]" />
                  <span>Over 115 Million Two-Wheelers Manufactured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ee2326]" />
                  <span>State-of-the-art Centre of Innovation &amp; Technology (CIT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ee2326]" />
                  <span>Global R&amp;D Tech Centre Germany (TCG)</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">Punjab Dealership Network</span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-gray-900 mt-1 mb-4">
                The Kosmo Dealership Legacy
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                The Kosmo Dealership Group represents automotive leadership in Punjab. Operating flagship sales, workshop service, and genuine spare parts facilities across Jalandhar, Ludhiana, Dasuya, and Hoshiarpur, Kosmo is known for certified technicians, fast loan processing, and high Customer Satisfaction Index (CSI) scores.
              </p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Over 50,000 Satisfied Riders in Punjab</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Computerized Diagnostic Workshop Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Same-Day Spot Financing via Hero FinCorp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Strip */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          title="The Values That Power"
          highlight="Our Dealership"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="p-6 bg-white rounded-sm border border-gray-200 shadow-xs">
            <Award className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Customer First</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every decision at our showrooms and workshop desks prioritizes customer transparency, comfort, and safety.
            </p>
          </div>

          <div className="p-6 bg-white rounded-sm border border-gray-200 shadow-xs">
            <ShieldCheck className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">OEM Authenticity</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              100% genuine Hero spare parts, certified 4T Plus lubricants, and manufacturer-guaranteed warranty protection.
            </p>
          </div>

          <div className="p-6 bg-white rounded-sm border border-gray-200 shadow-xs">
            <HeartHandshake className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Honest Dealings</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Zero hidden charges, transparent trade-in valuations with Hero Sure, and clear interest breakdowns.
            </p>
          </div>

          <div className="p-6 bg-white rounded-sm border border-gray-200 shadow-xs">
            <Sparkles className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Continuous Innovation</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Digital 360° vehicle configurators, online service appointment booking, and instant WhatsApp customer service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
