import React, { useState } from 'react';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { CheckCircle2, RefreshCw, MessageSquare, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { BRANCHES } from '../data/branches';
import { MOTORCYCLES } from '../data/motorcycles';
import { SCOOTERS } from '../data/scooters';

export const ExchangePage: React.FC = () => {
  const [currentMake, setCurrentMake] = useState('');
  const [currentModel, setCurrentModel] = useState('');
  const [manufacturingYear, setManufacturingYear] = useState('2020');
  const [targetVehicle, setTargetVehicle] = useState('Splendor+ XTEC 2.0');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('jalandhar-main');
  const [isValuated, setIsValuated] = useState(false);

  const allVehicles = [...MOTORCYCLES, ...SCOOTERS];

  const handleValuation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsValuated(true);
  };

  const getWhatsAppExchangeUrl = () => {
    const text = `Hello Kosmo Hero Sure Desk,\nI would like to trade in my old two-wheeler.\n\n*Customer:* ${ownerName}\n*Phone:* ${phone}\n*Current Vehicle:* ${currentMake} ${currentModel} (${manufacturingYear})\n*New Hero Model of Interest:* ${targetVehicle}\n*Preferred Branch:* ${BRANCHES.find(b => b.id === branch)?.name}\n\nPlease schedule my free physical inspection and quote my exchange bonus.`;
    return `https://wa.me/917045169141?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-[#181818] text-white py-14 lg:py-20 border-b-4 border-[#ee2326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Exchange & Trade-In' }]} className="text-gray-400 mb-4" />
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" /> Hero Sure Certified Trade-In
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-1">
              Exchange Old for a Brand-New Hero
            </h1>
            <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed font-light">
              Upgrade any two-wheeler (any make or condition) for a brand-new Hero motorcycle or scooter. Enjoy transparent computerized evaluation and exclusive exchange bonuses up to ₹7,500*.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <span className="text-3xl font-black text-[#ee2326] block mb-2">01</span>
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Free In-Branch Inspection</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bring your vehicle to any Kosmo branch for a multi-point evaluation covering engine, frame, and tyres.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <span className="text-3xl font-black text-[#ee2326] block mb-2">02</span>
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Best Market Price + Bonus</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Receive a fair market price quote, plus an additional festive exchange bonus directly from Hero MotoCorp.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-sm border border-gray-200">
            <span className="text-3xl font-black text-[#ee2326] block mb-2">03</span>
            <h4 className="font-black uppercase text-sm text-gray-900 mb-1">Deduct &amp; Ride Away</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              The valuation amount is directly adjusted against the down payment of your brand-new Hero bike or scooter.
            </p>
          </div>
        </div>

        {/* Trade-In Estimator Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-sm border border-gray-200 shadow-sm p-6 sm:p-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">Valuation Request</span>
          <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-1 mb-2">
            Get an Instant Exchange Estimate
          </h3>
          <p className="text-xs text-gray-600 mb-6">
            Fill in your vehicle details below and our Hero Sure evaluator will calculate your indicative trade-in value.
          </p>

          {isValuated ? (
            <div className="text-center py-6 bg-gray-50 rounded-sm p-6 border border-gray-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-xl font-bold uppercase text-gray-900">Valuation Request Registered</h4>
              <p className="text-xs text-gray-600 mt-1 mb-6">
                Indicative exchange bonus for upgrading to <strong>{targetVehicle}</strong> is up to <strong>₹ 7,500</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppExchangeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#25D366] text-white font-bold text-xs uppercase"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Verify Valuation via WhatsApp</span>
                </a>
                <Button variant="secondary" size="md" onClick={() => setIsValuated(false)}>
                  Submit Another Valuation
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleValuation} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Current Bike Make / Brand *</label>
                  <input
                    type="text"
                    required
                    value={currentMake}
                    onChange={(e) => setCurrentMake(e.target.value)}
                    placeholder="e.g. Hero, Honda, Bajaj, TVS"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Current Model &amp; CC *</label>
                  <input
                    type="text"
                    required
                    value={currentModel}
                    onChange={(e) => setCurrentModel(e.target.value)}
                    placeholder="e.g. Passion Pro 100cc"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Registration Year *</label>
                  <select
                    value={manufacturingYear}
                    onChange={(e) => setManufacturingYear(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  >
                    {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012].map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">New Hero Model Desired *</label>
                  <select
                    value={targetVehicle}
                    onChange={(e) => setTargetVehicle(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  >
                    {allVehicles.map((v) => (
                      <option key={v.slug} value={v.name}>{v.name} ({v.displacementCc} cc)</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="e.g. Sandeep Kumar"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
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
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Nearest Dealership *</label>
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

              <Button type="submit" variant="primary" size="lg" className="w-full mt-4">
                <Send className="w-4 h-4 mr-1" />
                <span>Calculate Trade-In Valuation</span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
