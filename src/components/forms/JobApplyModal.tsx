import React, { useState } from 'react';
import { X, Send, CheckCircle2, User, Phone, Mail, MapPin, Briefcase, FileText, MessageSquare } from 'lucide-react';
import { JobOpening } from '../../types/career';
import { Button } from '../common/Button';

interface JobApplyModalProps {
  job?: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ job, isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Jalandhar');
  const [experience, setExperience] = useState('1-3 Years');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const jobTitle = job ? job.title : 'General Dealership Employment';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppHrUrl = () => {
    const text = `Hello Kosmo Hero HR Desk,\nI am applying for the position of *${jobTitle}*.\n\n*Name:* ${fullName}\n*Phone:* ${phone}\n*Email:* ${email}\n*City:* ${city}\n*Experience:* ${experience}\n*Notes:* ${message || 'Enclosed is my expression of interest.'}`;
    return `https://wa.me/917045169141?text=${encodeURIComponent(text)}`;
  };

  const getMailtoUrl = () => {
    const subject = `Job Application: ${jobTitle} - ${fullName}`;
    const body = `Dear Kosmo Hero HR Team,\n\nPlease consider my application for the role of ${jobTitle}.\n\nFull Name: ${fullName}\nPhone: ${phone}\nCity: ${city}\nExperience: ${experience}\n\nNotes:\n${message}\n\nBest regards,\n${fullName}`;
    return `mailto:customercare@kosmohero.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-sm border border-gray-200 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 rounded-sm"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Application Recorded</span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mt-1">Thank You!</h3>
            <p className="text-xs text-gray-600 mt-2 mb-6">
              Your profile for <strong>{jobTitle}</strong> has been received by the Kosmo Hero recruitment team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppHrUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1ebd5a]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Notify HR via WhatsApp</span>
              </a>
              <a
                href={getMailtoUrl()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#181818] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#303030]"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ee2326]">Kosmo Careers</span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 mt-1">
                Apply for {jobTitle}
              </h3>
              {job && (
                <p className="text-xs text-gray-500 mt-1">
                  {job.department} Department • {job.location} • {job.experience} Required
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Manpreet Singh"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
                      placeholder="9876543210"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@email.com"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Preferred Location</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  >
                    <option value="Jalandhar">Jalandhar</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="Dasuya">Dasuya</option>
                    <option value="Hoshiarpur">Hoshiarpur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Total Experience</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none bg-white"
                  >
                    <option value="Fresher (0-1 Year)">Fresher (0-1 Year)</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Short Introduction / Relevant Experience</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief summary of your background..."
                  className="w-full p-2.5 text-xs border border-gray-300 rounded-sm focus:border-[#ee2326] outline-none"
                ></textarea>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button type="submit" variant="primary" size="md" className="flex-1">
                <Send className="w-3.5 h-3.5 mr-1" />
                <span>Submit Profile</span>
              </Button>
              <Button variant="ghost" size="md" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
