import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ShieldCheck, Award, Wrench, CheckCircle2, MessageSquare, Send, Phone } from 'lucide-react';
import { BRANCHES } from '../data/branches';

export const PartsAccessoriesPage: React.FC = () => {
  const [partQuery, setPartQuery] = useState('');
  const [modelName, setModelName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('jalandhar-main');
  const [isSent, setIsSent] = useState(false);

  const accessories = [
    { title: 'Hero Certified Helmets', desc: 'ISI & DOT approved lightweight aerodynamic safety helmets.' },
    { title: 'Heavy Duty Stainless Crash Guards', desc: 'Protects engine casing and legs in case of an accidental slide.' },
    { title: 'All-Weather Waterproof Mobile Mount', desc: 'Secure handlebar mobile mount with 360-degree rotation.' },
    { title: 'Contoured Premium Seat Covers', desc: 'Heat-resistant dual-tone cushioned covers with water repellent fabric.' },
    { title: 'Durable Bike Body Covers', desc: 'UV-resistant, waterproof outdoor protection against dust and rain.' },
    { title: 'Hero 4T Plus Synthetic Engine Oil', desc: 'OEM grade 10W-30 formulation engineered specifically for Hero motors.' },
  ];

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const getWhatsAppPartsUrl = () => {
    const text = `Hello Kosmo Hero Spare Parts Desk,\nI would like to enquire about Genuine Parts / Accessories.\n\n*Customer:* ${customerName}\n*Phone:* ${phone}\n*Vehicle:* ${modelName}\n*Parts Requested:* ${partQuery}`;
    return `https://wa.me/917045169141?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Parts & Accessories' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">
              100% OEM Authenticity Guaranteed
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Hero Genuine Parts &amp; Accessories
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Always insist on Hero Genuine Parts (HGP) and Hero 4T Plus lubricants. Every part is manufactured under stringent quality controls to ensure safety, performance, and durability.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why Genuine Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <ShieldCheck className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">OEM Warranty Validated</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Non-genuine counterfeit parts void your 5-year manufacturer warranty. Only HGP guarantees longevity.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Award className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Precision Engineering</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Engineered to exact micrometer tolerances specified by Hero R&amp;D for seamless compatibility.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <Wrench className="w-8 h-8 text-[#ee2326] mb-3" />
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Instant Availability</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Over 10,000 line items stocked across Jalandhar, Ludhiana, Dasuya, and Hoshiarpur spare parts stores.
            </p>
          </div>
        </div>

        {/* Official Accessories Grid */}
        <div className="mb-16">
          <SectionHeading
            badge="Personalize Your Ride"
            title="Hero Official Two-Wheeler Accessories"
            subtitle="Engineered for perfect fitment, enhanced styling, rider comfort, and maximum protection."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((acc, idx) => (
              <div key={idx} className="p-6 bg-white rounded-sm border border-gray-200 shadow-2xs hover:border-[#ee2326] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#ee2326] mb-3" />
                <h4 className="text-sm font-black uppercase text-gray-900 mb-1">{acc.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{acc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Parts Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-sm border border-gray-200">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">Parts Store Assistance</span>
          <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-1 mb-2">
            Inquire or Order Spare Parts
          </h3>
          <p className="text-xs text-gray-600 mb-6">
            Looking for a specific brake shoe, chain sprocket, fairing, mirror, or battery? Submit your request and our parts team will confirm stock and pricing.
          </p>

          {isSent ? (
            <div className="text-center py-6">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-xl font-bold uppercase text-gray-900">Enquiry Received</h4>
              <p className="text-xs text-gray-600 mt-1 mb-4">Our parts counter executive will reach out to you shortly.</p>
              <a
                href={getWhatsAppPartsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-[#25D366] text-white font-bold text-xs uppercase"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp Parts Counter</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleOrder} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Balwinder Singh"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="9876543210"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Vehicle Model &amp; Year *</label>
                  <input
                    type="text"
                    required
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    placeholder="e.g. Karizma XMR (2024)"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Nearest Store Branch *</label>
                  <select
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Parts or Accessories Needed *</label>
                <textarea
                  required
                  rows={3}
                  value={partQuery}
                  onChange={(e) => setPartQuery(e.target.value)}
                  placeholder="e.g. Front brake disc pads, engine oil filter, original left rear-view mirror..."
                  className="w-full p-2.5 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="md" className="w-full">
                <Send className="w-3.5 h-3.5 mr-1" />
                <span>Submit Parts Enquiry</span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
