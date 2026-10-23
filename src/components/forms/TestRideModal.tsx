import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Send, Calendar, MapPin, User, Phone, Bike, Sparkles, Clock } from 'lucide-react';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const TEST_RIDE_MOTORCYCLES = [
  'Splendor',
  'HF Deluxe',
  'Passion+',
  'Glamour',
  'Xtreme',
  'XPulse',
];

export const TEST_RIDE_SCOOTERS = [
  'Destini',
  'Pleasure+',
  'Xoom',
];

export const TEST_RIDE_TIME_SLOTS = [
  '10:00 AM - 12:00 PM',
  '12:00 PM - 02:00 PM',
  '02:00 PM - 04:00 PM',
  '04:00 PM - 06:30 PM',
];

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
  const resolveInitialVehicle = (slug: string): string => {
    if (!slug) return '';
    const s = slug.toLowerCase();
    if (s.includes('karizma') || s.includes('harley')) return '';
    if (s.includes('splendor')) return 'Splendor';
    if (s.includes('hf')) return 'HF Deluxe';
    if (s.includes('passion')) return 'Passion+';
    if (s.includes('glamour')) return 'Glamour';
    if (s.includes('xtreme')) return 'Xtreme';
    if (s.includes('xpulse')) return 'XPulse';
    if (s.includes('destini')) return 'Destini';
    if (s.includes('pleasure')) return 'Pleasure+';
    if (s.includes('xoom')) return 'Xoom';
    return '';
  };

  const [selectedModel, setSelectedModel] = useState(() => resolveInitialVehicle(initialModelSlug));
  const [selectedBranch, setSelectedBranch] = useState(initialBranchId);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TEST_RIDE_TIME_SLOTS[0]);
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
      setErrorMessage('Please select a bike or scooter.');
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
    const branchPhone = branchObj.phoneNumbers[0].replace(/[^0-9]/g, '');

    const message = `Hello Kosmo Hero,\nI have scheduled a Test Ride booking.\n\n*Ref Code:* ${bookingRef}\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Vehicle:* ${selectedModel}\n*Branch:* ${branchObj.name}\n*Address:* ${branchObj.address}\n*Preferred Date:* ${preferredDate}\n*Time Slot:* ${selectedTimeSlot}\n*Valid License:* ${hasLicense ? 'Yes' : 'Pending'}\n\nPlease confirm my slot.`;

    return `https://wa.me/${branchPhone}?text=${encodeURIComponent(message)}`;
  };

  if (isSubmitted) {
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
            <span className="font-bold text-[#ee2326]">{selectedModel}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Dealership Branch:</span>
            <span className="font-bold text-gray-900">{branchObj.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Branch Address:</span>
            <span className="text-gray-700 text-right max-w-[220px] font-medium">{branchObj.address}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Scheduled Date:</span>
            <span className="font-bold text-gray-900">{preferredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Time Slot:</span>
            <span className="font-bold text-[#ee2326]">{selectedTimeSlot}</span>
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-6">
          Our branch sales executive will have the vehicle sanitized, fueled, and ready for your ride.
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
              setSelectedTimeSlot(TEST_RIDE_TIME_SLOTS[0]);
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
          Showroom test ride experience across our authorized Jalandhar dealership branches.
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

        {/* Vehicle Selection - Simplified Names Only */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Select Bike or Scooter *
          </label>
          <div className="relative">
            <Bike className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <select
              required
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
            >
              <option value="">-- Choose Bike or Scooter --</option>
              <optgroup label="Hero Motorcycles">
                {TEST_RIDE_MOTORCYCLES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Hero Scooters">
                {TEST_RIDE_SCOOTERS.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        {/* Preferred Dealership Branch */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Select Dealership Branch *
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
                  {b.name.replace('Kosmo Hero - ', '')} {b.isUpcoming ? '(Opening Soon - Pre-Booking)' : ''}
                </option>
              ))}
            </select>
          </div>
          {(() => {
            const currentBranch = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
            return (
              <p className="text-[11px] text-gray-500 mt-1.5 flex items-start gap-1">
                <span className="font-bold text-gray-700 shrink-0">Address:</span>
                <span>{currentBranch.address}</span>
              </p>
            );
          })()}
        </div>

        {/* Preferred Date & Time Slot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Time Slot Selector Buttons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ee2326]" />
              Select Time Slot *
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TEST_RIDE_TIME_SLOTS.map((slot) => {
                const isSelected = selectedTimeSlot === slot;
                return (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`py-2 px-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-sm border transition-all cursor-pointer text-center ${
                      isSelected
                        ? 'bg-[#ee2326] text-white border-[#ee2326] shadow-sm ring-1 ring-[#ee2326]'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
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
