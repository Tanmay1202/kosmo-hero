import React from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MapPin, Calendar, Wrench, ShieldAlert } from 'lucide-react';
import { Button } from '../common/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Slide-over menu */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Top Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-neutral-900 text-white">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/hero-logo.jpeg"
                alt="Kosmo Vehicles Hero"
                className="w-9 h-9 rounded-full object-cover ring-1 ring-white/20 shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-black uppercase tracking-wider text-xs leading-tight">Kosmo Vehicles Hero</span>
                <span className="text-[9px] uppercase tracking-wider text-[#ee2326] font-bold">Authorised Dealership</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick CTA */}
          <div className="p-4 bg-gray-50 border-b border-gray-100 flex flex-col gap-2">
            <Button to="/book-test-ride" variant="primary" size="md" className="w-full">
              Book Test Ride
            </Button>
            <Button to="/book-service" variant="secondary" size="md" className="w-full">
              Book Workshop Service
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="py-2">
            <Link
              to="/"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Home
            </Link>
            <Link
              to="/motorcycles"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Motorcycles (18 Models)
            </Link>
            <Link
              to="/scooters"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Scooters (7 Models)
            </Link>
            <Link
              to="/offers"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Festive Offers & Deals
            </Link>
            <Link
              to="/service"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Service & Hero Joyride
            </Link>
            <Link
              to="/dealer-locator"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Branch Locator (4 Locations)
            </Link>
            <Link
              to="/finance"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Finance & EMI Calculator
            </Link>
            <Link
              to="/exchange"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Hero Sure Vehicle Exchange
            </Link>
            <Link
              to="/digital-showroom"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Digital 360° Showroom
            </Link>
            <Link
              to="/reviews"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Customer Reviews
            </Link>
            <Link
              to="/gallery"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Photo & Video Gallery
            </Link>
            <Link
              to="/careers"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              Dealership Careers
            </Link>
            <Link
              to="/about"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326] border-b border-gray-50"
            >
              About Kosmo & MD Message
            </Link>
            <Link
              to="/contact-us"
              onClick={onClose}
              className="block px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-900 hover:bg-red-50 hover:text-[#ee2326]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Support Callouts */}
        <div className="p-4 bg-neutral-900 text-white text-xs border-t border-neutral-800 space-y-2">
          <div className="flex items-center gap-2 text-gray-300">
            <ShieldAlert className="w-4 h-4 text-[#ee2326]" />
            <span>RSA 24x7:</span>
            <a href="tel:18002097979" className="text-white font-bold">1800 209 7979</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="w-4 h-4 text-[#ee2326]" />
            <span>Jalandhar:</span>
            <a href="tel:+919289922739" className="text-white font-bold">+91 92899-22739</a>
          </div>
        </div>
      </div>
    </div>
  );
};
