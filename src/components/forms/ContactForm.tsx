import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle2, User, Phone, Mail, MapPin, HelpCircle } from 'lucide-react';
import { BRANCHES } from '../../data/branches';
import { Button } from '../common/Button';

export const ContactForm: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('jalandhar-main');
  const [enquiryType, setEnquiryType] = useState('New Vehicle Purchase');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length !== 10) {
      setErrorMessage('Please provide a valid 10-digit mobile number.');
      return;
    }

    const id = `KSM-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(id);
    setIsSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const branchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
    const branchPhone = branchObj.phoneNumbers[0].replace(/[^0-9]/g, '');

    const text = `Hello Kosmo Hero,\nI have submitted an inquiry.\n\n*Ticket:* ${ticketId}\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email || 'Not provided'}\n*Branch:* ${branchObj.name}\n*Type:* ${enquiryType}\n*Message:* ${message || 'Please contact me regarding current vehicle deals.'}`;

    return `https://wa.me/${branchPhone}?text=${encodeURIComponent(text)}`;
  };

  if (isSubmitted) {
    const branchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];

    return (
      <div className={`bg-white p-8 rounded-sm border border-emerald-500 shadow-lg text-center ${className}`}>
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Inquiry Delivered</span>
        <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-1">Thank You!</h3>
        <p className="text-xs text-gray-600 mt-2 max-w-md mx-auto">
          Your inquiry reference is <strong className="font-mono text-gray-900">{ticketId}</strong>. A dedicated relationship manager from {branchObj.name} will reach out to you within 30 minutes.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd5a] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </a>
          <Button variant="secondary" size="md" onClick={() => setIsSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 sm:p-8 rounded-sm border border-gray-200 shadow-sm ${className}`}>
      <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">Send Us a Message</h3>
      <p className="text-xs text-gray-500 mb-6">
        Whether you have questions about two-wheeler models, finance schemes, or genuine parts, we are here to assist.
      </p>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-xs font-semibold text-red-600 rounded-sm">
          {errorMessage}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Full Name *</label>
          <div className="relative">
            <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Raghav Sharma"
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Phone Number *</label>
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

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Nearest Branch *</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
              >
                {BRANCHES.map((b) => (
                  <option key={b.id} value={b.id}>{b.name} ({b.city})</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Enquiry Category *</label>
            <div className="relative">
              <HelpCircle className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <select
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none bg-white cursor-pointer"
              >
                <option value="New Vehicle Purchase">New Motorcycle / Scooter Purchase</option>
                <option value="Vehicle Service & Repair">Vehicle Service & Maintenance</option>
                <option value="Exchange & Trade-in">Hero Sure Two-Wheeler Exchange</option>
                <option value="Finance & Insurance">Hero FinCorp Retail Loan & EMI</option>
                <option value="Genuine Parts & Accessories">Genuine Spare Parts & Accessories</option>
                <option value="Corporate / Bulk Purchase">Corporate / Institutional Order</option>
                <option value="General Feedback">General Dealership Feedback</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">Your Message</label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what model or service you are interested in..."
            className="w-full p-3 text-xs sm:text-sm border border-gray-300 rounded-sm focus:border-[#ee2326] focus:ring-1 focus:ring-[#ee2326] outline-none"
          ></textarea>
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" className="w-full">
          <Send className="w-4 h-4" />
          <span>Submit Inquiry</span>
        </Button>
      </div>
    </form>
  );
};
