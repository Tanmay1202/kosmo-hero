import React from 'react';
import { Phone, Clock, MapPin, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuickContactBar: React.FC = () => {
  return (
    <div className="bg-[#181818] text-white text-xs border-b border-neutral-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          {/* Left: Roadside Assistance & Working Hours */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1.5 text-gray-300">
              <ShieldAlert className="w-3.5 h-3.5 text-[#ee2326]" />
              <span>24x7 Roadside Assistance:</span>
              <a href="tel:18002097979" className="text-white font-bold hover:text-[#ee2326] transition-colors">
                1800 209 7979
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-gray-400">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>Mon - Sun: 09:30 AM - 07:00 PM</span>
            </div>
          </div>

          {/* Right: Quick Links & Branch Call */}
          <div className="flex items-center space-x-5 text-gray-300">
            <Link to="/dealer-locator" className="flex items-center gap-1 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#ee2326]" />
              <span>5 Jalandhar Locations</span>
            </Link>

            <span className="text-neutral-700">|</span>

            <a href="tel:+919289922739" className="flex items-center gap-1 text-white font-medium hover:text-[#ee2326] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#ee2326]" />
              <span>Jalandhar Desk: +91 92899-22739</span>
            </a>

            <span className="text-neutral-700">|</span>

            <Link to="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
