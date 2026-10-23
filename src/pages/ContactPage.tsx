import React from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { ContactForm } from '../components/forms/ContactForm';
import { BRANCHES } from '../data/branches';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Navigation } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> Direct Dealership Support
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Contact Kosmo Hero
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Get in touch with our leadership, sales advisors, or service desk. Whether you have questions about current models, workshop scheduling, or exchange bonuses, our team is at your service.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Head Office & Branch Directory (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-neutral-900 text-white p-6 sm:p-8 rounded-sm border-l-4 border-[#ee2326]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ee2326] block">
                Headquarters &amp; Flagship
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-1">
                Kosmo Hero Head Branch
              </h3>
              
              <div className="space-y-3 mt-6 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#ee2326] shrink-0 mt-0.5" />
                  <span>G.T Road, Near Lamba Pind Chowk, Jalandhar, Punjab - 144001</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#ee2326] shrink-0" />
                  <a href="mailto:customercare@kosmohero.in" className="hover:text-white">
                    customercare@kosmohero.in
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#ee2326] shrink-0" />
                  <a href="tel:+919289922739" className="font-bold text-white hover:text-[#ee2326]">
                    +91 92899-22739
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#ee2326] shrink-0" />
                  <span>Monday - Sunday: 09:30 AM - 07:00 PM</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <ShieldAlert className="w-4 h-4 text-[#ee2326]" />
                  <span>Emergency RSA:</span>
                </div>
                <a href="tel:18002097979" className="font-bold text-white hover:text-[#ee2326]">
                  1800 209 7979
                </a>
              </div>
            </div>

            {/* Other Branches Quick List */}
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-900 mb-3">
                Other Branches in Jalandhar
              </h4>
              <div className="space-y-3">
                {BRANCHES.filter((b) => !b.isHeadBranch).map((b) => (
                  <div key={b.id} className="p-3 bg-white rounded border border-gray-200 text-xs">
                    <div className="font-bold text-gray-900 uppercase flex items-center justify-between">
                      <span>{b.name}</span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          b.isUpcoming ? 'text-amber-800 bg-amber-100' : 'text-[#ee2326] bg-red-50'
                        }`}
                      >
                        {b.isUpcoming ? 'Opening Soon' : b.city}
                      </span>
                    </div>
                    <div className="text-gray-500 text-[11px] truncate mt-1">{b.address}</div>
                    <div className="mt-2 flex items-center justify-between pt-2 border-t border-gray-100 text-[11px]">
                      <a href={`tel:${b.phoneNumbers[0].replace(/[^0-9+]/g, '')}`} className="font-bold text-gray-800 hover:text-[#ee2326]">
                        {b.phoneNumbers[0]}
                      </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                      >
                        <Navigation className="w-3 h-3" />
                        <span>Map</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
