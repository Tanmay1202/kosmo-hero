import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Send, Calendar, MapPin, User, Phone, Bike, Sparkles } from 'lucide-react';
import { MOTORCYCLES } from '../../data/motorcycles';
import { SCOOTERS } from '../../data/scooters';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

interface TestRideFormProps {
  initialModelSlug?: string;
  initialBranchId?: string;
  onSuccess?: () => void;
  className?: string;
}

export const TestRideForm: React.FC<TestRideFormProps> = ({
  initialModelSlug = '',
  initialBranchId = 'jalandhar-main',
  onSuccess,
  className = '',
}) => {
  const allVehicles = [...MOTORCYCLES, ...SCOOTERS];
  const [selectedModel, setSelectedModel] = useState(initialModelSlug);
  const [selectedBranch, setSelectedBranch] = useState(initialBranchId);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [hasLicense, setHasLicense] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length !== 10 || !['6', '7', '8', '9'].includes(cleanPhone[0])) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!selectedModel) {
      setErrorMessage('Please select a motorcycle or scooter model.');
      return;
    }

    if (!preferredDate) {
      setErrorMessage('Please choose your preferred test ride date.');
      return;
    }

    const ref = `HERO-TR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const getWhatsAppUrl = () => {
    const branchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
    const vehicleObj = allVehicles.find((v) => v.slug === selectedModel);
    const vehicleName = vehicleObj ? vehicleObj.name : selectedModel;
    const branchPhone = branchObj.phoneNumbers[0].replace(/[^0-9]/g, '');

    const message = `Hello Kosmo Hero,\nI have scheduled a Test Ride booking.\n\n*Ref Code:* ${bookingRef}\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Vehicle:* ${vehicleName}\n*Branch:* ${branchObj.name} (${branchObj.city})\n*Preferred Date:* ${preferredDate}\n*Valid License:* ${hasLicense ? 'Yes' : 'Pending'}\n\nPlease confirm my slot.`;

    return `https://wa.me/${branchPhone}?text=${encodeURIComponent(message)}`;
  };

  if (isSubmitted) {
    const vehicleObj = allVehicles.find((v) => v.slug === selectedModel);
    const branchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];

    return (
      <div className={`bg-white p-6 sm:p-8 rounded-sm border border-emerald-500 shadow-lg text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Booking Confirmed</span>
        <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-1">
          Test Ride Scheduled!
        </h3>

        <div className="my-5 p-4 bg-gray-50 rounded-sm border border-gray-200 text-left space-y-2 text-xs">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500 font-semibold uppercase">Booking Ref:</span>
            <span className="font-mono font-black text-gray-900">{bookingRef}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Vehicle:</span>
            <span className="font-bold text-[#ee2326]">{vehicleObj?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Dealership Branch:</span>
            <span className="font-bold text-gray-900">{branchObj.name} ({branchObj.city})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Scheduled Date:</span>
            <span className="font-bold text-gray-900">{preferredDate}</span>
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-6">
          Our branch sales executive will have the vehicle sanitized, fueled, and ready for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd5a] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Open WhatsApp Confirmation</span>
          </a>

          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              setIsSubmitted(false);
              setFullName('');
              setPhone('');
              setPreferredDate('');
            }}
          >
            Book Another Ride
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 sm:p-8 rounded-sm border border-gray-200 shadow-sm ${className}`}>
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Fast-Track Booking
        </span>
        <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-0.5">
          Experience Your Dream Hero Ride
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Doorstep test ride or VIP showroom track experience at any of our Punjab dealerships.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-sm">
          {errorMessage}
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Harpreet Singh"
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Mobile Number (10 Digits) *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <span className="absolute left-9 top-2.5 text-xs font-bold text-gray-500">+91</span>
            <input
              type="tel"
              required
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="9876543210"
              className="w-full pl-16 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
            />
          </div>
        </div>

        {/* Model Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Select Hero Model *
          </label>
          <div className="relative">
            <Bike className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <select
              required
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
            >
              <option value="">-- Choose Motorcycle or Scooter --</option>
              <optgroup label="Hero Motorcycles">
                {MOTORCYCLES.map((m) => (
                  <option key={m.slug} value={m.slug}>
                    {m.name} ({m.displacementCc} cc) - From {m.startingPrice}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Hero Scooters">
                {SCOOTERS.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name} ({s.displacementCc} cc) - From {s.startingPrice}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* Preferred Branch */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Select Preferred Dealership Branch *
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
            >
              {BRANCHES.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name} ({b.city})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Preferred Date *
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
            />
          </div>
        </div>

        {/* License Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="hasLicense"
            checked={hasLicense}
            onChange={(e) => setHasLicense(e.target.checked)}
            className="w-4 h-4 text-[#ee2326] border-gray-300 rounded focus:ring-[#ee2326]"
          />
          <label htmlFor="hasLicense" className="text-xs text-gray-600 font-medium cursor-pointer">
            I hold a valid two-wheeler driving license in India.
          </label>
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" className="w-full">
          <Send className="w-4 h-4" />
          <span>Confirm Test Ride Request</span>
        </Button>
        <p className="text-[11px] text-gray-400 text-center mt-3">
          Submitting reserves your test vehicle and generates instant WhatsApp booking credentials.
        </p>
      </div>
    </form>
  );
};
