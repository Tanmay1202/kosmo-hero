import React, { useState } from 'react';
import { CheckCircle2, MessageSquare, Send, Calendar, MapPin, User, Phone, Wrench, Clock, ShieldCheck } from 'lucide-react';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const ServiceBookingForm: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleModel, setVehicleModel] = useState('Splendor+');
  const [regNumber, setRegNumber] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('jalandhar-main');
  const [serviceType, setServiceType] = useState('Free Periodic Service');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (09:30 AM - 12:30 PM)');
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

    if (!regNumber.trim()) {
      setErrorMessage('Please enter your vehicle registration number (e.g. PB 08 AB 1234).');
      return;
    }

    if (!preferredDate) {
      setErrorMessage('Please pick your service appointment date.');
      return;
    }

    const ref = `HERO-SVC-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const branchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
    const branchPhone = branchObj.phoneNumbers[0].replace(/[^0-9]/g, '');

    const message = `Hello Kosmo Hero Service Desk,\nI have booked a Service Appointment.\n\n*Service Token:* ${bookingRef}\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Vehicle:* ${vehicleModel}\n*Reg No:* ${regNumber.toUpperCase()}\n*Service Type:* ${serviceType}\n*Branch:* ${branchObj.name}\n*Date:* ${preferredDate}\n*Time Slot:* ${timeSlot}\n\nPlease prepare my digital job card.`;

    return `https://wa.me/${branchPhone}?text=${encodeURIComponent(message)}`;
  };

  if (isSubmitted) {
    const branchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];

    return (
      <div className={`bg-white p-6 sm:p-8 rounded-sm border border-emerald-500 shadow-lg text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Appointment Confirmed</span>
        <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-1">
          Service Slot Reserved!
        </h3>

        <div className="my-5 p-4 bg-gray-50 rounded-sm border border-gray-200 text-left space-y-2 text-xs">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500 font-semibold uppercase">Token Number:</span>
            <span className="font-mono font-black text-gray-900">{bookingRef}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Vehicle & Reg:</span>
            <span className="font-bold text-[#ee2326]">{vehicleModel} ({regNumber.toUpperCase()})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Service Category:</span>
            <span className="font-bold text-gray-900">{serviceType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Workshop:</span>
            <span className="font-bold text-gray-900">{branchObj.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-semibold uppercase">Scheduled Slot:</span>
            <span className="font-bold text-gray-900">{preferredDate} ({timeSlot})</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-600 bg-blue-50 p-3 rounded mb-6 text-left">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Please bring your Hero service booklet and arrive 10 minutes prior to your slot.</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd5a] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send to Workshop WhatsApp</span>
          </a>

          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              setIsSubmitted(false);
              setFullName('');
              setPhone('');
              setRegNumber('');
              setPreferredDate('');
            }}
          >
            Book Another Service
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 sm:p-8 rounded-sm border border-gray-200 shadow-sm ${className}`}>
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326] flex items-center gap-1.5">
          <Wrench className="w-3.5 h-3.5" /> Certified Workshop Care
        </span>
        <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-0.5">
          Book Authorized Hero Service
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Fast-track 90-minute express service with 100% genuine Hero 4T Plus engine oil and parts.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-sm">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Owner Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Jaswinder Singh"
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Mobile Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="tel"
              required
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="9876543210"
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
            />
          </div>
        </div>

        {/* Vehicle Model */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Hero Model *
          </label>
          <input
            type="text"
            required
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            placeholder="e.g. Splendor+, Xpulse 200, Destini"
            className="w-full px-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
          />
        </div>

        {/* Registration Number */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Registration Number (RC) *
          </label>
          <input
            type="text"
            required
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
            placeholder="PB 08 AB 1234"
            className="w-full px-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none uppercase font-mono"
          />
        </div>

        {/* Branch Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Workshop Location *
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

        {/* Service Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Service Required *
          </label>
          <div className="relative">
            <Wrench className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
            >
              <option value="Free Periodic Service">Free Scheduled Periodic Service (1st to 5th)</option>
              <option value="Paid General Service">Paid General Maintenance & Oil Replacement</option>
              <option value="Hero Joyride AMC Renewal">Hero Joyride Annual AMC Renewal</option>
              <option value="FI Engine Diagnostics">Computerized FI Diagnostics & Tuning</option>
              <option value="Accidental & Insurance">Accidental Bodywork & Cashless Insurance</option>
              <option value="Brake & Tyre Overhaul">Brake Overhaul / Tyre Replacement</option>
            </select>
          </div>
        </div>

        {/* Appointment Date */}
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

        {/* Time Slot */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
            Time Window *
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
            >
              <option value="Morning (09:30 AM - 12:30 PM)">Morning (09:30 AM - 12:30 PM)</option>
              <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
              <option value="Evening (04:00 PM - 06:30 PM)">Evening (04:00 PM - 06:30 PM)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" className="w-full">
          <Send className="w-4 h-4" />
          <span>Confirm Service Appointment</span>
        </Button>
      </div>
    </form>
  );
};
